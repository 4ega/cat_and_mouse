var CoreObject = require('./CoreObject.js');

var Holes = function Holes(mouse) {
    this.mouse = mouse;
};

Holes.prototype = Object.create(CoreObject, {

    /**
     * Check if mouse is at given position
     */
    isMouseAt: {
        enumerable: true,
        value: function(position) {
            return this.mouse.position === position;
        }
    }
});

module.exports = Holes;
