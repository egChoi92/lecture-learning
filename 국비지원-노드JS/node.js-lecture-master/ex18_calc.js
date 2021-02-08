// 웹 계산기 만들기
// html(Ajax) -> Node
// CORS 미들웨어 등록 > npm install cors --save

const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();


// CORS 미들웨어 사용 - 크로스 도메인 문제 해결 (port 번호가 달라서 생기는 이슈)
const cors = require("cors");
app.use(cors());


app.set('port',process.env.PORT || 3000);

router.route('/plus/:a/:b').get((req,res)=>{
    // 우아한 URL = url 파라미터 
    // localhost:3000/plus/10/20 ; :a == 10, :b ==20
    // params 객체(= :a) 이용 
    res.end(JSON.stringify(Number(req.params.a)+Number(req.params.b))) 
    // JSON.stringify() : 수식,을 문자열로 변경
});
router.route('/minus/:a/:b').get((req,res)=>{
    res.end(JSON.stringify(Number(req.params.a)-Number(req.params.b))) 
});
router.route('/mult/:a/:b').get((req,res)=>{
    res.end(JSON.stringify(Number(req.params.a)*Number(req.params.b))) 
});
router.route('/div/:a/:b').get((req,res)=>{
    res.end(JSON.stringify(Number(req.params.a)/Number(req.params.b))) 
});

app.use('/',router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=> {
    console.log(`http://localhost:${app.get('port')}`)
});