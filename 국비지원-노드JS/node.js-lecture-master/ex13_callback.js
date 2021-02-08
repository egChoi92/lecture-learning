
// 콜백함수
// - 함수 호출 시 작업이 모두 끝나고 호출되는 함수.
// - 특정 함수의 인자로 함수를 전달할 수 있다.

// 함수선언 방식
function fn1(name) {
    console.log('fn1 함수 호출!');
    console.log(name+'이 콜백함수를 호출함')
}
//fn1();

// 참조 변수에 함수를 담아둔다.
/*
var fn2 = fn1;
var fn3 = function () {};
fn2();
*/

function doFn(callback) {
    if(typeof callback == 'function'){
        callback("홍길동");
    }
}
doFn(fn1)