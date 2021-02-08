import React, { useMemo, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from "immer"

function countActiveUsers(users) {
  // console.log("활성 사용자 수를 세는 중");
  return users.filter(user => user.active).length  
}

const initialState = {
  userInfo: [
    {
      id: 1,
      username: "AGAL",
      email: "agal-email@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "Tester",
      email: "tester-email@gmail.com",
      active: false,
    },
    {
      id: 3,
      username: "gundam",
      email: "gundam-email@gmail.com",
      active: false,
    },
  ]
}
function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":  
      return produce(state, draft => {
        draft.userInfo.push(action.user)
      })
      // return {
      //   inputs: initialState.inputs,
      //   userInfo: state.userInfo.concat(action.user)
      // }
    case "TOGGLE_USER":
      return produce(state, draft => {
        const user = draft.userInfo.find(user => user.id === action.id);
        user.active = !user.active 
      })
      // return {
      //   ...state,
      //   userInfo: state.userInfo.map(user => 
      //     user.id === action.id
      //     ? {...user, active: !user.active}
      //     : user 
      //   )
      // }
    case "REMOVE_USER":
      return produce(state, draft => {
        const index = draft.userInfo.findIndex(user => user.id === action.id)
        draft.userInfo.splice(index, 1)
      })
      // return {
      //   ...state,
      //   userInfo: state.userInfo.filter(user => user.id !== action.id)
      // }
    default:
      break;
  }
  return state;
}

export const UseDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userInfo } = state;

  const count = useMemo(() => {
    return countActiveUsers(userInfo)
  }, [userInfo])

  return (
    <UseDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList 
        users={userInfo}
      />
      <div>활성 사용자 : {count}</div>
    </UseDispatch.Provider>
  );
}

export default App;
