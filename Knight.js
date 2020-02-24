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

    getValidMoves() {
        let currentPos = Number(this.position);
        console.log("------" + currentPos);
        if (selectedPiece != this.position) {
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

        for (let i = 0; i < knightMoves.length; i++) {
            let option = currentPos + knightMoves[i];
            if (option >= 10 && option <= 88) {
                if (option % 10 == 0 || option % 10 == 9) {
                    continue;
                }
                if(document.getElementById(option.toString()).src == ""){
                    // console.log(option);
                    this.getMoveArray().push(option);
                }else{
                    this.checkCapture(option);
                }
            }
        }

        moveOptions = this.getMoveArray();
        this.highlightMoves(this.getMoveArray());

    }
}