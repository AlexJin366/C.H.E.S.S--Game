let chessArray = new Array();
let moveOptions = new Array();
let oldSelectedPiece = null;
let selectedPiece = null;
let piece;

function clearValidMoves(){
    for(let i = 0; i < chessArray.length; i++){
        if(chessArray[i].getPosition() == oldSelectedPiece){
            let selectedPiece = chessArray[i].getMoveArray()
            for(j = 0; j < selectedPiece.length; j++){
                if(document.getElementById(selectedPiece[j]).parentElement.className == "BlackBlock"){
                    document.getElementById(selectedPiece[j]).parentElement.style.background = "gray"; 
                }else{
                    document.getElementById(selectedPiece[j]).parentElement.style.background = "white"; 
                }
            }
        }
    }
}

function clearMoveMade(){
    for(let i = 0; i < moveOptions.length; i++){
        if(document.getElementById(moveOptions[i].toString()).parentElement.className == "BlackBlock"){
            document.getElementById(moveOptions[i].toString()).parentElement.style.background = "gray"; 
        }else{
            document.getElementById(moveOptions[i].toString()).parentElement.style.background = "white"; 
        }
    }
}

function movePiece(element, childId){
    document.getElementById(piece.position).src = "";
    document.getElementById(childId).src = piece.source; 
    clearMoveMade();
}

function makeMove(element){
    let childId = parseFloat(element.childNodes[0].id);
    if(moveOptions.includes(childId)){
        movePiece(element, childId);
    }else{
        console.log("can't move there");
    }
}

class Pawn {
    constructor(position, source, type) {
      this.position = position;
      this.source = source;
      this.type = type;
      this.default = true;
      this.validMoves = new Array();
    }

    getPosition() {
    //   console.log("My position is on " + this.position);
      return this.position;
    }

    setPosition(newPos){
        this.position = newPos;
    }

    getSource(){
        return this.source
    }

    highlightMoves(validMoves){
        // console.log(validMoves);
        for(let i = 0; i < validMoves.length; i++)
            document.getElementById(validMoves[i]).parentElement.style.background = "#bfbc9f"; 
    }

    getMoveArray(){
        return this.validMoves;
    }

    getValidMoves(){
        let currentPos = Number(this.position);
        // console.log(currentPos);
        if(selectedPiece != this.position){
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            clearValidMoves();
        }
        if(this.type == "black"){
            currentPos++;
            if(this.default){
                this.getMoveArray().push(currentPos++, currentPos++);
            }else{
                this.getMoveArray().push(currentPos++);
            }
        }else{
            if(this.default){
                currentPos--;
                this.getMoveArray().push(currentPos--, currentPos--);
            }else{
                this.getMoveArray().push(currentPos--);
            }
        }
        moveOptions = this.getMoveArray();
        this.highlightMoves(this.getMoveArray());
    }
}

class Rook {
    constructor(position, source) {
      this.position = position;
      this.source = source;
    }
    getPosition() {
    //   console.log("My position is on " + this.position);
      return this.position;
    }

    setPosition(newPos){
        this.position = newPos;
    }

    getSource(){
        return this.source
    }
}

class Knight {
    constructor(position, source) {
      this.position = position;
      this.source = source;
    }
    getPosition() {
    //   console.log("My position is on " + this.position);
      return this.position;
    }

    setPosition(newPos){
        this.position = newPos;
    }

    getSource(){
        return this.source
    }
}

class Bishop {
    constructor(position, source) {
      this.position = position;
      this.source = source;
    }
    getPosition() {
    //   console.log("My position is on " + this.position);
      return this.position;
    }

    setPosition(newPos){
        this.position = newPos;
    }

    getSource(){
        return this.source
    }
}

class Queen {
    constructor(position, source) {
      this.position = position;
      this.source = source;
    }
    getPosition() {
    //   console.log("My position is on " + this.position);
      return this.position;
    }

    setPosition(newPos){
        this.position = newPos;
    }

    getSource(){
        return this.source
    }
}

class King {
    constructor(position, source) {
      this.position = position;
      this.source = source;
    }
    getPosition() {
    //   console.log("My position is on " + this.position);
      return this.position;
    }

    setPosition(newPos){
        this.position = newPos;
    }

    getSource(){
        return this.source
    }
}

function load(){
  
    let blackPawn0 = new Pawn("2.1", "Pices/Black/bP.png", "black");
    let blackPawn1 = new Pawn("2.2", "Pices/Black/bP.png", "black");
    let blackPawn2 = new Pawn("2.3", "Pices/Black/bP.png", "black");
    let blackPawn3 = new Pawn("2.4", "Pices/Black/bP.png", "black");
    let blackPawn4 = new Pawn("2.5", "Pices/Black/bP.png", "black");
    let blackPawn5 = new Pawn("2.6", "Pices/Black/bP.png", "black");
    let blackPawn6 = new Pawn("2.7", "Pices/Black/bP.png", "black");
    let blackPawn7 = new Pawn("2.8", "Pices/Black/bP.png", "black");

    let whitePawn0 = new Pawn("7.1", "Pices/White/wP.png", "white");
    let whitePawn1 = new Pawn("7.2", "Pices/White/wP.png", "white");
    let whitePawn2 = new Pawn("7.3", "Pices/White/wP.png", "white");
    let whitePawn3 = new Pawn("7.4", "Pices/White/wP.png", "white");
    let whitePawn4 = new Pawn("7.5", "Pices/White/wP.png", "white");
    let whitePawn5 = new Pawn("7.6", "Pices/White/wP.png", "white");
    let whitePawn6 = new Pawn("7.7", "Pices/White/wP.png", "white");
    let whitePawn7 = new Pawn("7.8", "Pices/White/wP.png", "white");

    let blackRook1 = new Rook("1.1", "Pices/Black/bR.png");
    let blackRook2 = new Rook("1.8", "Pices/Black/bR.png");

    let whiteRook1 = new Rook("8.1", "Pices/White/wR.png");
    let whiteRook2 = new Rook("8.8",  "Pices/White/wR.png");

    let blackKnight1 = new Rook("1.2", "Pices/Black/bN.png");
    let blackKnight2 = new Rook("1.7", "Pices/Black/bN.png");

    let whiteKnight1 = new Rook("8.2", "Pices/White/wN.png");
    let whiteKnight2 = new Rook("8.7",  "Pices/White/wN.png");

    let blackBishop1 = new Bishop("1.3", "Pices/Black/bB.png");
    let blackBishop2 = new Bishop("1.6", "Pices/Black/bB.png");

    let whiteBishop1 = new Bishop("8.3", "Pices/White/wB.png");
    let whiteBishop2 = new Bishop("8.6",  "Pices/White/wB.png");

    let blackQueen1 = new Bishop("1.4", "Pices/Black/bQ.png");

    let whiteQueen1 = new Bishop("8.4", "Pices/White/wQ.png");

    let blackKing1 = new Bishop("1.5", "Pices/Black/bK.png");

    let whiteKing1 = new Bishop("8.5", "Pices/White/wK.png");

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

    for(let i = 0; i < chessArray.length; i++){
        let piece = chessArray[i];
        document.getElementById(piece.getPosition()).src = piece.getSource();
    }
}

function select(position){
    for(let i = 0; i < chessArray.length; i++){
        if(chessArray[i].getPosition() == position){
            piece = chessArray[i];
        }
    }

    piece.getValidMoves();

    console.log(piece);
}