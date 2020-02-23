let chessArray = new Array();
let moveOptions = new Array();
let oldSelectedPiece = null;
let selectedPiece = null;
let piece;

function clearValidMoves(){
    for(let i = 0; i < chessArray.length; i++){
        if(chessArray[i].getPosition() == oldSelectedPiece){
            let selectedPiece = chessArray[i].getMoveArray()
            for(let j = 0; j < selectedPiece.length; j++){
                if(document.getElementById(selectedPiece[j]).parentElement.className == "BlackBlock"){
                    document.getElementById(selectedPiece[j]).parentElement.style.background = "gray"; 
                }else{
                    document.getElementById(selectedPiece[j]).parentElement.style.background = "white"; 
                }
            }
        }
    }
    moveOptions = new Array();
    piece.validMoves = new Array();
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
    moveOptions = new Array();
}

function makeMove(element){
    let childId = parseFloat(element.childNodes[0].id);
    if(moveOptions.includes(childId)){
        movePiece(element, childId);
        moveOptions = new Array();
        piece.moveOptions = new Array();
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

        let movesUp = 90 - currentPos;

        //moves down
        for(let i = 10; i < movesUp; i+=10){
            let option = currentPos + i;
            if (option > 10)
                this.getMoveArray().push(option);
        }

        //moves up
        for(let i = 10; i < 90; i+=10){
            let option = currentPos - i;
            if(option > 10)
                this.getMoveArray().push(option);
        }

        //moves left
        for(let i = 1; i < 9; i+=1){
            let option = currentPos - i;
            if(option > (Math.floor(currentPos/10) * 10) && option < (Math.floor(currentPos/10) * 10 + 9))
                this.getMoveArray().push(option);
        }

        // //moves right
        for(let i = 1; i < 9; i+=1){
            let option = currentPos + i;
            if(option > (Math.floor(currentPos/10) * 10) && option < (Math.floor(currentPos/10) * 10 + 9))
                this.getMoveArray().push(option);
        }

        moveOptions = this.getMoveArray();
        this.highlightMoves(this.getMoveArray());
    }
}

class Knight {
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

        //right -> right -> up = -8
        //right -> right -> down = +12
        //up -> up -> right = -19
        //up -> up -> left = -21
        //left -> left -> up = -12
        //left -> left -> down = +8
        //down -> down -> right = +21
        //down -> down -> left = +19

        let knightMoves = [-8, 12, -19, -21, -12, 8, 21, 19];

        for(let i = 0; i < knightMoves.length; i++){
            let option = currentPos + knightMoves[i];
            if(option >= 10 && option <= 88 ){
                if(option % 10 == 0 || option % 10 == 9){
                    continue;
                }
                // console.log(option);
                this.getMoveArray().push(option);
            }
        }

        moveOptions = this.getMoveArray();
        this.highlightMoves(this.getMoveArray());

    }
}

class Bishop {
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

        let bishopMoves = [9, -9, 11, -11];

        for(let i = 0; i < bishopMoves.length; i++){
            let option = currentPos;
            for(let j = 0; j < 5; j++){
                option += bishopMoves[i];
                if(option >= 10 && option <= 88 ){
                    if(option % 10 == 0 || option % 10 == 9){
                        continue;
                    }
                    // console.log(option);
                    this.getMoveArray().push(option);
                }
            }
            
        }

        moveOptions = this.getMoveArray();
        this.highlightMoves(this.getMoveArray());

    }
}

class Queen {
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

        let queenMoves = [];

        let movesUp = 90 - currentPos;

        //moves down
        for(let i = 10; i < movesUp; i+=10){
            let option = currentPos + i;
            if (option > 10)
                this.getMoveArray().push(option);
        }

        //moves up
        for(let i = 10; i < 90; i+=10){
            let option = currentPos - i;
            if(option > 10)
                this.getMoveArray().push(option);
        }

        //moves left
        for(let i = 1; i < 9; i+=1){
            let option = currentPos - i;
            if(option > (Math.floor(currentPos/10) * 10) && option < (Math.floor(currentPos/10) * 10 + 9))
                this.getMoveArray().push(option);
        }

