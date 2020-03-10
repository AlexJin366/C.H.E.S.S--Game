var assert = require('chai').assert;
var expect = require('chai').expect;
var chai = require('chai');
this.jsdom = require('jsdom-global')()
global.$ = global.jQuery = require('jquery');
chai.use(require('chai-jquery'))
var sinon = require('sinon');
var file = require('../public/js/Knight')
var Knight = file.Knight;

describe("Knight File Testing", function(){
    var newObj = new Knight('12', 'testingSrc', 'black');
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
            // expect(sandbox.withArgs('11').parentElement.style.background).to.equal('bfbc9f');
            $("11").parent().css("background", "bfbc9f" );
        })
    })

    describe("checkCapture", function(){
        var newObj2 = new Knight('11', 'Pieces/White/', 'black');
        it('checkCapture function', function(){
            expect(() => newObj2.checkCapture('11')).to.throw();
        })

        var newObj3 = new Knight('11', 'Pieces/Black/', 'white');
        it('checkCapture function', function(){
            expect(() => newObj3.checkCapture('11')).to.throw();
        })
    })

    describe("getValidMoves", function() {
            beforeEach(function() {
              global.selectedPiece = "8";
              global.oldSelectedPiece = "0";
              global.clearValidMoves = [];
              global.a = "public/img/Pices/Black/bB.png";
              global.b = "Pieces/White/wK.png";
              global.c = "Pieces/Black/bK.png";
              global.moveOptions = [];
            });
        
            it("getValidMoves function", function() {
              newObj.getValidMoves();
              // expect(sandbox.withArgs('11').parentElement.style.background).to.equal('bfbc9f');
              newObj.validMoves;
              newObj.getNextValidMoves(newObj);
            });

            it("getValidMoves function", function() {
                  global.a = ""
                  newObj.getValidMoves();
                  // expect(sandbox.withArgs('11').parentElement.style.background).to.equal('bfbc9f');
                  newObj.validMoves;
                  newObj.getNextValidMoves(newObj);
                });

            it("getValidMoves function", function() {
                newObj.setPosition('18')
                      newObj.getValidMoves();
                      // expect(sandbox.withArgs('11').parentElement.style.background).to.equal('bfbc9f');
                      newObj.validMoves;
                      newObj.getNextValidMoves(newObj);
                    });

          });

})