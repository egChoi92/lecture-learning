// express 모듈 설치 : > npm install express --save

const http = require('http');
const express = require('express');

const app = express(); // ≒ getInstance()
// express 객체 불러오기

app.get('/',function(req,res){
    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
    res.end('<h1>홈페이지 인트로</h1>')   
});
app.get('/home',function(req,res){
    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
    res.end('<h1>홈페이지 메인페이지</h1>')   
});
app.post('/login',function(req,res){
    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
    res.end('<h1>로그인 결과 페이지</h1>')   
});

const server = http.createServer(app);
// createServer() 생성할 때 express의 객체(app)를 인자로 사용
server.listen(3000,function(){
    console.log('http://localhost:3000');
});

// 옛날 방식 (http 모듈 방식)
/*
server.on('request',function(req,res){
    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
    res.end('<h1>홈페이지</h1>')
});
*/

