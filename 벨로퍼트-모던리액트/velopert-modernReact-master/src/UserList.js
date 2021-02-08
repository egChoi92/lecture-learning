import React, { useContext } from "react";
import { UseDispatch } from "./App";

const User = React.memo(function User({ user }) {
  const {id, username, email, active} = user;

  // // 1. 마운트 / 언마운트
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   return () => {
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   };
  // }, []);

  // // 2. deps 에 특정 값 넣기
  // useEffect(() => {
  //   console.log('user 값이 설정됨');
  //   console.log(user);
  //   return () => {
  //     console.log('user 가 바뀌기 전..');
  //     console.log(user);
  //   };
  // }, [user]);

  // // 3. deps 파라미터를 생략하기
  // useEffect(() => {
  //   console.log(user)
  // })

  const dispatch = useContext(UseDispatch)
  
  console.log(dispatch)
  return (
    <div>
      <b 
        style={{
        color: active ? "red" : "black",
        cursor: "pointer"
        }} 
        onClick={() => {
          dispatch({
            type: "TOGGLE_USER",
            id
          })
        }}
      >
        {username}
      </b> 
      <span>({email})</span>
      <button 
        onClick={() => {
          dispatch({
            type: "REMOVE_USER",
            id
          })}}
      >
        삭제
      </button>
    </div>
  )
});

function UserList({ users }) {
  return (
    <div>
      {users.map(user =>
        <User 
          key={user.id} 
          user={user}
        />
      )}
    </div>
  )
}

export default React.memo(UserList);