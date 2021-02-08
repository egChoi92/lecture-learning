

var Calc = require('./ex07_eventEmitter02');

var calc = new Calc();
calc.emit('stop')

console.log(Calc.title);