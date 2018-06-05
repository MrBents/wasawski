from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/image')
def hello_world():
    return 'IMG_101_bad_5_M.JPEG'
