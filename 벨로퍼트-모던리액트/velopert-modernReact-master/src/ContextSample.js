import React, { createContext, useContext, useState } from "react";

const MyContext = createContext("Default Context")


function Child() {
    const text = useContext(MyContext)
    return (
        <div>{text}</div>
    )
}

function Parent({ text }) {
    return <Child text={text}></Child>
}

function GradParent({ text }) {
    return <Parent text={text}></Parent>
}

function ContextSample() {
    const [ value, setValue ] = useState(true);
    return (
        <MyContext.Provider value={value ? "TRUE" : "FALSE"}>
            <GradParent />
            <button onClick={() => {setValue(!value)}}>Click</button>
        </MyContext.Provider>
    )
}

export default ContextSample;