import React, { useEffect, useMemo, useRef, useState } from 'react'
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';

// https://jsonplaceholder.typicode.com/comments

const App = () => {
  
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

    const initData = res.slice(0, 20).map((item) => {
      return {
        author: item.email,
        content: item.body,
        emotion: Math.floor((Math.random() * 5)) + 1, 
        created_date: new Date().getTime(),
        id: dataId.current++
      }
    });
    setData(initData)
  }

  useEffect(() => {
    getData();
  }, [])

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current++;
    setData([newItem, ...data]);
    onPopup('create')
  }
  const onRemove = (targetId) => {
    onPopup('delete')
    const newDiaryList = data.filter((item) => item.id !== targetId);
    console.log('newDiaryList: ', newDiaryList);
    setData(newDiaryList);
  }
  const onEdit = (targetId, newContent) => {
    onPopup('edit')
    setData(
      data.map((item) => item.id === targetId ? {...item, content: newContent} : item)
    );
  }

  
  const [popup, setPopup] = useState({
    type: 'create',
    isShow: false,
  })
  const popupMessage = {
    create: '생성',
    delete: '삭제',
    edit: '수정',
  };
  const onPopup = (type) => {
    setPopup({
      type: type,
      isShow: true
    });
    setTimeout(() => setPopup({...popup, isShow: false}), 400)
  }

  const getDiaryAnalysis = useMemo(
    () => {
      console.log("일기 분석 시작");
      const goodCount = data.filter((item) => item.emtion >= 3).length; 
      const badCount = data.length - goodCount;
      const goodRatio = (goodCount / data.length) * 100;
      return {goodCount, badCount, goodRatio}
    }, [data.length]
  );

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  return (
    <>
      {/* <Lifecycle /> */}
      <div className="App">
          <div>
            <DiaryEditor onCreate={onCreate} />
            <div className="">전체 일기: {data.length}</div>
            <div className="">기분 좋은 일기 개수: {goodCount}</div>
            <div className="">기분 나쁜 일기 개수: {badCount}</div>
            <div className="">기분 좋은 일기 비율: {goodRatio}</div>
          </div>
          <DiaryList diaryList={data} onRemove={onRemove} onCreate={onCreate} onEdit={onEdit} />
          {popup.isShow && <div className="popup">일기를 {popupMessage[popup.type]}하였습니다.</div>}
      </div>
    </>
  );
}

export default App;
