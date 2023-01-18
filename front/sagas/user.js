// race, cancel, select, throttle, debounce, 등 이펙트가 자주 쓰인다.
import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user';

function loadingAPI() {
    // 서버에 요청을 보내는 구문
}

function* login() { // Generator 함수
    // 실제로 로그인을 하는 구문
    try {   // try catch로 에러를 잡아준다.
        // yield call(loadingAPI); // call은 동기 함수 호출
        yield delay(2000);
        yield put({ // put은 dispatch 동일
            type: LOG_IN_SUCCESS,
        })
    } catch (error) {   // loginAPI 실패
        console.error(error);
        yield put({
            type: LOG_IN_FAILURE,
            error: e,
        })
    }
}

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login)
}

function signUpAPI() {
    // return  axios.post('/login');
}

function* signUp() {   
    try {
        // yield call(signUpAPI);
        yield delay(2000)
        yield put({
            type: SIGN_UP_SUCCESS,
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        })

    }

}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {    
    yield all([ // all은 배열 안의 여러 사가를 동시에 실행  
        fork(watchLogin), // fork는 비동기 함수 호출
        fork(watchSignUp), 
    ])
}

/* 
const HELLO_SAGA = 'HELLO_SAGA';
function* hello(){   
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}
function* watchHello() {
    // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고, 가장 마지막으로 실행된 작업만 수행
    // takeEvery는 HELLO_SAGA 액션이 실행될 때마다 함수를 실행
    yield takeEvery(HELLO_SAGA, hello)
    
    // @note: takeEvery를 while문으로 바꾸면 아래와 같다.
    // while (true) {
    //     yield take(HELLO_SAGA);
    //     console.log(1);
    //     console.log(2);
    //     console.log(3);
    //     console.log(4);
    // }
}
*/