#from flask import Flask 
#from flask_socketio import SocketIO, send

#app = Flask(__name__)
#socketio = SocketIO(app)

#@socketio.on('message')
#def handleMessage(msg):
#	print('Message: ' + msg)
#	send(msg, broadcast=True)

#if __name__ == '__main__':
#	socketio.run(app)



from flask import Flask, render_template #, send_file, request
from flask_socketio import SocketIO,send, emit#,join_room, leave_room
from Player import Player


app = Flask(__name__, static_folder='public', static_url_path='')
socketio = SocketIO(app)

def addplayer():
    global PlayerA
    global PlayerB
    global number_users
    global current_user
    if PlayerA == 0:
        PlayerA = Player("Player A", True)
        connect(PlayerA)
        return
    elif PlayerB == 0:
        PlayerB = Player("Player B",False)
        connect(PlayerB)
        return

@socketio.on('connected')
def connected():
    send("DFD", broadcast=True)

@socketio.on('connect')
def connect(current_user):
    global number_users
    global playerslist
    number_users += 1
 #   print(request.namespace.socket.sessid)

    playerslist.append(current_user)
  #  socketio.emit('status', {'count': number_users}, broadcast=True)

#Not disconnecting yet!
#@socketio.on('disconnect')
#def disconnect(current_user):
 #   global number_users
  #  global playerslist
   # number_users -= 1    
    #playerslist.remove(current_user)
    #socketio.emit('status', {'count': number_users}, broadcast=True)
    
#@socketio.on('message')
#def handleMessage(msg):
#	print('Message: ' + msg)
#	send(msg, broadcast=True)
    
# Handle the index (home) page
@app.route('/')
def index():
    global number_users
    if number_users>=2:
        return render_template('cannotplay.html')
    addplayer()
    return render_template('index.html')

#@app.route("/", methods=["GET"])
#def get_my_ip():
#    return request.remote_addr


# Any additional handlers that go beyond simply loading a template
# (e.g., a handler that needs to pass data to a template) can be added here

if __name__ == "__main__":
    playerslist = []
    PlayerA = 0
    PlayerB = 0
    current_user = 0
    number_users = 0
    socketio.run(app,debug=True)
    #app.run(host='10.250.11.180', port=880, debug=True)
