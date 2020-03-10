var assert = require("chai").assert;
var chai = require("chai");
this.jsdom = require("jsdom-global")();
global.$ = global.jQuery = require("jquery");
chai.use(require("chai-jquery"));
var sinon = require("sinon");
var file = require("../public/js/King");
var King = file.King;

describe("King File Testing", function() {
  var newObj = new King("12", "testingSrc", "black");
  describe("constructor", function() {
    it("testing constructor", function() {
      assert.equal(newObj.position, "12");
    });
  });

  describe("getPosition", function() {
    it("position function", function() {
      assert.equal(newObj.position, newObj.getPosition());
    });
  });

  describe("setPosition", function() {
    it("position function", function() {
      newObj.setPosition("13");
      assert.equal(newObj.position, "13");
      assert.notEqual(newObj.position, "12");
    });
  });

  describe("setDefault", function() {
    it("default function", function() {
      newObj.setDefault(false);
      assert.equal(newObj.default, false);
      assert.notEqual(newObj.default, true);
    });
  });

  describe("getSource", function() {
    it("source function", function() {
      newObj.getSource();
      assert.equal(newObj.source, "testingSrc");
      assert.notEqual(newObj.source, "notTestingSrc");
    });
  });

  describe("getMoveArray", function() {
    it("getMoveArray function", function() {
      newObj.getMoveArray();
      assert.equal(newObj.validMoves.toString(), []);
      assert.notEqual(newObj.validMoves, null);
    });
  });

  describe("getType", function() {
    it("getType function", function() {
      assert.equal(newObj.getType(), "black");
      assert.notEqual(newObj.getType(), "white");
    });
  });

  describe("clean", function() {
    it("clean function", function() {
      newObj.clean();
      assert.equal(newObj.validMoves.toString(), []);
      assert.notEqual(newObj.validMoves.toString(), [1, 2, 3]);
    });
  });

  describe("highlightMoves", function() {
    var sandbox = sinon.stub(document, "getElementById");
    it("highlightMoves function", function() {
      newObj.highlightMoves(["11"]);
      // expect(sandbox.withArgs('11').parentElement.style.background).to.equal('bfbc9f');
      $("11")
        .parent()
        .css("background", "bfbc9f");
    });
  });

  describe("getValidMoves", function() {
    beforeEach(function() {
      global.selectedPiece = "8";
      global.oldSelectedPiece = "0";
      global.clearValidMoves = [];
      global.a = "public/img/Pices/Black/bB.png";
      global.moveOptions = [];
    });

    it("getValidMoves function", function() {
      newObj.getValidMoves();
      // expect(sandbox.withArgs('11').parentElement.style.background).to.equal('bfbc9f');
      newObj.validMoves;
      newObj.getNextValidMoves(newObj);
    });
  });

  describe("getNextValidMoves", function() {
    beforeEach(function() {
      global.selectedPiece = "8";
      global.oldSelectedPiece = "0";
      global.clearValidMoves = [];
      global.a = "public/img/Pices/Black/bB.png";
      global.moveOptions = [];
    });

    it("getNextValidMoves function", function() {
      newObj.getValidMoves();
      // expect(sandbox.withArgs('11').parentElement.style.background).to.equal('bfbc9f');
      newObj.validMoves;
      newObj.getNextValidMoves(newObj);
    });
  });

  describe("getCheckValidMoves", function() {
    beforeEach(function() {
      global.selectedPiece = "8";
      global.oldSelectedPiece = "0";
      global.clearValidMoves = [];
      global.a = "public/img/Pices/Black/bB.png";
      global.moveOptions = [];
    });

    it("getNextValidMoves function", function() {
      newObj.getValidMoves();
      // expect(sandbox.withArgs('11').parentElement.style.background).to.equal('bfbc9f');
      //   newObj.getNextCheckValidMoves(newObj);

      newObj.getCheckValidMoves([], "87");
      newObj.allThePossible(newObj);
    });
  });
});
