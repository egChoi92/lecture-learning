const dummyUser = {
    name: 'egChoi',
    post: [],
    followings: [],
    followers: [],
    signUpData: {},
};

/* React 의 state 역할 */
export const initialState = { // 초기 상태(Store)
    isLoggedIn: false,
    user: null,
}


/* React 의 setState 역할 */
const LOG_IN = 'LOG_IN'; // 액션의 이름
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT = 'LOG_OUT';
const SIGN_UP = 'SIGN_UP';

export const loginAction = {   // 실제 액션
    type: LOG_IN,
    data: {
        name: '최은광',
    }
}

export const logoutAction = {
    type: LOG_OUT,
}

export const signUpAction = (data) => { // action에 넣을 데이터가 동적인 경우, action을 함수로 만든다.
    return {
        type: SIGN_UP,
        data: data, 
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,  // 기존의 state를 복사   
                isLoggedIn: true,   
                user: dummyUser,
            }
        case LOG_OUT:
            return {
                ...state,  
                isLoggedIn: false,
                user: null,
            }
        case SIGN_UP:
            return {
                ...state,  
                signUpData: action.data
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;