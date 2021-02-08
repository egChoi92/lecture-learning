// console.log 예제

console.log("Hello");

var name = "Hong";
var age = 30;

console.log(name+"님은 "+age+"세입니다")
console.log(name,"님은 ",age,"세입니다"); // console.log에서는 , 도 가능  *자동 띄어쓰기가 됨

var str = `${name}님은 ${age}세입니다.`;
console.log(str);

var student = {
    name : '홍길동',
    age : 17
};

console.log("student => "+ student);
console.log("student => ", student);
console.dir(student); // object를 출력
console.log(JSON.stringify(student)); // 객체(JSON)를 출력


var result = 0;
console.time('time_check');
for (let i = 1; i <= 10000; i++){
    result += i;
}
console.timeEnd('time_check');
console.log("result => "+result);

// 현재 실행 파일 및 디렉토리 정보 확인
console.log('현재 실행 파일명은 ', __filename);
console.log('현재 디렉토리명은 ', __dirname);

// 포멧기호(변환문자열) 사용
// %s : string 
// %d : 정수
// %f : 실수
// %j : 객체
console.log('파일 : %s', __filename);
console.log('디렉토리 : %s', __dirname);
console.log('나이 : %d', 35);
console.log('객체 : %j', {name:'hong',age:20});