        // //moves right
        for(let i = 1; i < 9; i+=1){
            let option = currentPos + i;
            if(option > (Math.floor(currentPos/10) * 10) && option < (Math.floor(currentPos/10) * 10 + 9))
                this.getMoveArray().push(option);
        }

        moveOptions = this.getMoveArray();
        this.highlightMoves(this.getMoveArray());

    }
}

class King {
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

        let kingMoves = [-10, 10, -1, 1, -9, 9, 11, -11];

        for(let i = 0; i < kingMoves.length; i++){
            let option = currentPos + kingMoves[i];
            if(option >= 10 && option <= 88 ){
                if(option % 10 == 0 || option % 10 == 9){
                    continue;
                }
                // console.log(option);
                this.getMoveArray().push(option);
            }
        }

        moveOptions = this.getMoveArray();
        this.highlightMoves(this.getMoveArray());

    }
}

class Board{
    constructor(pieces){
        this.pieces = pieces;
    }

    renderBoard(){
        let boardHTML = `<table class="ChessBoard">
        <tr>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="11"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="12"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="13"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="14"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="15"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="16"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="17"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="18"></div></td>
        </tr>
        <tr>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="21" ></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="22"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="23"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="24"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="25"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="26"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="27"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="28"></div></td>
        </tr>
        <tr>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="31"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="32"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="33"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="34"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="35"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="36"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="37"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="38"></div></td>
        </tr>
        <tr>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="41"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="42"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="43"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="44"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="45"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="46"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="47"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="48"></div></td>
        </tr>
        <tr>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="51"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="52"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="53"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="54"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="55"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="56"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="57"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="58"></div></td>
        </tr>
        <tr>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="61"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="62"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="63"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="64"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="65"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="66"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="67"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="68"></div></td>
        </tr>
        <tr>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="71"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="72"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="73"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="74"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="75"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="76"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="77"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="78"></div></td>
        </tr>
        <tr>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="81"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="82"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="83"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="84"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="85"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="86"></div></td>
            <td><div class="BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="87"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="88"></div></td>
        </tr>

    </table>`;

        document.getElementsByClassName("Board_div")[0].innerHTML = boardHTML;
        for(let i = 0; i < this.pieces.length; i++){
            let piece = this.pieces[i];
            document.getElementById(piece.getPosition()).src = piece.getSource();
        }
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

    let blackRook1 = new Rook("11", "Pices/Black/bR.png", "black");
    let blackRook2 = new Rook("18", "Pices/Black/bR.png", "black");

    let whiteRook1 = new Rook("81", "Pices/White/wR.png", "white");
    let whiteRook2 = new Rook("88",  "Pices/White/wR.png", "white");

    let blackKnight1 = new Knight("12", "Pices/Black/bN.png", "black");
    let blackKnight2 = new Knight("17", "Pices/Black/bN.png", "black");

    let whiteKnight1 = new Knight("82", "Pices/White/wN.png", "white");
    let whiteKnight2 = new Knight("87",  "Pices/White/wN.png", "white");

    let blackBishop1 = new Bishop("13", "Pices/Black/bB.png", "black");
    let blackBishop2 = new Bishop("16", "Pices/Black/bB.png", "black");

    let whiteBishop1 = new Bishop("83", "Pices/White/wB.png", "white");
    let whiteBishop2 = new Bishop("86",  "Pices/White/wB.png", "white");

    let blackQueen1 = new Queen("14", "Pices/Black/bQ.png", "black");

    let whiteQueen1 = new Queen("84", "Pices/White/wQ.png", "white");

    let blackKing1 = new King("15", "Pices/Black/bK.png", "black");

    let whiteKing1 = new King("85", "Pices/White/wK.png", "white");

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

    let board = new Board(chessArray);
    board.renderBoard();

    // for(let i = 0; i < chessArray.length; i++){
    //     let piece = chessArray[i];
    //     document.getElementById(piece.getPosition()).src = piece.getSource();
    // }
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