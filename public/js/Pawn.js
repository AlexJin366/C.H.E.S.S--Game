class Pawn{
    constructor(position, source, type) {
        this.position = position;
        this.source = source;
        this.type = type;
        this.default = true;
        this.validMoves = new Array();
        this.NextMove = new Array()
    }
    getPosition() {
        return this.position;
    }

    setPosition(newPos) {
        this.position = newPos;
    }
	
	setDefault(bool){
		this.default = bool;
	}

    getSource() {
        return this.source
    }

    highlightMoves(validMoves) {
        for (let i = 0; i < validMoves.length; i++)
            // document.getElementById(validMoves[i]).parentElement.style.background = "#bfbc9f";
            $(validMoves[i]).parent().css("background", "bfbc9f" );
    }

    getMoveArray() {
        return this.validMoves;
    }

	getType(){
		return this.type;
	}

    clean() {
        this.validMoves = new Array();
    }

    checkCapture(){
        let currentPos = Number(this.position);
        if (selectedPiece != this.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            this.clean();
        }
        if(this.type == "black"){
            if(((currentPos + 9) < (Math.floor((currentPos+10) / 10) * 10 + 9)) && (currentPos + 9) > (Math.floor((currentPos+10) / 10) * 10)){
                if( a != "" && a.includes("/Pieces/White/")){
                    this.getMoveArray().push(currentPos + 9);
                }
            }
            if(((currentPos + 11) < (Math.floor((currentPos+10) / 10) * 10 + 9)) && (currentPos + 11) > (Math.floor((currentPos+10) / 10) * 10)){
                if(b != "" && b.includes("/Pieces/White/")){
                    this.getMoveArray().push(currentPos + 11);
                }
            }
        }else{
            if(((currentPos - 9) < (Math.floor((currentPos-10) / 10) * 10 + 9)) && (currentPos - 9) > (Math.floor((currentPos-10) / 10) * 10)){
                if(c != "" && c.includes("/Pieces/Black/")){
                    this.getMoveArray().push(currentPos - 9);
                }
            }
            if(((currentPos - 11) < (Math.floor((currentPos-10) / 10) * 10 + 9)) && (currentPos - 11) > (Math.floor((currentPos-10) / 10) * 10)){
                if(d != "" && d.includes("/Pieces/Black/")){
                    this.getMoveArray().push(currentPos - 11);
                }
            }
        }
    }

    getValidMoves() {
        let currentPos = Number(this.position);
        if (selectedPiece != this.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            this.clean();
        }
        if (this.type == "black") {
            if (this.default) {
                if (e == "" && f == "") {
                    this.getMoveArray().push(currentPos += 10, currentPos += 10);
                } else if (f != "" && e == "") {
                    this.getMoveArray().push(currentPos += 10);
                }
            } else {
                if (e == "") {
                    this.getMoveArray().push(currentPos += 10);
                }
            }
        } else {
            if (this.default) {
                if (e == "" && f == "") {
                    this.getMoveArray().push(currentPos -= 10, currentPos -= 10);
                } else if (f != "" && e == "") {
                    this.getMoveArray().push(currentPos -= 10);
                }
            } else {
                if (e == "") {
                    this.getMoveArray().push(currentPos -= 10);
                }
            }
        }
        this.checkCapture();
        moveOptions = this.getMoveArray();
        return this.getMoveArray();
        // this.highlightMoves(this.getMoveArray());
    }


    getNextValidMoves(Pawn) {
       
        let NextMoveArray = new Array();
        let currentPos = Number(Pawn.position);
        if (selectedPiece != Pawn.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = Pawn.position;
            this.clean();
        }
        if (Pawn.type == "black") {
            if (((currentPos + 9) < (Math.floor((currentPos + 10) / 10) * 10 + 9)) && (currentPos + 9) > (Math.floor((currentPos + 10) / 10) * 10)) {
                if (a != "" && a.includes("/Pieces/White/")) {
                    NextMoveArray.push(currentPos + 9);
                }
            }
            if (((currentPos + 11) < (Math.floor((currentPos + 10) / 10) * 10 + 9)) && (currentPos + 11) > (Math.floor((currentPos + 10) / 10) * 10)) {
                if (a != "" && a.includes("/Pieces/White/")) {
                    NextMoveArray.push(currentPos + 11);
                }
            }
        } else {
            if (((currentPos - 9) < (Math.floor((currentPos - 10) / 10) * 10 + 9)) && (currentPos - 9) > (Math.floor((currentPos - 10) / 10) * 10)) {
                if (b != "" && b.includes("/Pieces/Black/")) {
                    NextMoveArray.push(currentPos - 9);
                }
            }
            if (((currentPos - 11) < (Math.floor((currentPos - 10) / 10) * 10 + 9)) && (currentPos - 11) > (Math.floor((currentPos - 10) / 10) * 10)) {
                if (b != "" && b.includes("/Pieces/Black/")) {
                    NextMoveArray.push(currentPos - 11);
                }
            }
        }
        this.NextMove = NextMoveArray;
        return NextMoveArray;
    }
    getCheckValidMoves(checkarray,checkopponentpos){
        let validcheckmove = new Array();
        let moves = this.getValidMoves();
        // console.log(moves);
        for(var i = 0; i<moves.length;i++){
            
             if(checkarray.includes(moves[i])){
                 validcheckmove.push(moves[i]);
             }
        }
        if(checkarray.includes(checkopponentpos)){validcheckmove.push(checkopponentpos)}
        return validcheckmove
    }
}

module.exports = {
    Pawn
}