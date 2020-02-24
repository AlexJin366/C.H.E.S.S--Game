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

    setPosition(newPos) {
        this.position = newPos;
    }

    getSource() {
        return this.source
    }

    highlightMoves(validMoves) {
        for (let i = 0; i < validMoves.length; i++) {
            document.getElementById(validMoves[i]).parentElement.style.background = "#bfbc9f";
        }
    }

    getMoveArray() {
        return this.validMoves;
    }

    clean() {
        this.validMoves = new Array();
    }

    checkCapture(){
        let currentPos = Number(this.position);
        if (selectedPiece != this.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            clearValidMoves();
            this.clean();
        }
        if(this.type == "black"){
            if(((currentPos + 9) < (Math.floor((currentPos+10) / 10) * 10 + 9)) && (currentPos + 9) > (Math.floor((currentPos+10) / 10) * 10)){
                if(document.getElementById((currentPos + 9).toString()).src != "" && document.getElementById((currentPos + 9).toString()).src.includes("Pices/White/")){
                    this.getMoveArray().push(currentPos + 9);
                }
            }
            if(((currentPos + 11) < (Math.floor((currentPos+10) / 10) * 10 + 9)) && (currentPos + 11) > (Math.floor((currentPos+10) / 10) * 10)){
                if(document.getElementById(currentPos + 11).toString().src != "" && document.getElementById((currentPos + 11).toString()).src.includes("Pices/White/")){
                    this.getMoveArray().push(currentPos + 11);
                }
            }
        }else{
            if(((currentPos - 9) < (Math.floor((currentPos-10) / 10) * 10 + 9)) && (currentPos - 9) > (Math.floor((currentPos-10) / 10) * 10)){
                if(document.getElementById((currentPos - 9).toString()).src != "" && document.getElementById((currentPos - 9).toString()).src.includes("Pices/Black/")){
                    this.getMoveArray().push(currentPos - 9);
                }
            }
            if(((currentPos - 11) < (Math.floor((currentPos-10) / 10) * 10 + 9)) && (currentPos - 11) > (Math.floor((currentPos-10) / 10) * 10)){
                if(document.getElementById(currentPos - 11).toString().src != "" && document.getElementById((currentPos - 11).toString()).src.includes("Pices/Black/")){
                    this.getMoveArray().push(currentPos - 11);
                }
            }
        }
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
        if (this.type == "black") {
            if (this.default) {

                if (document.getElementById((currentPos + 10).toString()).src == "" && document.getElementById((currentPos + 20).toString()).src == "") {
                    this.getMoveArray().push(currentPos += 10, currentPos += 10);
                } else if (document.getElementById((currentPos + 20).toString()).src != "" && document.getElementById((currentPos + 10).toString()).src == "") {
                    this.getMoveArray().push(currentPos += 10);
                }
            } else {
                if (document.getElementById((currentPos + 10).toString()).src == "") {
                    this.getMoveArray().push(currentPos += 10);
                }
            }
        } else {
            if (this.default) {
                if (document.getElementById((currentPos - 10).toString()).src == "" && document.getElementById((currentPos - 20).toString()).src == "") {
                    this.getMoveArray().push(currentPos -= 10, currentPos -= 10);
                } else if (document.getElementById((currentPos - 20).toString()).src != "" && document.getElementById((currentPos - 10).toString()).src == "") {
                    this.getMoveArray().push(currentPos -= 10);
                }
            } else {
                if (document.getElementById((currentPos - 10).toString()).src == "") {
                    this.getMoveArray().push(currentPos -= 10);
                }
            }
        }
        this.checkCapture();
        moveOptions = this.getMoveArray();
        this.highlightMoves(this.getMoveArray());
    }
}