from flask import Flask
import os

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello from Flask backend!"


if __name__ == "__main__":
    debug = os.environ.get("FLASK_DEBUG", "0") == "1"
    app.run(host="0.0.0.0", port=5000, debug=debug)
