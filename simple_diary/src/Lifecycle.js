import React, { useEffect, useState } from 'react'

/*
    // @note: Mount, Update 예제
    const Lifecycle = () => {
        const [count, setCount] = useState(0);
        const [text, setText] =useState("");

        useEffect(() => {
            console.log("Mount")
        }, []);

        useEffect(() => {
            console.log("Update")
        });

        useEffect(() => {
            console.log(`Count Update : ${count}`);
        }, [count]);

        useEffect(() => {
            console.log(`Text Update : ${text}`)
        }, [text]);

        return (
            <div style={{ padding: 20 }}>
                <div className="">
                    {count} 
                    <button onClick={() => setCount(count+1)}>+</button>
                    <button onClick={() => setCount(count-1)}>+</button>
                </div>
                <div className="">
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
        );
    };
*/

const UnmountText = () => {
    useEffect(() => {
        console.log("Mount");
        return () => {
            console.log("UnMount");
        };
    }, [])
    return (
        <div>
            Unmount Testing Component
        </div>
    )
}

const Lifecycle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={toggle}>ON / OFF</button>
            {isVisible && <UnmountText />}  {/* 단락회로평가 */}
        </div>
    )
}

export default Lifecycle;