
var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname,function(exists){
    // 파일이 존재하는 지를 확인
    if (exists) {
        fs.unlink(outfile, function (err) {
            if (err) throw err;
        });
        console.log('파일 삭제됨');
    }
    var infile = fs.createReadStream(inname, {flags:'r'});
    var outfile = fs.createWriteStream(outname, {flags: 'w'});
    infile.pipe(outfile);
    console.log('스트리밍 방식으로 복제 완료');
})