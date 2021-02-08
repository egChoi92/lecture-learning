

var EventEmiiter = require('events').EventEmitter;
var util = require('util');

var Calc = function() {
    this.on('stop',function () {
        console.log("Calc에 stop 이벤트 전달");
    });

}
Calc.prototype.add = (a,b) => a + b;

util.inherits(Calc,EventEmiiter);

module.exports = Calc;
module.exports.title = "계산기"
