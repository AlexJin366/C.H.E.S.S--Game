let chessArray = new Array();
let moveOptions = new Array();
let oldSelectedPiece = null;
let selectedPiece = null;
let piece;
let oldPiece = null;
let captured = false;
let childId = null;	
let newChildId = null;	
let globalBoard = null;	
let boardObj;	
let socket;	

//Serve code starts

var script = document.createElement('script');	
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';	
script.type = 'text/javascript';	
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function () {	
    // 	// Use a "/test" namespace.	
    //         // An application can open a connection on multiple namespaces, and	
    //         // Socket.IO will multiplex all those connections on a single	
    //         // physical channel. If you don't care about multiple channels, you	
    //         // can set the namespace to an empty string.	
    namespace = '/test';	
    //         // Connect to the Socket.IO server.	
    //         // The connection URL has the following format, relative to the current page:	
    //         //     http[s]://<domain>:<port>[/<namespace>]	
    socket = io(namespace);	
    //         // Event handler for new connections.	
    //         // The callback function is invoked when a connection with the	
    //         // server is established.	
    socket.on('connect', function () {	
        socket.emit('my_event', { data: 'I\'m connected!' });	
    });	
    //         // Event handler for server sent data.	
    //         // The callback function is invoked whenever the server emits data	
    //         // to the client. The data is then displayed in the "Received"	
    //         // section of the page.	
    socket.on('my_response', function (msg, cb) {	
        console.log("fdsja")	
        // $('#log').append('<br>' + $('<div/>').text('Received #' + msg.count + ': ' + msg.data).html());	
        if (cb)	
            cb();	
    });	
    socket.on('my_response1', function (msg, cb) {	
        // $('#log').append('<br>' + $('<div/>').text('Received #' + msg.count + ': ' + msg.data).html());	
        console.log("-------" + msg);	
        test(msg);	
        if (cb) {	
            cb();	
        }	
    });	
    // $('form#join').submit(function (event) {	
    //     socket.emit('join', { room: $('#join_room').val() });	
    //     return false;	
    // });	
    // $('form#send_room').submit(function (event) {	
    //     socket.emit('my_room_event', { room: $('#room_name').val(), data: $('#room_data').val() });	
    //     return false;	
    // });	
});		

function createObject(object, i){	
    let position = object.position;	
    let src = object.source;	
    let type = object.type;	
    switch (src.substring(src.length-5, src.length)){	
        case "B.png":	
            chessArray[i] = new Bishop(position, src, type)	
            break;	
        case "K.png":	
            chessArray[i] = new King(position, src, type)	
            break;	
        case "N.png":	
            chessArray[i] = new Knight(position, src, type)	
            break;	
        case "P.png":	
            chessArray[i] = new Pawn(position, src, type)	
            break;	
        case "Q.png":	
            chessArray[i] = new Queen(position, src, type)	
            break;	
        case "R.png":	
            chessArray[i] = new Rook(position, src, type)	
            break;	
    }	
}	
function updateBoard(oldPosition, newPosition, board) {	
    let oldSrc;	
    let newSrc;	
    for (let i = 0; i < chessArray.length; i++) {	
        if (chessArray[i].position == oldPosition) {	
            oldSrc = chessArray[i];	
            piece = chessArray[i];	
        }else if (chessArray[i].position == newPosition){	
            newSrc = chessArray[i];	
            piece = chessArray[i];	
        }	
    }	
    	
    document.getElementById(oldPosition).removeAttribute("src");	
    if(!captured){	
        if(newSrc){	
            document.getElementById(newPosition).src = newSrc.source;	
        }	
        else{	
            document.getElementById(newPosition).src = oldSrc.source;	
        }	
    }else{	
        if(newSrc){	
            document.getElementById(newPosition).src = newSrc.source;	
        }	
        else{	
            document.getElementById(newPosition).src = oldSrc.source;	
        }	
    }	
    	
    clearMoveMade();	
    piece.position = newPosition;	
    piece.default = false;	
    piece.validMoves = new Array();	
    moveOptions = new Array();	
    // globalBoard = board;	
    // boardObj.update(globalBoard);	
}	
function test(msg){	
    // console.log(msg);	
    let oldPos = msg.data[0];	
    let newPos = msg.data[1];	
    chessArray = msg.data[2];	
    for(let i  = 0; i < chessArray.length; i++){	
        createObject(chessArray[i], i);	
    }	
    console.log("here" + chessArray);	
    updateBoard(oldPos, newPos, globalBoard);	
}	
let joined = false;	
function sendData(oldPosition, newPosition, chessArray){	
    console.log(chessArray);	
    let data = [oldPosition, newPosition, chessArray]	
    // namespace = '/test';	
    // let socket1 = io(namespace);	
    socket.emit('my_room_event', { room: '1' , "data" : data});	
    // socket1.on('my_response1', function (msg, cb) {	
    //     $('#log').append('<br>' + $('<div/>').text('Received #' + msg.count + ': ' + msg.data).html());	
    //     console.log("-------" + msg);	
    //     test(msg);	
    //     if(cb){	
    //         cb();	
    //     }	
    // });	
    // if(!joined){	
    //     document.getElementById("join_room").value = "1";	
    //     document.getElementById("joinSubmit").click();	
    //     joined = true;	
    // }	
    // document.getElementById("room_name").value = "1";	
    // document.getElementById("room_data").value = data;	
    // document.getElementById("sendSubmit").click();	
}

