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
let isOnCheck;
let realCheck = false;
let isOnCheckHelper;	
let socket;	
let myturn;
let myname;
let checkarray;
let checkopponentpos;
let moves = new Array();

var script = document.createElement('script');	
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';	
script.type = 'text/javascript';	
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function () {	
    namespace = '/test';	
    socket = io(namespace);	
    socket.on('connect', function () {	
        socket.emit('my_event', { data: 'I\'m connected!' });	
    });	
    socket.on('my_response', function (msg, cb) {	
        if (cb)	
            cb();	
    });	
    socket.on('my_response1', function (msg, cb) {	
		myturn = !myturn;
		test(msg);	
        if (cb) {	
            cb();	
        }	
    });	
});		
function skipTurn(){

	if (myname == "black"){
		myname = "white";
	}else if(myname == "white"){
		myname = "black";
	}
	console.log(myname);
}

function setturn(turn,name){
	myturn = turn;
	myname = name;

}

function createObject(object, i){
    let position = object.position;	
    let src = object.source;	
    let type = object.type;	
	let defaultPlace = object.default;
    switch (src.substring(src.length-5, src.length)){	
        case "B.png":	
            chessArray[i] = new Bishop(position, src, type);
			chessArray[i].setDefault(defaultPlace);
            break;	
        case "K.png":	
            chessArray[i] = new King(position, src, type);
			chessArray[i].setDefault(defaultPlace);
            break;	
        case "N.png":	
            chessArray[i] = new Knight(position, src, type);
			chessArray[i].setDefault(defaultPlace);
            break;	
        case "P.png":	
            chessArray[i] = new Pawn(position, src, type);	
			chessArray[i].setDefault(defaultPlace);
            break;	
        case "Q.png":	
            chessArray[i] = new Queen(position, src, type);	
			chessArray[i].setDefault(defaultPlace);
            break;	
        case "R.png":	
            chessArray[i] = new Rook(position, src, type);
			chessArray[i].setDefault(defaultPlace);			
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
}	
function test(msg){	
    let oldPos = msg.data[0];	
    let newPos = msg.data[1];	
    chessArray = msg.data[2];
    realCheck = msg.data[3];
    checkarray = msg.data[4];
    checkopponentpos = msg.data[5];
    // console.log("TEST");
    // console.log(msg.data)
    
    for(let i  = 0; i < chessArray.length; i++){	
        createObject(chessArray[i], i);	
    }
    if(realCheck){
        swal({
            icon: 'error',
            title: 'Check!'
        });
    }
    updateBoard(oldPos, newPos, globalBoard);	
}	
let joined = false;	
function sendData(oldPosition, newPosition, chessArray ,realCheck,checkarray,checkopponentpos){
    let data = [oldPosition, newPosition, chessArray, realCheck,checkarray,checkopponentpos]
    console.log(checkarray);	
    socket.emit('my_room_event', { room: '1' , "data" : data});	
}

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
    if(moveOptions.includes(parseInt(piece.position, 10))){
        document.getElementById(piece.position).removeAttribute("src");
        document.getElementById(oldPiece.position).removeAttribute("src");
        document.getElementById(piece.position).src = oldPiece.source;
        const index = chessArray.indexOf(piece);
        piece = oldPiece;
        if (index > -1) {
            chessArray.splice(index, 1);
        }
        return true;
    }
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
    moveOptions = new Array();
}

