class Queen {
  constructor(position, source, type) {
    this.position = position;
    this.source = source;
    this.type = type;
    this.default = true;
    this.validMoves = new Array();
    this.NextMove = new Array();
  }
  getPosition() {
    return this.position;
  }

  setPosition(newPos) {
    this.position = newPos;
  }

  setDefault(bool) {
    this.default = bool;
  }

  getSource() {
    return this.source;
  }

  highlightMoves(validMoves) {
    for (let i = 0; i < validMoves.length; i++)
      // document.getElementById(validMoves[i]).parentElement.style.background = "#bfbc9f";
      $(validMoves[i])
        .parent()
        .css("background", "bfbc9f");
  }

  getMoveArray() {
    return this.validMoves;
  }

  getType() {
    return this.type;
  }

  clean() {
    this.validMoves = new Array();
  }

  checkCapture(position) {
    var imgSrc = a;
    switch (this.type) {
      case "black":
        if (imgSrc.includes("Pieces/White/")) {
          this.getMoveArray().push(position);
        }
        break;
      case "white":
        if (imgSrc.includes("Pieces/Black/")) {
          this.getMoveArray().push(position);
        }
        break;
    }
  }

  boardcheck(number) {
    if (number > 88 || number < 11) {
      return false;
    } else if (number % 10 > 8 || number % 10 == 0) {
      return false;
    } else {
      return true;
    }
  }

  getValidMoves() {
    let currentPos = Number(this.position);
    if (selectedPiece != this.position) {
      oldSelectedPiece = selectedPiece;
      selectedPiece = this.position;
    //   clearValidMoves();
      this.clean();
    }

    let movesUp = 90 - currentPos;

    // Moves Down
    for (let i = 10; i < movesUp; i += 10) {
      let option = currentPos + i;
      if (a!= "") {
        this.checkCapture(option);
        break;
      }
      if (option > 10) this.getMoveArray().push(option);
    }

    // Moves Up
    for (let i = 10; i < 90; i += 10) {
      let option = currentPos - i;
      if (option > 10 && a == "")
        this.getMoveArray().push(option);
      if (option > 10 && a != "") {
        this.checkCapture(option);
        break;
      }
    }

    // Moves Left
    for (let i = 1; i < 9; i += 1) {
      let option = currentPos - i;
      if (
        option > Math.floor(currentPos / 10) * 10 &&
        option < Math.floor(currentPos / 10) * 10 + 9 &&
        a == ""
      )
        this.getMoveArray().push(option);
      if (
        option > Math.floor(currentPos / 10) * 10 &&
        option < Math.floor(currentPos / 10) * 10 + 9 &&
        a != ""
      ) {
        this.checkCapture(option);
        break;
      }
    }

    // Moves Right
    for (let i = 1; i < 9; i += 1) {
      let option = currentPos + i;
      if (
        option > Math.floor(currentPos / 10) * 10 &&
        option < Math.floor(currentPos / 10) * 10 + 9 &&
        a == ""
      )
        this.getMoveArray().push(option);
      if (
        option > Math.floor(currentPos / 10) * 10 &&
        option < Math.floor(currentPos / 10) * 10 + 9 &&
        a != ""
      ) {
        this.checkCapture(option);
        break;
      }
    }

    let bishopMoves = [9, -9, 11, -11];

    for (let i = 0; i < bishopMoves.length; i++) {
      let option = currentPos;
      option += bishopMoves[i];

      var check = this.boardcheck(option);
      if (!check) {
        continue;
      }

      do {
        if (a == "") {
          this.getMoveArray().push(option);
        } else {
          this.checkCapture(option);
          break;
        }
        option += bishopMoves[i];
      } while (this.boardcheck(option));
    }

    moveOptions = this.getMoveArray();
    return this.getMoveArray();
    // this.highlightMoves(this.getMoveArray());
  }

  getNextValidMoves(Queen) {
    let NextMoveArray = new Array();

    let currentPos = Number(Queen.position);
    if (selectedPiece != Queen.position) {
      oldSelectedPiece = selectedPiece;
      selectedPiece = Queen.position;
      clearValidMoves();
      this.clean();
    }

    let movesUp = 90 - currentPos;

    // Moves Down
    for (let i = 10; i < movesUp; i += 10) {
      let option = currentPos + i;
      if (a != "") {
        this.checkCapture(option);
        break;
      }
      if (option > 10) NextMoveArray.push(option);
    }

    // Moves Up
    for (let i = 10; i < 90; i += 10) {
      let option = currentPos - i;
      if (option > 10 && a == "")
        NextMoveArray.push(option);
      if (option > 10 && a != "") {
        this.checkCapture(option);
        break;
      }
    }

    // Moves Left
    for (let i = 1; i < 9; i += 1) {
      let option = currentPos - i;
      if (
        option > Math.floor(currentPos / 10) * 10 &&
        option < Math.floor(currentPos / 10) * 10 + 9 &&
        a == ""
      )
        NextMoveArray.push(option);
      if (
        option > Math.floor(currentPos / 10) * 10 &&
        option < Math.floor(currentPos / 10) * 10 + 9 &&
        a != ""
      ) {
        this.checkCapture(option);
        break;
      }
    }

    // Moves Right
    for (let i = 1; i < 9; i += 1) {
      let option = currentPos + i;
      if (
        option > Math.floor(currentPos / 10) * 10 &&
        option < Math.floor(currentPos / 10) * 10 + 9 &&
        a == ""
      )
        NextMoveArray.push(option);
      if (
        option > Math.floor(currentPos / 10) * 10 &&
        option < Math.floor(currentPos / 10) * 10 + 9 &&
        a != ""
      ) {
        this.checkCapture(option);
        break;
      }
    }

    let bishopMoves = [9, -9, 11, -11];

    for (let i = 0; i < bishopMoves.length; i++) {
      let option = currentPos;
      option += bishopMoves[i];

      var check = this.boardcheck(option);
      if (!check) {
        continue;
      }

      do {
        if (a == "") {
          NextMoveArray.push(option);
        } else {
          this.checkCapture(option);
          break;
        }
        option += bishopMoves[i];
      } while (this.boardcheck(option));
    }

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
    if (checkarray.includes(checkopponentpos)) {
      validcheckmove.push(checkopponentpos);
    }
    return validcheckmove;
  }


}

  module.exports = {
    Queen
}