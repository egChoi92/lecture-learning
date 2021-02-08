// 외장모듈 설치 후 불러오기

var nconf = require('nconf'); 
// 외장모듈은 경로 없이 이름만 작성
// ./node_modules 에 생성

nconf.env();

console.log(`OS환경 변수의 값 ${nconf.get('OS')}`);