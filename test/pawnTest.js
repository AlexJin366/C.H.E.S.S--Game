var assert = require('chai').assert;
var expect = require('chai').expect;
var chai = require('chai');
this.jsdom = require('jsdom-global')()
global.$ = global.jQuery = require('jquery');
chai.use(require('chai-jquery'))
var sinon = require('sinon');
var file = require('../public/js/Pawn')
var Pawn = file.Pawn;

describe("Pawn File Testing", function(){
    var newObj = new Pawn('12', 'testingSrc', 'black');
    describe("constructor", function(){
        it('testing constructor', function(){
            assert.equal(newObj.position, '12');
        })
    })

    describe("getPosition", function(){
        it('position function', function(){
            assert.equal(newObj.position, newObj.getPosition());
        })
    })

    describe("setPosition", function(){
        it('position function', function(){
            newObj.setPosition('13');
            assert.equal(newObj.position, '13');
            assert.notEqual(newObj.position, '12');
        })
    })

    describe("setDefault", function(){
        it('default function', function(){
            newObj.setDefault(false);
            assert.equal(newObj.default, false);
            assert.notEqual(newObj.default, true);
        })
    })

    describe("getSource", function(){
        it('source function', function(){
            newObj.getSource();
            assert.equal(newObj.source, 'testingSrc');
            assert.notEqual(newObj.source, 'notTestingSrc');
        })
    })

    describe("getMoveArray", function(){
        it('getMoveArray function', function(){
            newObj.getMoveArray();
            assert.equal(newObj.validMoves.toString(), []);
            assert.notEqual(newObj.validMoves, null);
        })
    })

    describe("getType", function(){
        it('getType function', function(){
            assert.equal(newObj.getType(), 'black');
            assert.notEqual(newObj.getType(), 'white');
        })
    })

    describe("clean", function(){
        it('clean function', function(){
            newObj.clean()
            assert.equal(newObj.validMoves.toString(), []);
            assert.notEqual(newObj.validMoves.toString(), [1,2,3]);
        })
    })

    describe("highlightMoves", function(){
        it('highlightMoves function', function(){
            newObj.highlightMoves(['11']);
            $("11").parent().css("background", "bfbc9f" );
        })
    })

    describe("checkCapture", function(){
        beforeEach(function() {
            global.selectedPiece = '12';
            global.oldSelectedPiece = null;
            global.a = "/Pieces/White/";
            global.b = "/Pieces/White/";
            global.c = "/Pieces/Black/";
            global.d = "/Pieces/Black/";
          });
        it('checkCapture function', function(){
            newObj.checkCapture();
            $("11").parent().css("background", "bfbc9f" );
        })
        it('checkCapture function', function(){
            var newObj2 = new Pawn('12', 'testingSrc', 'white');
            newObj2.checkCapture();
            $("11").parent().css("background", "bfbc9f" );
        })
    })

    describe("getValidMoves", function(){
        beforeEach(function() {
            global.selectedPiece = '12';
            global.oldSelectedPiece = null;
            global.e = "";
            global.f = "";
            global.moveOptions = null;
          });
        it('checkCapture function', function(){
            global.f = 'notnull';
            newObj.setDefault(true);
            newObj.getValidMoves();
            $("11").parent().css("background", "bfbc9f" );
        })

        it('checkCapture function', function(){
            global.f = '';
            newObj.setDefault(true);
            newObj.getValidMoves();
        })

        it('checkCapture function', function(){
            global.e = '';
            newObj.setDefault(false);
            newObj.getValidMoves();
        })

        var newObj2 = new Pawn('12', 'testingSrc', 'white');
        it('checkCapture function', function(){
            global.f = 'notnull';
            newObj2.setDefault(true);
            newObj2.getValidMoves();
            $("11").parent().css("background", "bfbc9f" );
        })

        it('checkCapture function', function(){
            global.f = '';
            newObj2.setDefault(true);
            newObj2.getValidMoves();
        })

        it('checkCapture function', function(){
            global.e = '';
            newObj2.setDefault(false);
            newObj2.getValidMoves();
        })  
    })

    describe("getNextValidMoves", function(){
        beforeEach(function() {
            global.selectedPiece = '12';
            global.oldSelectedPiece = null;
            global.a = "/Pieces/White/";
            global.b = "/Pieces/Black/";
          });
        it('checkCapture function', function(){
            newObj.getNextValidMoves(newObj);
        })

        it('checkCapture function', function(){
            var newObj2 = new Pawn('12', 'testingSrc', 'white');
            newObj2.getNextValidMoves(newObj2);
        })
    })

})