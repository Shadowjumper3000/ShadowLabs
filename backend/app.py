from flask import Flask
import os

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello from Flask backend!"


if __name__ == "__main__":
    debug = os.environ.get("FLASK_DEBUG", "0") == "1"

    # Print helpful development information
    if debug:
        print("=" * 60)
        print("🚀 ShadowLabs Development Server Starting")
        print("=" * 60)
        print(f"Backend API: http://localhost:5000")
        print(f"Frontend App: http://localhost:3000")
        print("=" * 60)

    app.run(host="0.0.0.0", port=5000, debug=debug)
