const dummyUser = {
    name: 'egChoi',
    post: [],
    followings: [],
    followers: [],
};

/* React 의 state 역할 */
export const initialState = { // 초기 상태(Store)
    isLoggedIn: false,        // 로그인 여부
    isLoggingOut: false,      // 로그아웃 시도중
    isLoggingIn: false,       // 로그인 시도중
    logInErrorReason: '',     // 로그인 실패 사유
    signUp: false,            // 회원가입 성공
    isSigningUp: false,       // 회원가입 시도중
    signUpErrorReason: '',    // 회원가입 실패 사유
    me: null,                 // 내 정보
    followingList: [],        // 팔로잉 리스트
    followerList: [],         // 팔로워 리스트
    userInfo: null,           // 남의 정보
}


/* React 의 setState 역할 */

// Request -> Success -> Failure : 비동기 요청을 위한 액션 -> 리덕스 사가 사용
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; // 액션의 이름을 상수로 만들어서 사용하는 이유는 오타 방지
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'; 
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; 
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'; 
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST'; 
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS'; 
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'; 
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS'; 
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST'; 
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS'; 
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST'; 
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS'; 
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';

// 동기 요청을 위한 액션 -> 리덕스 사용
export const INCREMTENT_NUMBER = 0;

export const loginAction = data => ({
    type: LOG_IN_REQUEST,
    data,
})

export const logoutAction = {
    type: LOG_OUT_REQUEST,
}

export const signUpAction = data => ({ // action에 넣을 데이터가 동적인 경우, action을 함수로 만든다.
    type: SIGN_UP_REQUEST,
    data: data, 
})
export const signUpSuccess = {
    type: SIGN_UP_SUCCESS,
}
export const signUp = data => ({ 
    type: SIGN_UP_REQUEST,
    data: data, 
})

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
                me: dummyUser,
                isLoading: false,
            }
        case LOG_IN_FAILURE:
            return {
                ...state,  
                isLoggedIn: false,
                me: null,
            }
        case LOG_OUT_REQUEST:
            return {
                ...state,  
                isLoggedIn: false,
                me: null,
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