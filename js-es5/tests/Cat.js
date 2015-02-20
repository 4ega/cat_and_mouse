var expect = require('chai').expect;
var Cat = require('../lib/Mouse.js');
var Holes = require('../lib/Holes.js');

describe('Holes', function() {

    beforeEach(function() {
        this.mouse = new Mouse;
        this.holes = new Holes(this.mouse);
    });

    describe('#searchMouseAt', function() {

        it('Should check if mouse is at given position', function() {
            this.mouse.position = 3;

            expect(this.holes.isMouseAt(3)).to.be.ok;
        });
    });
});