///Server code end

function clearValidMoves() {
    for (let i = 0; i < chessArray.length; i++) {
        if (chessArray[i].getPosition() == oldSelectedPiece) {
            let selectedPiece = chessArray[i].getMoveArray()
            for (let j = 0; j < selectedPiece.length; j++) {
                if (document.getElementById(selectedPiece[j]).parentElement.className == "BlackDimension BlackBlock") {
                    document.getElementById(selectedPiece[j]).parentElement.style.background = "gray";
                } else {
                    document.getElementById(selectedPiece[j]).parentElement.style.background = "white";
                }
            }
        }
    }
    moveOptions = new Array();
    piece.validMoves = new Array();
}

function capture(){
    console.log("this is what is eating -- " + oldPiece.source);
    console.log("this is being eaten --- " + piece.source);
    if(moveOptions.includes(parseInt(piece.position, 10))){
        console.log("yes can eat");
        document.getElementById(piece.position).removeAttribute("src");
        document.getElementById(oldPiece.position).removeAttribute("src");
        document.getElementById(piece.position).src = oldPiece.source;
        const index = chessArray.indexOf(piece);
        piece = oldPiece;
        if (index > -1) {
            chessArray.splice(index, 1);
        }
        return true;
    }else{
        console.log("no cant eat");
    }
    // console.log("--what i want to eat" + position);
}

function clearMoveMade() {
    for (let i = 0; i < moveOptions.length; i++) {
        if (document.getElementById(moveOptions[i].toString()).parentElement.className == "BlackDimension BlackBlock") {
            document.getElementById(moveOptions[i].toString()).parentElement.style.background = "gray";
        } else {
            document.getElementById(moveOptions[i].toString()).parentElement.style.background = "white";
        }
    }
}

function movePiece(element, childId) {
    document.getElementById(piece.position).removeAttribute("src");
    if(!captured){
        document.getElementById(childId).src = piece.source;
    }else{
        document.getElementById(childId).src = oldPiece.source;
    }
    
    clearMoveMade();
    piece.position = childId;
    piece.default = false;
    piece.clean();
    moveOptions = new Array();
}

//Changed function from server

	function makeMove(element) {	
    let old = childId;	
    childId = parseFloat(element.childNodes[0].id);	
    if (moveOptions.includes(childId)) {	
        movePiece(element, childId.toString());	
        moveOptions = new Array();	
        // piece.moveOptions = new Array();	
        if(old && childId){	
            sendData(old, childId.toString(), chessArray);	
        }	
    } else {	
        console.log("can't move there");	
    }	
}
/*
function makeMove(element) {
    // if()
    let childId = parseFloat(element.childNodes[0].id);
    if (moveOptions.includes(childId)) {
        movePiece(element, childId);
        moveOptions = new Array();
        piece.moveOptions = new Array();
    } else {
        console.log("can't move there");
    }
}
*/

