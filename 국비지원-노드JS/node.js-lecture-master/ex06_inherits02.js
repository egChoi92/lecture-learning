// ES6 방식의 새로운 클래스 생성 방법

class Parent {
    // Parent의 생성자을 만들어야 함
    constructor() {
        console.log("Parent의 생성자");
        this.name = "Parent"; // Parent의 생성자 생성 후 멤버 필드 초기화
    }
    sayHello() { // 멤버 함수 추가
        console.log(`${this.name}님 안녕하세요`)
    }
}

// let p = new Parent();
// p.sayHello();

class Child extends Parent { 
    // 부모를 상속 받는다
    // 생성자는 필수로 만들어야 함
    constructor(){
        super(); // 부모 생성자를 명시적으로 호출
        this.name = "Child";        
    }
}

let c = new Child();
c.sayHello();