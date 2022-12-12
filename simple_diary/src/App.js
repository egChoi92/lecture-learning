import React, { useReducer, useCallback, useEffect, useMemo, useRef, useState, } from 'react'
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';
import OptomizeTest from './OptomizeTest';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date
      }
      return [newItem, ...state];
    }
    case 'REMOVE': {
      return state.filter((item) => item.id !== action.targetId);
    }
    case 'EDIT': {
      return state.map((item) => 
        item.id === action.targetId 
          ? {...item, content: action.newContent} 
          : item
      )
    }
    default:
      return state
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  // const [data, setData] = useState([]);

  const [data, dispatch] = useReducer(reducer, [])

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
    // 상태 변화 함수에 전달한 값이 새로운 State의 값으로 바뀐다.
    // setData(initData)
    dispatch({type: 'INIT', data: initData})
  }

  useEffect(() => {
    getData();
  }, [])

  const onCreate = useCallback(
    // 함수의 재생성 : 메모이제이션된 함수를 반환한다.
    (author, content, emotion) => {
      dispatch({
        type: 'CREATE', 
        data: {
          author, 
          content, 
          emotion, 
          id: dataId.current
        }
      })
      // const created_date = new Date().getTime();
      // const newItem = {
      //   author,
      //   content,
      //   emotion,
      //   created_date,
      //   id: dataId.current,
      // };
      dataId.current++;
      onPopup('create')
      // 함수형 업데이트 : 상태 변화 함수(setState)에 함수를 전달한다. (?클로저)
      // setData 함수에 전달되는 파라미터에 최신 State를 전달해야 한다.
      // setData((data) => [newItem, ...data]);  
    },
    []
  )

  const onRemove = useCallback(
    (targetId) => {
      dispatch({type: 'REMOVE', targetId})
      onPopup('delete');
      // setData((data) => data.filter((item) => item.id !== targetId));
    },
    []
  )

  const onEdit = useCallback(
    (targetId, newContent) => {
      dispatch({type: 'EDIT', targetId, newContent})
      onPopup('edit')
      // setData((data) => {
      //   return data.map((item) => 
      //     item.id === targetId 
      //       ? {...item, content: newContent} 
      //       : item
      //   )
      // });
    },
    []
  )

  // App 컴포넌트가 재생성될 때 재성성되지 않도록 useMemo()을 사용한다. (최적화)
  const memoizedDispatches = useMemo(() => {
    return {onCreate, onRemove, onEdit} 
  }, [])

  const getDiaryAnalysis = useMemo(
    // 값의 재생성 : 메모이제이션된 값을 반환한다.
    () => {
      const goodCount = data.filter((item) => item.emotion > 3).length; 
      const badCount = data.length - goodCount;
      const goodRatio = `${Math.floor((goodCount / data.length) * 100)}%`;
      return {goodCount, badCount, goodRatio}
    }, 
    [data.length]
  );

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;
  
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
    /* 
      Provider도 컴포넌트이기에 prop이 바뀌면 재생성된다. 
      -> Provider가 재생성되면 자식 컴포넌트도 재생성된다.
      -> data와 함께 onCreate prop을 같이 내려주면, data가 바뀔 때마다 재생성되어 onCreate 최적화가 무의미해진다.
    */
    <DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={memoizedDispatches}>
      {/* <Lifecycle /> */} {/* 라이프사이클 컴포넌트 */}
      {/* <OptomizeTest /> */} {/* 메모이제이션 컴포넌트 */}
      <div className="App">
          <div className="">
            <DiaryEditor />
            <ul className="total">
              <li className="">전체 일기: {data.length}</li>
              <li className="">기분 좋은 일기 개수: {goodCount}</li>
              <li className="">기분 나쁜 일기 개수: {badCount}</li>
              <li className="">기분 좋은 일기 비율: {goodRatio}</li>
            </ul>
          </div>
          <DiaryList />
          {popup.isShow && <div className="popup">일기를 {popupMessage[popup.type]}하였습니다.</div>}
      </div>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

// expory default 는 파일 하나당 하나만 할 수 없다.
export default App;
