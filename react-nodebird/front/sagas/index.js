import { all, call } from 'redux-saga/effects'; 
import user from './user';
import post from './post';

export default function* rootSaga() { // rootSaga는 모든 saga를 합쳐주는 역할
    yield all([
        call(user),
        call(post),
    ])
}