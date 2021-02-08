

const http = require('http');
const express = require('express');
const app = express();

app.set('port',3000)

router.route('/').get(function(req,res){
    console.log('/ 요청 들어옴');
    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
    res.end('<h1>GET - / 요청 들어옴</h1>');
});
router.route('/info').get(function(req,res){
    console.log('/info 요청 들어옴');
    res.end('GET - /info');
});


// router 미들웨어 등록 - 코드 하단에서 등록 (route 설정을 모두 받기 위해).
const router = express.Router();
app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'),function(){
    console.log('http://localhost:%d',app.get('port'));
});