function checkPawnPromotion(childId){
    let promotedPiece = null
    let index;
    let sourcePromoted;
    let promotionChoice = ["queen", "knight", "rook", "bishop"]
    for (let i = 0; i < chessArray.length; i++) {
        if (chessArray[i].getPosition() == childId) {
            promotedPiece = chessArray[i];
            index = i;
        }
    }

    promotedPieceType = promotedPiece.source.substring(promotedPiece.source.length-6, promotedPiece.source.length);
    // console.log(promotedPieceType);
    promotedPiecePosition = promotedPiece.position;
    // console.log(promotedPiecePosition);
    if(promotedPieceType.includes("P.png")){
        switch(promotedPieceType[0]){
            case "b":
                if(promotedPiecePosition > 80 && promotedPiecePosition < 90){
                    let pieceType = "black";
                    // console.log("can promote");
                    var choice = prompt("What do you want to promote to?");
                    if (choice == null || choice == "" || !promotionChoice.includes(choice.toLowerCase())) {
                        console.log("User cancelled the prompt.");
                    } else {
                        switch(choice.toLowerCase()){
                            case "queen":
                                sourcePromoted = "Pieces/Black/bQ.png"
                                document.getElementById(promotedPiecePosition).removeAttribute("src");
                                document.getElementById(promotedPiecePosition).src = sourcePromoted;
                                chessArray[index] = new Queen(promotedPiecePosition, sourcePromoted, pieceType);	
                                break;
                            case "knight":
                                sourcePromoted = "Pieces/Black/bN.png"
                                document.getElementById(promotedPiecePosition).removeAttribute("src");
                                document.getElementById(promotedPiecePosition).src = sourcePromoted;
                                chessArray[index] = new Knight(promotedPiecePosition, sourcePromoted, pieceType);
                                break;
                            case "rook":
                                sourcePromoted = "Pieces/Black/bR.png"
                                document.getElementById(promotedPiecePosition).removeAttribute("src");
                                document.getElementById(promotedPiecePosition).src = sourcePromoted;
                                chessArray[index] = new Rook(promotedPiecePosition, sourcePromoted, pieceType);
                                break;
                            case "bishop":
                                sourcePromoted = "Pieces/Black/bB.png"
                                document.getElementById(promotedPiecePosition).removeAttribute("src");
                                document.getElementById(promotedPiecePosition).src = sourcePromoted;
                                chessArray[index] = new Bishop(promotedPiecePosition, sourcePromoted, pieceType);
                                break;
                        }
                    }
                }
                break;
            case "w":
                if(promotedPiecePosition > 10 && promotedPiecePosition < 20){
                    let pieceType = "white";
                    // console.log("can promote");
                    var choice = prompt("What do you want to promote to?");
                    if (choice == null || choice == "" || !promotionChoice.includes(choice.toLowerCase())) {
                        console.log("User cancelled the prompt.");
                    } else {
                        switch(choice.toLowerCase()){
                            case "queen":
                                sourcePromoted = "Pieces/White/wQ.png"
                                document.getElementById(promotedPiecePosition).removeAttribute("src");
                                document.getElementById(promotedPiecePosition).src = sourcePromoted;
                                chessArray[index] = new Queen(promotedPiecePosition, sourcePromoted, pieceType);	
                                break;
                            case "knight":
                                sourcePromoted = "Pieces/White/wN.png"
                                document.getElementById(promotedPiecePosition).removeAttribute("src");
                                document.getElementById(promotedPiecePosition).src = sourcePromoted;
                                chessArray[index] = new Knight(promotedPiecePosition, sourcePromoted, pieceType);
                                break;
                            case "rook":
                                sourcePromoted = "Pieces/White/wR.png"
                                document.getElementById(promotedPiecePosition).removeAttribute("src");
                                document.getElementById(promotedPiecePosition).src = sourcePromoted;
                                chessArray[index] = new Rook(promotedPiecePosition, sourcePromoted, pieceType);
                                break;
                            case "bishop":
                                sourcePromoted = "Pieces/White/wB.png"
                                document.getElementById(promotedPiecePosition).removeAttribute("src");
                                document.getElementById(promotedPiecePosition).src = sourcePromoted;
                                chessArray[index] = new Bishop(promotedPiecePosition, sourcePromoted, pieceType);
                                break;
                        }
                    }
                }
                break;
        }
    }
}
function checkMakeMove(element){
    if (myturn && piece.getType() == myname){
        let old = childId;
        childId = parseFloat(element.childNodes[0].id);
        if (moves.includes(childId)){       //Moves is an array from next check move (from piece class)
            movePiece(element, childId.toString());
            checkPawnPromotion(childId);
            moves = new Array();
            if(old && childId ){	
                for(var i=0; i < chessArray.length;i++){
                    if(chessArray[i].position == childId.toString()){
                        let nextMoveArray = chessArray[i].getNextValidMoves(chessArray[i])      
                        
                        isOnCheck = isCheck(nextMoveArray);
                    }
                }
                for (var i = 0; i < chessArray.length; i++) {
                    if (chessArray[i].constructor.name == "King") {
                        var potentialCheck = chessArray[i].allThePossible(chessArray[i]);
                        var KingCurrentPosition = chessArray[i].position;
                        isOnCheckHelper = isCheckHelper(potentialCheck, KingCurrentPosition);
                    }
                }
                realCheck = isOnCheck || isOnCheckHelper;
                if (realCheck){
                    for (var i = 0; i<chessArray.length;i++){
                        if (chessArray[i].position == childId.toString()){
                            checkarray = chessArray[i].getNextValidMoves(chessArray[i]);        //only get moves in direction of king Queen gets all directions
                            //^BUG getting ids from same direction of the opponent piece
                            checkarray.push(childId);
                        }
                    }
                }
                else if(realCheck == false){
                    checkarray = new Array();
                }
                sendData(old, childId.toString(), chessArray, realCheck,checkarray);	
                }
        }

    }
}

