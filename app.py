from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to Infinite Tour Technologies!"

if __name__ == '__main__':
    app.run(debug=True)
