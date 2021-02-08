

var fs = require('fs');

var msg = 'Hello World'; // 파일에 쓸 내용

fs.writeFile('./output.txt',msg,function (err) {
    if (err) {
        console.log('파일 쓰기 에러 발생');
        console.log(err);
        return;
    }
    console.log('output.txt에 쓰기 완료');
})