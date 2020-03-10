class Knight{
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
        // var imgSrc = document.getElementById(position.toString()).src;
        var imgSrc = $('#'+position.toString()).attr('src');
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

        //right -> right -> up = -8
        //right -> right -> down = +12
        //up -> up -> right = -19
        //up -> up -> left = -21
        //left -> left -> up = -12
        //left -> left -> down = +8
        //down -> down -> right = +21
        //down -> down -> left = +19

        let knightMoves = [-8, 12, -19, -21, -12, 8, 21, 19];

        for (let i = 0; i < knightMoves.length; i++) {
            let option = currentPos + knightMoves[i];
            if (option >= 10 && option <= 88) {
                if (option % 10 == 0 || option % 10 == 9) {
                    continue;
                }
                if(a == ""){
                    this.getMoveArray().push(option);
                }else{
                    // this.checkCapture(option);
                }
            }
        }

        moveOptions = this.getMoveArray();
        return this.getMoveArray();
        // this.highlightMoves(this.getMoveArray());

    }

    getNextValidMoves(Knight) {
        let NextMoveArray = new Array();
        let currentPos = Number(Knight.position);
        if (selectedPiece != Knight.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = Knight.position;
            // clearValidMoves();
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

        for (let i = 0; i < knightMoves.length; i++) {
            let option = currentPos + knightMoves[i];
            if (option >= 10 && option <= 88) {
                if (option % 10 == 0 || option % 10 == 9) {
                    continue;
                }
                if (a == "") {
                    NextMoveArray.push(option);
                } else {
                    // this.checkCapture(option);
                }
            }
        }

        moveOptions = this.getMoveArray();
        var returnArray = NextMoveArray.concat(moveOptions);
        this.NextMove = returnArray;
        this.NextMove = returnArray;
        return returnArray;
    }
    
    getCheckValidMoves(checkarray,checkopponentpos){
        let validcheckmove = new Array();
        let moves = this.getValidMoves();
        
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
    Knight
}