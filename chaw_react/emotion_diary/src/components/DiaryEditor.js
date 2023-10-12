import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from './../App';
import MyHeader from './MyHeader';
import MyButton from './MyButton';
import EmotionItem from './EmotionItem';
import { getStringDate } from './../util/date';
import { emotionList } from './../util/emotion';

const DiaryEditor = ({isEdit, originData}) => {
    const navigate = useNavigate();

    const [date, setDate] = useState(getStringDate(new Date()));

    const [emotion, setEmotion] = useState(3);
    const handleClickEmotion = useCallback((emotion) => {
        setEmotion(emotion)
    },[])

    const {onCreate, onEdit, onRemove} = useContext(DiaryDispatchContext);
    const contentRef = useRef();
    const [content, setContent] = useState();

    const handleSubmit = () => {
        if (content.length < 5) {
            contentRef.current.focus();
            return            
        }

        if (window.confirm(isEdit ? '일기를 수정하시겠습니까?' : '새로운 일기를 작성하시겠습니까?')) {
            if (!isEdit) {
                onCreate(date, content, emotion);    
            } else {
                onEdit(originData.id, date, content, emotion);
                
                
            }
        }
        navigate('/', {replace: true})
    }

    const handleRemove = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            onRemove(originData.id)
            navigate('/', {replace: true})
        }
    }

    useEffect(() => {
        if(isEdit) {
            setDate(getStringDate(new Date(parseInt(originData.date))))
            
            setEmotion(originData.emotion)
            setContent(originData.content)
        }
    }, [isEdit, originData])

    return (
        <div className="DiaryEditor">
            <MyHeader
                leftChild={<MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)}/>}
                headerText={isEdit ? '일기 수정하기' : '새 일기 쓰기'}
                rightChild={
                    isEdit && <MyButton type={'negative' }text={'삭제하기'} onClick={handleRemove}/>
                }
             />
             <section className="">
                <h2>오늘은 언제인가요?</h2>
                <div className="input-box">
                    <input 
                        type="date" 
                        value={date} 
                        className="input-date"
                        onChange={(event) => setDate(event.target.value)} 
                    />
                </div>
             </section>
             <section className="">
                <h2>오늘의 감정</h2>
                <div className="emotion-list">
                    {emotionList.map((item) => (
                        <EmotionItem 
                            key={item.emotion_id} 
                            {...item} 
                            onClick={handleClickEmotion}
                            isSelected ={item.emotion_id === emotion}
                        />
                    ))}
                </div>
             </section>
             <section className="">
                <h2>오늘의 일기</h2>
                <div className="textarea-box">
                    <textarea 
                        ref={contentRef}
                        value={content}
                        placeholder={'오늘은 어땠나요?'}
                        onChange={(event => setContent(event.target.value))}
                    ></textarea>
                </div>
             </section>
             <div className="control-box">
                <MyButton 
                    text={'취소하기'}
                    onClick={() => navigate(-1)}
                />
                <MyButton
                    type={'positive'}
                    text={'작성 완료'} 
                    onClick={handleSubmit}
                />
             </div>
        </div>
    );
}

export default DiaryEditor;