import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from '../App';
import MyButton from '../components/MyButton';
import MyHeader from "./../components/MyHeader";
import { getStringDate } from './../util/date';
import { emotionList } from './../util/emotion';

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((item) => parseInt(item.id) === parseInt(id));
      console.log('targetDiary: ', targetDiary);
      if (targetDiary) {
        setData(targetDiary);
      } else {
        navigate('/', {replace: true});
      }
    }
  }, [id]);

  if (!data) {
    return <div className="DiaryPage">로딩 중입니다.</div>
  } else {
    const currentEmotionList = emotionList.find((item) => parseInt(item.emotion_id) === data.emotion)
    return (
      <div className="DiaryPage">
        <MyHeader 
          leftChild={<MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)}/>}
          headerText={`${getStringDate(new Date(data.date))} 일기`}
          rightChild={<MyButton text={'수정하기'} onClick={() => navigate(`/edit/${id}`)}/>}
        />
        <article>
          <h2>오늘의 감정</h2>
          <div className={['emotion', `emotion--${currentEmotionList.emotion_id}`].join(' ')}>
            <img src={currentEmotionList.emotion_image} alt="" />
            <p className='emotion__descript'>
              {currentEmotionList.emotion_descript}
            </p>
          </div>
        </article>
        <article>
          <h2>오늘의 일기 감정</h2>
          <div className="content">
            <p className='content__descript'>
              {data.content}
            </p>
          </div>
        </article>
      </div>
    )
  }
};

export default Diary;
