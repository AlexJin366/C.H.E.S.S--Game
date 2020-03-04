class King extends Piece {
    constructor(position, source, type) {
        super(position, source, type);
    }
    
    getValidMoves(currentPosition) {
        let currentPos = Number(currentPosition);
        if (selectedPiece != currentPosition) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = currentPosition;
            clearValidMoves();
            this.clean();
        }

        let kingMoves = [-10, 10, -1, 1, -9, 9, 11, -11];

        for (let i = 0; i < kingMoves.length; i++) {
            let option = currentPos + kingMoves[i];
            if (option >= 10 && option <= 88) {
                if (option % 10 == 0 || option % 10 == 9) {
                    continue;
                }
                
                var isSquareEmpty = document.getElementById(option.toString()).src == "";
                if(isSquareEmpty){
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