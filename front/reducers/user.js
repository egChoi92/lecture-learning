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

// Request -> Success -> Failure : 비동기 요청을 위한 액션 -> 리덕스 사가 사용
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; // 액션의 이름을 상수로 만들어서 사용하는 이유는 오타 방지
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'; 
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

// 동기 요청을 위한 액션 -> 리덕스 사용
export const INCREMTENT_NUMBER = 0;

export const signUpAction = data => ({ // action에 넣을 데이터가 동적인 경우, action을 함수로 만든다.
    type: SIGN_UP_REQUEST,
    data: data, 
})

export const signUp = data => ({ 
    type: SIGN_UP_REQUEST,
    data: data, 
})
export const signUpSuccess = {
    type: SIGN_UP_SUCCESS,
}

export const loginAction = data => ({
    type: LOG_IN_REQUEST,
    data,
})

export const logoutAction = {
    type: LOG_OUT_REQUEST,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,  // 기존의 state를 복사   
                loginData: action.data,
                isLoading: true,
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,  
                isLoggedIn: true,   
                user: dummyUser,
                isLoading: false,
            }
        case LOG_OUT_REQUEST:
            return {
                ...state,  
                isLoggedIn: false,
                user: null,
            }
        case SIGN_UP_REQUEST:
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