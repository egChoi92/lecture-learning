import React, { useContext, useRef, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "./App";

const DiaryItem = ({
    id, 
    author, 
    content, 
    emotion, 
    created_date, 
}) => {

    const {onRemove, onEdit} = useContext(DiaryDispatchContext)
    
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState(content);
    const localContentInput = useRef();

    const handleRemove = () => {
        if (window.confirm(`일기를 삭제하겠습니까?`)) {
            onRemove(id)   
        }
    }

    const handleQuicEdit = () => {
        setIsEdit(false)
        setLocalContent(content)
    }

    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentInput.current.focus()
            return;
        };

        if (window.confirm('일기를 수정하시겠습니까?')) {
            onEdit(id, localContent);
            toggleIsEdit();
        }
    }

    return (
        <li className="DiaryItem">
            <div className="head">
                <div className="info">
                    <span>작성자 : {author}</span>
                    <span>감정 점수 : {emotion}</span>
                </div>
                <p className="date">{new Date(created_date).toLocaleString()}</p>
            </div>
            <p className="content">
                {isEdit ? (
                    <>
                        <textarea ref={localContentInput} value={localContent} onChange={(e) => setLocalContent(e.target.value)}/>
                    </>
                ) : (
                    <>
                        {content}
                    </>
                )}
            </p>
            <div className="button-wrapper">
                {isEdit ? (
                    <>
                        <button className="white-button" onClick={handleQuicEdit}>취소하기</button>
                        <button className="black-button" onClick={handleEdit}>저장하기</button>
                    </>
                ) : (
                    <>
                        <button className="red-button" onClick={handleRemove}>삭제하기</button>
                        <button className="black-button" onClick={toggleIsEdit}>수정하기</button>
                    </>
                )}
            </div>
        </li>
    )
     
};

export default React.memo(DiaryItem);