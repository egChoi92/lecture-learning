/* React 의 state 역할 */
export const initialState = { // 초기 상태(Store)
    isLoggedIn: false,
    user: null,
}


/* React 의 setState 역할 */
const LOG_IN = 'LOG_IN'; // 액션의 이름
const LOG_OUT = 'LOG_OUT';

const loginAction = {   // 실제 액션
    type: LOG_IN,
    data: {
        name: '최은광',
    }
}

const logoutAction = {
    type: LOG_OUT,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,  // 기존의 state를 복사   
                isLoggedIn: true,   
                user: action.data,
            }
        case LOG_OUT:
            return {
                ...state,  
                isLoggedIn: false,
                user: null,
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;