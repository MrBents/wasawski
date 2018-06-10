from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/image')
def send_img():
    return "/Users/maxbentata/NODE_playground/wasawski/backend/imgs/IMG_12_good_0_L.JPEG"
