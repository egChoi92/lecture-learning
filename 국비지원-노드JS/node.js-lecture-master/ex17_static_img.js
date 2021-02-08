// image 보여주기
// serve-static 모듈 적용 : > npm install serve-static --save
// static 미들웨어를 지정하지 않을 경우 특정 경로를 가져올 수 없음 (ex. <img src="">)

const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();


// serve-static 미들웨어 사용
// '/public' 의 디렉토리를 자유롭게 서비스 가능
const static = require('serve-static');
app.use('/public',static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);
// 3000 포트를 set

router.route('/').get((req,res)=>{
    console.log('/ 페이지 요청 됨');
    res.writeHead(200,{'content-type':'text/html;charset-utf8'})
    res.end('<img src="/public/images/img01.jpg" width="100%">');
})

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=> {
    console.log(`http://localhost:${app.get('port')}`)
});