function load() {

    let blackPawn0 = new Pawn("21", "Pieces/Black/bP.png", "black");
    let blackPawn1 = new Pawn("22", "Pieces/Black/bP.png", "black");
    let blackPawn2 = new Pawn("23", "Pieces/Black/bP.png", "black");
    let blackPawn3 = new Pawn("24", "Pieces/Black/bP.png", "black");
    let blackPawn4 = new Pawn("25", "Pieces/Black/bP.png", "black");
    let blackPawn5 = new Pawn("26", "Pieces/Black/bP.png", "black");
    let blackPawn6 = new Pawn("27", "Pieces/Black/bP.png", "black");
    let blackPawn7 = new Pawn("28", "Pieces/Black/bP.png", "black");

    let whitePawn0 = new Pawn("71", "Pieces/White/wP.png", "white");
    let whitePawn1 = new Pawn("72", "Pieces/White/wP.png", "white");
    let whitePawn2 = new Pawn("73", "Pieces/White/wP.png", "white");
    let whitePawn3 = new Pawn("74", "Pieces/White/wP.png", "white");
    let whitePawn4 = new Pawn("75", "Pieces/White/wP.png", "white");
    let whitePawn5 = new Pawn("76", "Pieces/White/wP.png", "white");
    let whitePawn6 = new Pawn("77", "Pieces/White/wP.png", "white");
    let whitePawn7 = new Pawn("78", "Pieces/White/wP.png", "white");

    let blackRook1 = new Rook("11", "Pieces/Black/bR.png", "black");
    let blackRook2 = new Rook("18", "Pieces/Black/bR.png", "black");

    let whiteRook1 = new Rook("81", "Pieces/White/wR.png", "white");
    let whiteRook2 = new Rook("88", "Pieces/White/wR.png", "white");

    let blackKnight1 = new Knight("12", "Pieces/Black/bN.png", "black");
    let blackKnight2 = new Knight("17", "Pieces/Black/bN.png", "black");

    let whiteKnight1 = new Knight("82", "Pieces/White/wN.png", "white");
    let whiteKnight2 = new Knight("87", "Pieces/White/wN.png", "white");

    let blackBishop1 = new Bishop("13", "Pieces/Black/bB.png", "black");
    let blackBishop2 = new Bishop("16", "Pieces/Black/bB.png", "black");

    let whiteBishop1 = new Bishop("83", "Pieces/White/wB.png", "white");
    let whiteBishop2 = new Bishop("86", "Pieces/White/wB.png", "white");

    let blackQueen1 = new Queen("14", "Pieces/Black/bQ.png", "black");

    let whiteQueen1 = new Queen("84", "Pieces/White/wQ.png", "white");

    let blackKing1 = new King("15", "Pieces/Black/bK.png", "black"
    );

    let whiteKing1 = new King("85", "Pieces/White/wK.png", "white");

    chessArray.push(blackPawn0);
    chessArray.push(blackPawn1);
    chessArray.push(blackPawn2);
    chessArray.push(blackPawn3);
    chessArray.push(blackPawn4);
    chessArray.push(blackPawn5);
    chessArray.push(blackPawn6);
    chessArray.push(blackPawn7);

    chessArray.push(whitePawn0);
    chessArray.push(whitePawn1);
    chessArray.push(whitePawn2);
    chessArray.push(whitePawn3);
    chessArray.push(whitePawn4);
    chessArray.push(whitePawn5);
    chessArray.push(whitePawn6);
    chessArray.push(whitePawn7);

    chessArray.push(blackRook1);
    chessArray.push(blackRook2);

    chessArray.push(whiteRook1);
    chessArray.push(whiteRook2);

    chessArray.push(blackKnight1);
    chessArray.push(blackKnight2);

    chessArray.push(whiteKnight1);
    chessArray.push(whiteKnight2);

    chessArray.push(blackBishop1);
    chessArray.push(blackBishop2);

    chessArray.push(whiteBishop1);
    chessArray.push(whiteBishop2);

    chessArray.push(blackKing1);

    chessArray.push(whiteKing1);

    chessArray.push(blackQueen1);

    chessArray.push(whiteQueen1);

    boardObj = new Board(chessArray);	
    boardObj.renderBoard();	
    globalBoard = boardObj.boardHTML;

    // for(let i = 0; i < chessArray.length; i++){
    //     let piece = chessArray[i];
    //     document.getElementById(piece.getPosition()).src = piece.getSource();
    // }
}
let first = true;

function select(position) {
    let found = false;
    captured = false;
    for (let i = 0; i < chessArray.length; i++) {
        if(first){
            if (chessArray[i].getPosition() == position) {
                piece = chessArray[i];
                first = false;
                found = true;
                break;
            }
        }else if(!first){
            if (chessArray[i].getPosition() == position) {
                oldPiece = piece;
                piece = chessArray[i];
            }
        }
        
    }

    if(oldPiece != null){
        captured = capture();
    }
    if(!captured){
        piece.getValidMoves();
    }
    
    console.log(piece);
}