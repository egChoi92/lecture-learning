// fs 모듈 : 파일 다루기
// sync 안 붙어있으면 비동기식 : 데이터를 모두 담을 때까지 다른 작업을 진행하다가 모두 담아지면 작업을 결정

var fs = require('fs');

fs.readFile('./package.json','utf8',function(err,data){ // 콜백함수의 첫번째 데이터는 err
    console.log(data);
})

console.log('프로젝트 폴더 안의 package.json 파일 읽기 요청')