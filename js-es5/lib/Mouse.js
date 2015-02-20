var CoreObject = require('./CoreObject.js');

var Mouse = function Mouse() {
    this.position = this.getRandomIntFromInterval(0, 5);
};

Mouse.prototype = Object.create(CoreObject, {

    /**
     * Move mouse left or right
     */
    move: {
        enumerable: true,
        value: function() {
            switch (this.position) {
                case 0:
                    this.position = 1;
                    break;

                case 4:
                    this.position = 3;
                    break;

                default:
                    if (this.getRandomIntFromInterval(0,1)) {
                        this.position += 1;
                    } else {
                        this.position -= 1;
                    }
            }
        }
    }
});

module.exports = Mouse;
