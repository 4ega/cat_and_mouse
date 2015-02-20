// Plain object with handy functions

var CoreObject = Object.create(null, {
    getRandomIntFromInterval: {
        value: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
});

module.exports = CoreObject;
