// path 모듈 사용하기
// 내장 모듈은 설치 없이 사용 가능

var path = require('path');

var dirs= ["users","newDir","newDocs"];

var docsDirectory = dirs.join(path.sep);
// 구분자가 역슬래시로 생성
console.log(docsDirectory); 

var curPath = path.join('/Users/newDir','app.exe');
// 구분자가 역슬래시로 변환
console.log(curPath)

var filename = "C:\\Users\\newDir\\app.exe";
var dirname = path.dirname(filename); // 디렉토리 경로
var basename = path.basename(filename); // 파일 이름
var extname = path.extname(filename); // 파일 확장자

console.log(dirname,basename,extname);