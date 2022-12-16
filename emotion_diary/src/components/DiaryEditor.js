import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from './../App';
import MyHeader from './MyHeader';
import MyButton from './MyButton';
import EmotionItem from './EmotionItem';

const emotionList = [
    {
        emotion_id: 1,
        emotion_image: process.env.PUBLIC_URL + `/assets/emotion1.png`,
        emotion_descript: '완전 좋음',
    },
    {
        emotion_id: 2,
        emotion_image: process.env.PUBLIC_URL + `/assets/emotion2.png`,
        emotion_descript: '좋음',
    },
    {
        emotion_id: 3,
        emotion_image: process.env.PUBLIC_URL + `/assets/emotion3.png`,
        emotion_descript: '보통',
    },
    {
        emotion_id: 4,
        emotion_image: process.env.PUBLIC_URL + `/assets/emotion4.png`,
        emotion_descript: '나쁨',
    },
    {
        emotion_id: 5,
        emotion_image: process.env.PUBLIC_URL + `/assets/emotion5.png`,
        emotion_descript: '완전 나쁨',
    },
]

const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
}

const DiaryEditor = () => {
    const navigate = useNavigate();

    const [date, setDate] = useState(getStringDate(new Date()));

    const [emotion, setEmotion] = useState(3);
    const handleClickEmotion = (emotion) => {
        setEmotion(emotion)
    }

    const {onCreate} = useContext(DiaryDispatchContext);
    const contentRef = useRef();
    const [content, setContent] = useState();

    const handleSubmit = () => {
        if (content.length < 5) {
            contentRef.current.focus();
            return            
        }
        onCreate(date, content, emotion);
        navigate('/', {replace: true})
    }

    return (
        <div className="DiaryEditor">
            <MyHeader
                leftChild={<MyButton text={'< 뒤로 가기'} onClick={() => navigate(-1)}/>}
                headerText={'새 일기 쓰기'}
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
                <h2>오늘의 이길</h2>
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