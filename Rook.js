class Rook extends Piece{
    constructor(position, source, type) {
        super(position,source,type);
    }

    getValidMoves() {
        
        let currentPos = Number(this.position);
        if (selectedPiece != this.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            clearValidMoves();
            this.clean();
        }

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
            let MathRequierment1 = (Math.floor(currentPos / 10) * 10 + 9);
            let MathRequierment2 = (Math.floor(currentPos / 10) * 10);
            if (option > MathRequierment2 && option < MathRequierment1 && document.getElementById(option.toString()).src == "")
                this.getMoveArray().push(option);
            if (option > MathRequierment2 && option < MathRequierment1 && document.getElementById(option.toString()).src != ""){
                this.checkCapture(option);
                break;
            }
        }

        // //moves right
        for (let i = 1; i < 9; i += 1) {
            let option = currentPos + i;
            let MathRequierment1 = (Math.floor(currentPos / 10) * 10 + 9);
            let MathRequierment2 = (Math.floor(currentPos / 10) * 10);
            if (option > MathRequierment2 && option < MathRequierment1 && document.getElementById(option.toString()).src == "")
                this.getMoveArray().push(option);
            if (option > MathRequierment2 && option < MathRequierment1 && document.getElementById(option.toString()).src != ""){
                this.checkCapture(option);
                break
            }
        }

        moveOptions = this.getMoveArray();
        this.highlightMoves(this.getMoveArray());
        
    }
}