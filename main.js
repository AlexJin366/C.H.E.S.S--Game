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
    document.getElementById(piece.position).removeAttribute("src");
    document.getElementById(childId).src = piece.source;
    clearMoveMade();
    piece.position = childId;
    piece.default = false;
    piece.clean();
    moveOptions = null;
}

function makeMove(element){
    let childId = parseFloat(element.childNodes[0].id);
    if(moveOptions.includes(childId)){
        movePiece(element, childId);
        moveOptions = null;
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
        for(let i = 0; i < validMoves.length; i++){
            document.getElementById(validMoves[i]).parentElement.style.background = "#bfbc9f";  
        }
    }

    getMoveArray(){
        return this.validMoves;
    }

    clean(){
        this.validMoves = new Array();
    }

    getValidMoves(){
        let currentPos = Number(this.position);
        console.log("------" + currentPos);
        if(selectedPiece != this.position){
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            clearValidMoves();
            this.clean();
        }
        if(this.type == "black"){
            if(this.default){
                if (document.getElementById((currentPos + 10).toString()).src == "" && document.getElementById((currentPos + 20).toString()).src == "") {
                    this.getMoveArray().push(currentPos += 10, currentPos += 10);
                } else if (document.getElementById((currentPos + 20).toString()).src != "" && document.getElementById((currentPos + 10).toString()).src == "") {
                    this.getMoveArray().push(currentPos += 10);
                }
            }else{
                if(document.getElementById((currentPos+10).toString()).src == ""){
                    this.getMoveArray().push(currentPos += 10);
                }
            }
        }else{
            if(this.default){
                if (document.getElementById((currentPos - 10).toString()).src == "" && document.getElementById((currentPos - 20).toString()).src == ""){
                    this.getMoveArray().push(currentPos -= 10, currentPos -= 10);
                } else if (document.getElementById((currentPos - 20).toString()).src != "" && document.getElementById((currentPos - 10).toString()).src == "" ){
                    this.getMoveArray().push(currentPos -= 10);
                }
            }else{
                if (document.getElementById((currentPos - 10).toString()).src == "") {
                    this.getMoveArray().push(currentPos -= 10);
                }
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
  
    let blackPawn0 = new Pawn("21", "Pices/Black/bP.png", "black");
    let blackPawn1 = new Pawn("22", "Pices/Black/bP.png", "black");
    let blackPawn2 = new Pawn("23", "Pices/Black/bP.png", "black");
    let blackPawn3 = new Pawn("24", "Pices/Black/bP.png", "black");
    let blackPawn4 = new Pawn("25", "Pices/Black/bP.png", "black");
    let blackPawn5 = new Pawn("26", "Pices/Black/bP.png", "black");
    let blackPawn6 = new Pawn("27", "Pices/Black/bP.png", "black");
    let blackPawn7 = new Pawn("28", "Pices/Black/bP.png", "black");

    let whitePawn0 = new Pawn("71", "Pices/White/wP.png", "white");
    let whitePawn1 = new Pawn("72", "Pices/White/wP.png", "white");
    let whitePawn2 = new Pawn("73", "Pices/White/wP.png", "white");
    let whitePawn3 = new Pawn("74", "Pices/White/wP.png", "white");
    let whitePawn4 = new Pawn("75", "Pices/White/wP.png", "white");
    let whitePawn5 = new Pawn("76", "Pices/White/wP.png", "white");
    let whitePawn6 = new Pawn("77", "Pices/White/wP.png", "white");
    let whitePawn7 = new Pawn("78", "Pices/White/wP.png", "white");

    let blackRook1 = new Rook("11", "Pices/Black/bR.png");
    let blackRook2 = new Rook("18", "Pices/Black/bR.png");

    let whiteRook1 = new Rook("81", "Pices/White/wR.png");
    let whiteRook2 = new Rook("88",  "Pices/White/wR.png");

    let blackKnight1 = new Rook("12", "Pices/Black/bN.png");
    let blackKnight2 = new Rook("17", "Pices/Black/bN.png");

    let whiteKnight1 = new Rook("82", "Pices/White/wN.png");
    let whiteKnight2 = new Rook("87",  "Pices/White/wN.png");

    let blackBishop1 = new Bishop("13", "Pices/Black/bB.png");
    let blackBishop2 = new Bishop("16", "Pices/Black/bB.png");

    let whiteBishop1 = new Bishop("83", "Pices/White/wB.png");
    let whiteBishop2 = new Bishop("86",  "Pices/White/wB.png");

    let blackQueen1 = new Bishop("14", "Pices/Black/bQ.png");

    let whiteQueen1 = new Bishop("84", "Pices/White/wQ.png");

    let blackKing1 = new Bishop("15", "Pices/Black/bK.png");

    let whiteKing1 = new Bishop("85", "Pices/White/wK.png");

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