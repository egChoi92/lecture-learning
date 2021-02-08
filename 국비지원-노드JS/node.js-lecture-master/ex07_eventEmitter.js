

process.on('exit',function(){
    // 이벤트 핸들러 처리 지점
    console.log('exit 이벤트 발생');
});
setTimeout(function () {
    // 이벤트 발생 지점
    process.exit(); // .exit() :  프로그램을 종료시키는 명령어
},2000);

process.on('tick',function () {
    console.log('tick 이벤트 발생');    
})
setTimeout(function () {
    process.emit('tick'); 
    //"tick"의 이벤트를 생성한다. 
    
    //process.emit('tick',[agrs]) : "tick"의 이벤트를 생성하고 이벤트를 생성할 당시 [args]에 정의된 값 들을 이벤트와 함께 전달한다. 
},1000)