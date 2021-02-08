// 미들웨어 에서 ejs 사용
// ejs 뷰엔진 설치 > npm install ejs --save

const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();

app.set('port',3000);

// ejs 뷰 엔진 등록
app.set('view engine','ejs');
app.set('views', __dirname + '/views'); // 절대경로 *__dirname : 현재 경로

router.route('/').get(function(req,res){
    console.log('/index 요청 들어옴');
    var data = {name:'egChoi',age:18};
    req.app.render('index',{user:data},function(err,html){ // .render(파일명,전달데이터,콜백함수)
        if(err) throw err;
        res.end(html);
    })
})

app.use('/',router);
const server = http.createServer(app);
server.listen(app.get('port'),function(){
    console.log('http://localhost:%d',app.get('port'));
})