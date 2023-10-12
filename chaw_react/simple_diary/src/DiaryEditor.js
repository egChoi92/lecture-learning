import React, { useContext, useEffect, useState, useRef, } from 'react'
import { DiaryDispatchContext } from './App';

const DiaryEditor = () => {
    const {onCreate} = useContext(DiaryDispatchContext);

    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });



    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    };
    
    const handleSubmit = (e) => {
        if (state.author.length < 1) {
            authorInput.current.focus();
            return
        }
        if (state.content.length < 5) {
            contentInput.current.focus();
            return
        }
        onCreate(state.author, state.content, state.emotion);
        setState({
            author: "",
            content: "",
            emotion: 1,
        });
    }

    return (
        <div className="DiaryEditor">
            <h1>오늘의 일기</h1>
            <div>
                <input 
                    ref={authorInput}
                    type="text" 
                    name="author"
                    value={state.author} 
                    placeholder='작성자'
                    onChange={handleChangeState}
                />
            </div>
            <div className="">
                <textarea 
                    ref={contentInput}
                    name="content"
                    value={state.content}
                    placeholder='일기 내용'
                    onChange={handleChangeState}
                ></textarea>
            </div>
            <div className="">
                <label htmlFor="">오늘의 감정 점수 : </label>
                <select 
                    name="emotion" 
                    value={state.emotion}
                    onChange={handleChangeState}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div className="">
                <button type="submit" onClick={handleSubmit}>저장</button>
            </div>
        </div>
    )

}

export default React.memo(DiaryEditor);