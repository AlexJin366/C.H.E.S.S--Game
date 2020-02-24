class Piece {
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
    }
    
}