from flask import Flask, jsonify, request, render_template
import requests

app = Flask(__name__)

API_BASE_URL = "https://arbeitnow.com/api/job-board-api"

def fetch_jobs(query_params=None):
    try:
        response = requests.get(f"{API_BASE_URL}", params=query_params)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"Error fetching jobs: {e}")
        return None

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/jobs", methods=["GET"])
def get_jobs():
    params = {
        "search": request.args.get("search"),
        "location": request.args.get("location"),
        "category": request.args.get("category"),
    }
    params = {k: v for k, v in params.items() if v is not None}

    jobs = fetch_jobs(params)
    if jobs:
        return jsonify(jobs), 200
    return jsonify({"error": "Unable to fetch jobs"}), 500

# New endpoints for pre.html and dreams.html
@app.route("/pre")
def pre():
    return render_template("pre.html")

@app.route("/dreams")
def dreams():
    return render_template("dreams.html")

if __name__ == "__main__":
    app.run(debug=True)
