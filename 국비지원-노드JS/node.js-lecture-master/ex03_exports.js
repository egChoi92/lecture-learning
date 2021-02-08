// 모듈을 만들고 exports로 저장하기

var calc = {};
// 객체에 필요한 속성을 자유롭게 추가 가능.

calc.minus = (a,b) =>  a-b; 
// =>(화살표함수) : return문이 한문장일 경우 중괄호와 return 예약어 생략 가능 (아래 코드와 같음)
/* 
calc.minus = function(a,b){
    return a-b;
};
*/

module.exports = calc; 
// calc를 nodeJS 모듈로 등록
// 변수, 함수, 객체 등 모듈로 등록 가능
