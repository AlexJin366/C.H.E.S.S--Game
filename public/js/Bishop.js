class Bishop extends Piece {
    boardcheck(number) {
        if (number > 88 || number < 11) {
            return false;
        }
        else if (number % 10 > 8 || number % 10 == 0) {
            return false;
        }
        else { return true; }
    }

    getValidMoves(currentPosition) {
        let currentPos = Number(currentPosition);
        if (selectedPiece != currentPosition) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = currentPosition;
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
                var isEmptySquare = document.getElementById(option.toString()).src == "";
                if (isEmptySquare){
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