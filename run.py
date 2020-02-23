from flask import Flask, render_template, send_file
from flask_socketio import SocketIO
import os
import json
from Player import Player

app = Flask(__name__, static_folder='public', static_url_path='')
socketio = SocketIO(app)

def player():
    global PlayerA
    global number_users
    if PlayerA == 0:
        PlayerA = Player("Player A", True)
        number_users += 1
        return
    global PlayerB
    if PlayerB == 0:
        playerB = Player("Player B",False)
        number_users += 1
        return
    
    
# Handle the index (home) page
@app.route('/')
def index():
    global number_users
    if number_users>=2:
        return render_template('cannotplay.html')
    player()
    return render_template('index.html')



# Any additional handlers that go beyond simply loading a template
# (e.g., a handler that needs to pass data to a template) can be added here


if __name__ == "__main__":
    PlayerA = 0
    PlayerB = 0
    
    number_users = 0
    socketio.run(app,host='10.250.11.180', port=880, debug=True)
    #app.run(host='10.250.11.180', port=880, debug=True)
