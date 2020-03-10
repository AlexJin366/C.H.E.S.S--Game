class Rook{
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

    checkCapture(position){
        var imgSrc = a;
        switch(this.type){
            case "black":
                if(imgSrc.includes("Pieces/White/")){
                    this.getMoveArray().push(position);
                }
                break;
            case "white":
                if(imgSrc.includes("Pieces/Black/")){
                    this.getMoveArray().push(position);
                }
                break;
        }
    }

    getValidMoves() {
        
        let currentPos = Number(this.position);
        if (selectedPiece != this.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            // clearValidMoves();
            this.clean();
        }

        let movesUp = 90 - currentPos;

        //moves down
        for (let i = 10; i < movesUp; i += 10) {
            let option = currentPos + i;
            if (a != ""){
                this.checkCapture(option);
                break;
            }
            if (option > 10)
                this.getMoveArray().push(option);
        }

        //moves up
        for (let i = 10; i < 90; i += 10) {
            let option = currentPos - i;
            if (option > 10 && a == "")
                this.getMoveArray().push(option);
            if (option > 10 && a != ""){
                this.checkCapture(option);
                break;
            }
        }

        //moves left
        for (let i = 1; i < 9; i += 1) {
            let option = currentPos - i;
            let mathRequirement1 = (Math.floor(currentPos / 10) * 10 + 9);
            let mathRequirement2 = (Math.floor(currentPos / 10) * 10);
            if (option > mathRequirement2 && option < mathRequirement1 && a == "")
                this.getMoveArray().push(option);
            if (option > mathRequirement2 && option < mathRequirement1 && a!= ""){
                this.checkCapture(option);
                break;
            }
        }

        //moves right
        for (let i = 1; i < 9; i += 1) {
            let option = currentPos + i;
            let mathRequirement1 = (Math.floor(currentPos / 10) * 10 + 9);
            let mathRequirement2 = (Math.floor(currentPos / 10) * 10);
            if (option > mathRequirement2 && option < mathRequirement1 && a == "")
                this.getMoveArray().push(option);
            if (option > mathRequirement2 && option < mathRequirement1 && a != ""){
                this.checkCapture(option);
                break
            }
        }

        moveOptions = this.getMoveArray();
        return this.getMoveArray();
        // this.highlightMoves(this.getMoveArray());
        
    }

    getNextValidMoves(Rook) {
        let NextMoveArray = new Array();
        let currentPos = Number(Rook.position);
        if (selectedPiece != Rook.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = Rook.position;
            clearValidMoves();
            this.clean();
        }

        let movesUp = 90 - currentPos;

        //moves down
        for (let i = 10; i < movesUp; i += 10) {
            let option = currentPos + i;
            if (a != "") {
                this.checkCapture(option);
                break;
            }
            if (option > 10)
                NextMoveArray.push(option);
        }

        //moves up
        for (let i = 10; i < 90; i += 10) {
            let option = currentPos - i;
            if (option > 10 && a == "")
                NextMoveArray.push(option);
            if (option > 10 && a != "") {
                this.checkCapture(option);
                break;
            }
        }

        //moves left
        for (let i = 1; i < 9; i += 1) {
            let option = currentPos - i;
            let mathRequirement1 = (Math.floor(currentPos / 10) * 10 + 9);
            let mathRequirement2 = (Math.floor(currentPos / 10) * 10);
            if (option > mathRequirement2 && option < mathRequirement1 && a == "")
                NextMoveArray.push(option);
            if (option > mathRequirement2 && option < mathRequirement1 && a != "") {
                this.checkCapture(option);
                break;
            }
        }

        //moves right
        for (let i = 1; i < 9; i += 1) {
            let option = currentPos + i;
            let mathRequirement1 = (Math.floor(currentPos / 10) * 10 + 9);
            let mathRequirement2 = (Math.floor(currentPos / 10) * 10);
            if (option > mathRequirement2 && option < mathRequirement1 && a == "")
                NextMoveArray.push(option);
            if (option > mathRequirement2 && option < mathRequirement1 && a != "") {
                this.checkCapture(option);
                break
            }
        }

        moveOptions = this.getMoveArray();
        var returnArray = NextMoveArray.concat(moveOptions);
        this.NextMove = returnArray;
        return returnArray;
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

    getNextCheckValidMoves(Rook) {
        let NextMoveArray = new Array();
        let currentPos = Number(Rook.position);
        if (selectedPiece != Rook.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = Rook.position;
            clearValidMoves();
            this.clean();
        }

        let movesUp = 90 - currentPos;

        //moves down
        for (let i = 10; i < movesUp; i += 10) {
            let option = currentPos + i;
            if (a != "") {
                this.checkCapture(option);
                break;
            }
            if (option > 10 )
                NextMoveArray.push(option);
        }

        //moves up
        for (let i = 10; i < 90; i += 10) {
            let option = currentPos - i;
            if (option > 10 && (a == "" || a == "Pieces/White/wK.png" || a == "Pieces/Black/bK.png"))
                NextMoveArray.push(option);
            if (option > 10 && a != "") {
                this.checkCapture(option);
                break;
            }
        }

        //moves left
        for (let i = 1; i < 9; i += 1) {
            let option = currentPos - i;
            let mathRequirement1 = (Math.floor(currentPos / 10) * 10 + 9);
            let mathRequirement2 = (Math.floor(currentPos / 10) * 10);
            if (option > mathRequirement2 && option < mathRequirement1 && (a == "" || a == "Pieces/White/wK.png" || a == "Pieces/Black/bK.png"))
                NextMoveArray.push(option);
            if (option > mathRequirement2 && option < mathRequirement1 && a != "") {
                this.checkCapture(option);
                break;
            }
        }

        //moves right
        for (let i = 1; i < 9; i += 1) {
            let option = currentPos + i;
            let mathRequirement1 = (Math.floor(currentPos / 10) * 10 + 9);
            let mathRequirement2 = (Math.floor(currentPos / 10) * 10);
            if (option > mathRequirement2 && option < mathRequirement1 && (a == "" || a == "http://127.0.0.1:5000/Pieces/White/wK.png" || a == "http://127.0.0.1:5000/Pieces/Black/bK.png"))
                NextMoveArray.push(option);
            else if (option > mathRequirement2 && option < mathRequirement1 && a != "") {
                this.checkCapture(option);
                break
            }
        }
        console.log(NextMoveArray);

        moveOptions = this.getMoveArray();
        var returnArray = NextMoveArray.concat(moveOptions);
        this.NextMove = returnArray;
        return returnArray;
    }
    
    getCheckValidMoves(checkarray, checkopponentpos) {
        let validcheckmove = new Array();
        let moves = this.getValidMoves();
        // console.log(moves);
        for (var i = 0; i < moves.length; i++) {

            if (checkarray.includes(moves[i])) {
                validcheckmove.push(moves[i]);
            }
        }
        if (checkarray.includes(checkopponentpos)) { validcheckmove.push(checkopponentpos) }
        return validcheckmove
    }

}

module.exports = {
    Rook
}