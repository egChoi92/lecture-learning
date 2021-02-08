// fs 모듈 : 파일 다루기
// sync 붙어있으면 동기식 : 데이터를 모두 담을 때까지 진행하지 않음

var fs = require('fs');

var data = fs.readFileSync('./package.json','utf8'); // 인코딩 방식을 반드시 기재

console.log(data);