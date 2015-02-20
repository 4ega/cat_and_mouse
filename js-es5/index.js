var Mouse = require('./lib/Mouse.js');
var Cat = require('./lib/Cat.js');
var Holes = require('./lib/Holes.js');

var mouse = new Mouse;
var cat = new Cat;

console.log(mouse.position);
mouse.move()
console.log(mouse.position);
