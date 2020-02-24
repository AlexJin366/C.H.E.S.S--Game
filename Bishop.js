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

    setPosition(newPos) {
        this.position = newPos;
    }

    getSource() {
        return this.source
    }

    highlightMoves(validMoves) {
        // console.log(validMoves);
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
                if(document.getElementById(position.toString()).src.includes("Pices/White/")){
                    this.getMoveArray().push(position);
                }
                break;
            case "white":
                if(document.getElementById(position.toString()).src.includes("Pices/Black/")){
                    this.getMoveArray().push(position);
                }
                break;
        }
        // console.log(position);
    }

    boardcheck(number) {
        // console.log("Check,", number);
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
        console.log("------" + currentPos);
        if (selectedPiece != this.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            clearValidMoves();
            this.clean();
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