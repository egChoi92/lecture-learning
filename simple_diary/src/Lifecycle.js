import React, { useEffect, useState } from 'react'

/*
    // @note: Mount, UnMount 예제
    useEffect(() => {
        console.log("Mount")
        return () => {
            console.log("UnMount");
        };
    }, []);

    // @note: Update 예제
    useEffect(() => {
        console.log("Update")
    });
    useEffect(() => {
        console.log(`Count Update : ${count}`);
    }, [count]);
    useEffect(() => {
        console.log(`Text Update : ${text}`)
    }, [text]);
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