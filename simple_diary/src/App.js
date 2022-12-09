import React, { useRef, useState } from 'react'
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


function App() {
  
  const [data, setData] = useState([]);
  const dataId = useRef(0);
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

  return (
    <div className="App">
        <DiaryEditor onCreate={onCreate} />
        <DiaryList diaryList={data} onRemove={onRemove} onCreate={onCreate} onEdit={onEdit} />
        {popup.isShow && <div className="popup">일기를 {popupMessage[popup.type]}하였습니다.</div>}
    </div>
  );
}

export default App;
