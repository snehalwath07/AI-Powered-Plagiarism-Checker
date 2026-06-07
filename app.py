from flask import Flask, request, jsonify
from flask_cors import CORS

import os
import docx
import PyPDF2
from duckduckgo_search import DDGS

app = Flask(__name__)

CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.route("/")
def home():
    return "Backend Running"


def calculate_scores(text_content):

    word_count = len(text_content.split())

    character_count = len(text_content)

    sentence_count = len(
        [s for s in text_content.split(".")
         if s.strip()]
    )

    paragraph_count = len(
        [p for p in text_content.split("\n")
         if p.strip()]
    )

    reading_time = max(
        1,
        round(word_count / 200)
    )

    unique_words = len(
        set(text_content.lower().split())
    )

    if word_count > 0:
        originality_score = min(
            100,
            int((unique_words / word_count) * 100)
        )
    else:
        originality_score = 0

    plagiarism_score = max(
        0,
        100 - originality_score
    )

    sentence_count_safe = max(
        1,
        sentence_count
    )

    avg_sentence_length = (
        word_count / sentence_count_safe
    )

    if avg_sentence_length > 25:
        ai_score = 70
    elif avg_sentence_length > 18:
        ai_score = 50
    else:
        ai_score = 25

    grammar_score = min(
        100,
        max(
            40,
            originality_score + 10
        )
    )

    return {
        "plagiarism_score": plagiarism_score,
        "originality_score": originality_score,
        "ai_score": ai_score,
        "grammar_score": grammar_score,

        "word_count": word_count,
        "character_count": character_count,
        "sentence_count": sentence_count,
        "paragraph_count": paragraph_count,
        "reading_time": reading_time
    }


# FILE UPLOAD
@app.route("/upload", methods=["POST"])
def upload_file():

    try:

        if "file" not in request.files:
            return jsonify({
                "error": "No file uploaded"
            }), 400

        file = request.files["file"]

        if file.filename == "":
            return jsonify({
                "error": "Empty filename"
            }), 400

        filepath = os.path.join(
            UPLOAD_FOLDER,
            file.filename
        )

        file.save(filepath)

        text_content = ""

        # TXT
        if file.filename.endswith(".txt"):

            with open(
                filepath,
                "r",
                encoding="utf-8"
            ) as f:

                text_content = f.read()

        # DOCX
        elif file.filename.endswith(".docx"):

            doc = docx.Document(filepath)

            paragraphs = []

            for para in doc.paragraphs:
                paragraphs.append(para.text)

            text_content = "\n".join(
                paragraphs
            )

        # PDF
        elif file.filename.endswith(".pdf"):

            with open(
                filepath,
                "rb"
            ) as pdf_file:

                reader = PyPDF2.PdfReader(
                    pdf_file
                )

                pages = []

                for page in reader.pages:

                    extracted = page.extract_text()

                    if extracted:
                        pages.append(extracted)

                text_content = "\n".join(
                    pages
                )

        else:

            text_content = (
                "Unsupported file format"
            )

        scores = calculate_scores(
            text_content
        )

        result = {
            **scores,
            "text_content": text_content
        }

        return jsonify(result)

    except Exception as e:

        print("ERROR:", e)

        return jsonify({
            "error": str(e)
        }), 500


# TEXT INPUT
@app.route("/analyze-text", methods=["POST"])
def analyze_text():

    try:

        data = request.get_json()

        text_content = data.get(
            "text_content",
            ""
        )

        scores = calculate_scores(
            text_content
        )

        result = {
            **scores,
            "text_content": text_content
        }

        return jsonify(result)

    except Exception as e:

        print("ERROR:", e)

        return jsonify({
            "error": str(e)
        }), 500


# TEST SEARCH
@app.route("/test-search")
def test_search():

    results = []

    try:

        with DDGS() as ddgs:

            for r in ddgs.text(
                "artificial intelligence in education",
                max_results=5
            ):

                results.append({
                    "title": r.get("title"),
                    "url": r.get("href")
                })

        return jsonify(results)

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)

