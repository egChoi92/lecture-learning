// util 을 사용한 상속

var util =require("util");

var str = util.format("%s님의 나이는 %d세.","홍길동", 20); 
// %s == "홍길동"
// %d == 20
console.log(str)


function Parent() {
    this.name = "길동";
}
Parent.prototype.sayHello = function () {
    console.log(this.name + "님 안녕하세요");
}
var p1 = new Parent();
p1.sayHello();



function Child() {
    this.name = "동이"
};
// 옛날 방식의 상속
/*
Child.prototype = new Parent();
Child.constructor = Child;
*/

// util을 활용한 상속
util.inherits(Child,Parent);

var c = new Child();
c.sayHello();

