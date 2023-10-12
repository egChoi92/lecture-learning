import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
    useEffect(() => {
        console.log(`Update :: Counter A - count : ${count}`)
    });
    return <div>{count}</div>;     
});

const CounterB = React.memo(({ obj }) => {
    // React.memo()에서 객체를 비교하는 방법은 얕은 비교(: 객체의 주소에 의한 비교)이기 때문에 prop이 객체일 경우 리렌더링 발생한다.
    // 객체가 얕은 비교를 하지 않고 깊은 비교를 하게 해야 한다. areEqual() 참고
    useEffect(() => {
        console.log(`Update :: Counter B - count : ${obj.count}`);
    })
    return <div>{obj.count}</div>;

})

const areEqual = (prevProps, nextProps) => {
    /*
        return true : props의 이전과 현재가 같다 -> 리렌더링 발생하지 않음
        return false : props의 이전과 현재가 다르다 -> 리렌더링 발생
    */
    return prevProps.obj.count === nextProps.obj.count
}

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptomizeTest = () => {
    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1,
    })

    return (
        <div className="" style={{ padding: 50 }}>
            <div className="">
                <h2>Counter A</h2>
                <CounterA count={count} />
                <button onClick={() => setCount(count)}>A Button</button>
            </div>
            <div className="">
                <h2>Counter B</h2>
                <MemoizedCounterB obj={obj} />
                <button onClick={() => setObj({
                    count: obj.count
                })}>A Button</button>
            </div>
        </div>
    );
}

export default OptomizeTest;