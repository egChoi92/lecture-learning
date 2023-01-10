import { all, fork, takeLatest } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

function loadingAPI() {
    // 서버에 요청을 보내는 부분
}

function* login() { // Generator 함수
    // 실제로 로그인을 하는 부분
    try {   // try catch로 에러를 잡아준다.
        yield call(loadingAPI); // call은 동기적으로 실행
        yield put({ // put은 dispatch 동일
            type: LOG_IN_SUCCESS,
        })
    } catch (error) {   // loginAPI 실패
        console.error(error);
        yield put({
            type: LOG_IN_FAILURE,
        })
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN, login);    // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고, 가장 마지막으로 실행된 작업만 수행
}

export default function* userSaga() { 
    yield all([ // all은 배열 안의 여러 사가를 동시에 실행  
        fork(watchLogin) // fork는 비동기 함수 호출
    ])
}