function makeMove(element) {
    if (realCheck){checkMakeMove(element)}
    if (myturn && piece.getType() == myname && realCheck == false){
        let old = childId;	
        childId = parseFloat(element.childNodes[0].id);	
        if (moveOptions.includes(childId)) {	
            movePiece(element, childId.toString());	
            checkPawnPromotion(childId);
            moveOptions = new Array();	
            if(old && childId ){	
                for(var i=0; i < chessArray.length;i++){
                    if(chessArray[i].position == childId.toString()){
                        let nextMoveArray = chessArray[i].getNextValidMoves(chessArray[i]);
                        isOnCheck = isCheck(nextMoveArray);
                    }
                }
                for (var i = 0; i < chessArray.length; i++) {
                    if (chessArray[i].constructor.name == "King") {
                        var potentialCheck = chessArray[i].allThePossible(chessArray[i]);
                        var KingCurrentPosition = chessArray[i].position;
                        isOnCheckHelper = isCheckHelper(potentialCheck, KingCurrentPosition);
                    }
                }
                realCheck = isOnCheck || isOnCheckHelper;
                if (realCheck){
                    for (var i = 0; i<chessArray.length;i++){
                        if (chessArray[i].position == childId.toString()){
                            checkarray = chessArray[i].getNextValidMoves(chessArray[i]);        //only get moves in direction of king
                            checkopponentpos = childId;
                        }
                    }
                }else if(realCheck == false){
                    checkarray = new Array();
                    checkopponentpos = 0;
                }
                // King moves and puts itself in check 
                sendData(old, childId.toString(), chessArray, realCheck,checkarray,checkopponentpos);	
            }	
        }
    }
}


function isCheckHelper(potentialCheck, KingCurrentPosition){
    var oponentType = "black";
    if (piece.type == "black") {
        oponentType = "white";
    }
    for (var j = 0; j < potentialCheck.length; j++) {
        for (var i = 0; i < chessArray.length; i++) {
            if (chessArray[i].position == potentialCheck[j].toString() && piece.type != oponentType) {
                if ((Number(chessArray[i].position) - KingCurrentPosition) % 10 == 0 && (chessArray[i].constructor.name == "Rook" ) ){
                    return true;
                } else if ((Number(chessArray[i].position) - KingCurrentPosition) % 10 != 0 && (chessArray[i].constructor.name == "Bishop")){
                    return true;
                } else if (((Number(chessArray[i].position) - KingCurrentPosition) % 10 != 0 || Number(chessArray[i].position) - KingCurrentPosition % 10 == 0) && (chessArray[i].constructor.name == "Queen")) {
                    return true;
                }
            }
        }
    }
    return false;
}

function isCheck(nextMoveArray){
    var oponentType = "black";
    if (piece.type == "black") {
        oponentType = "white";
    }
    for(var j = 0; j<nextMoveArray.length;j++){
        for (var i = 0; i < chessArray.length; i++) {
            if (chessArray[i].position == nextMoveArray[j].toString() && chessArray[i].constructor.name == 'King' && piece.type != oponentType) {
                return true;
            }
        }
    }
    return false;
}

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

    let blackKing1 = new King("15", "Pieces/Black/bK.png", "black");

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
}
let first = true;

function select(position) {
	//console.log(myname);
    if(myturn){
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

		if(oldPiece != null && oldPiece.type != piece.type){
			captured = capture();
		}
		
		if(!captured && realCheck == false){
			if(piece.getType() == myname){
                moves = piece.getValidMoves();
                piece.highlightMoves(moves);
			}
        }
        else if(realCheck){
            if(piece.getType() == myname){
                moves = piece.getCheckValidMoves(checkarray,checkopponentpos);
                piece.highlightMoves(moves);
			}           
        }
    }   
}