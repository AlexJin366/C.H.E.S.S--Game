class Queen {
    constructor(position, source, type) {
        this.position = position;
        this.source = source;
        this.type = type;
        this.default = true;
        this.validMoves = new Array();
    }
    getPosition() {
        return this.position;
    }

    setPosition(newPos) {
        this.position = newPos;
    }

    getSource() {
        return this.source
    }

    highlightMoves(validMoves) {
        for (let i = 0; i < validMoves.length; i++)
            document.getElementById(validMoves[i]).parentElement.style.background = "#bfbc9f";
    }

    getMoveArray() {
        return this.validMoves;
    }

    clean() {
        this.validMoves = new Array();
    }

    checkCapture(position){
        switch(this.type){
            case "black":
                if(document.getElementById(position.toString()).src.includes("/Pieces/White/")){
                    this.getMoveArray().push(position);
                }
                break;
            case "white":
                if(document.getElementById(position.toString()).src.includes("/Pieces/Black/")){
                    this.getMoveArray().push(position);
                }
                break;
        }
    }

    boardcheck(number) {
        if (number > 88 || number < 11) {
            return false;
        }
        else if (number % 10 > 8 || number % 10 == 0) {
            return false;
        }
        else { return true; }
    }

    getValidMoves() {
        let currentPos = Number(this.position);
        if (selectedPiece != this.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            clearValidMoves();
            this.clean();
        }

        let queenMoves = [];

        let movesUp = 90 - currentPos;

        //moves down
        for (let i = 10; i < movesUp; i += 10) {
            let option = currentPos + i;
            if (document.getElementById(option.toString()).src != ""){
                this.checkCapture(option);
                break;
            }
            if (option > 10)
                this.getMoveArray().push(option);
        }

        //moves up
        for (let i = 10; i < 90; i += 10) {
            let option = currentPos - i;
            if (option > 10 && document.getElementById(option.toString()).src == "")
                this.getMoveArray().push(option);
            if (option > 10 && document.getElementById(option.toString()).src != ""){
                this.checkCapture(option);
                break;
            }
        }

        //moves left
        for (let i = 1; i < 9; i += 1) {
            let option = currentPos - i;
            if (option > (Math.floor(currentPos / 10) * 10) && option < (Math.floor(currentPos / 10) * 10 + 9) && document.getElementById(option.toString()).src == "")
                this.getMoveArray().push(option);
            if (option > (Math.floor(currentPos / 10) * 10) && option < (Math.floor(currentPos / 10) * 10 + 9) && document.getElementById(option.toString()).src != ""){
                this.checkCapture(option);
                break;
            }
        }

        // //moves right
        for (let i = 1; i < 9; i += 1) {
            let option = currentPos + i;
            if (option > (Math.floor(currentPos / 10) * 10) && option < (Math.floor(currentPos / 10) * 10 + 9) && document.getElementById(option.toString()).src == "")
                this.getMoveArray().push(option);
            if (option > (Math.floor(currentPos / 10) * 10) && option < (Math.floor(currentPos / 10) * 10 + 9) && document.getElementById(option.toString()).src != ""){
                this.checkCapture(option);
                break
            }
        }

        let bishopMoves = [9, -9, 11, -11];

        for (let i = 0; i < bishopMoves.length; i++) {
            let option = currentPos;
            option += bishopMoves[i];

            var check = this.boardcheck(option);
            if (!check) { continue; }

            do {
                if (document.getElementById(option.toString()).src == ""){
                    this.getMoveArray().push(option);
                }else{
                    this.checkCapture(option);
                    break;
                }
                option += bishopMoves[i];
            } while (this.boardcheck(option));

        }

        moveOptions = this.getMoveArray();
        this.highlightMoves(this.getMoveArray());

    }
}