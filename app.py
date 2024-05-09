from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to Infinite Tour Technologies!"

if __name__ == '__main__':
    app.run(debug=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///InfiniteTourTech.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
