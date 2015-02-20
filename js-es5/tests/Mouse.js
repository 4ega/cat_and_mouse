var expect = require('chai').expect;
var Mouse = require('../lib/Mouse.js');

describe('Mouse', function() {

    beforeEach(function() {
        this.mouse = new Mouse;
    });

    describe('#move', function() {

        it('Should change mouse position', function() {
            var oldPosition = this.mouse.position;
            this.mouse.move();

            expect(this.mouse.position).to.not.equal(oldPosition);
        });
    });
});

