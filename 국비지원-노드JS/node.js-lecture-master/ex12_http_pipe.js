

var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){ 
    // 서버를 만든다.
    // 단순한 기능을 추가할 경우 콜백함수를 넣는다. (request,response);
    
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    //res.end('서버가 실행 중입니다. Run Server...')
    
    var instream = fs.createReadStream('./output.txt');
    instream.pipe(res);
}); 

server.listen(3000,function () { // 서버를 실행 .listen(포트번호,콜백함수);
    console.log('서버실행 => http://localhost:3000');
}) 
