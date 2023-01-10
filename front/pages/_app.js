import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types'; 
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout'; 
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

const NodeBird = ({ Component, store }) => {
     return (
        <> 
            <Head>
                <title>NodeBird</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/5.1.1/reset.min.css' integrity='sha512-vw1Eh0YXwSfFcRPIxtAvonjwHTEqKqwq7ucziF/ZCMEzRlmECgzmGSIHecwetYQXMUE1AL4mlxI7OCt38WvOgw==' crossorigin='anonymous'/>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/antd/5.1.1/antd.min.js' integrity='sha512-Zta8CfM7D1YqOVIQEFN0hwj6LQlprj/+LdRXNGhiTi4HEXXTHUh1EAmTMnJptB5vLNq89VDkz3lX0F83CE796Q==' crossorigin='anonymous'></script>
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
     );
};

NodeBird.propTypes = {
    Comment: PropTypes.elementType,
    store: PropTypes.object,
}

const configureStore = (initialState, options) => { // initialState: 초기 상태, options: 리덕스 설정
    const sagaMiddleware = createSagaMiddleware();  // createSagaMiddleware: 사가 미들웨어를 만들어주는 함수
    const middlewares = [sagaMiddleware]; // 미들웨어: 액션이 디스패치되어 리듀서에서 이를 처리하기 전에 추가적인 작업을 할 수 있게 해주는 것 (액션과 스토어 사이에서 동작)
    const enhancer = process.env.NODE_ENV === 'production'  // process.env.NODE_ENV: 현재 실행 중인 노드의 환경을 나타냄 (개발 환경: development, 배포 환경: production)
        ? applyMiddleware(...middlewares) // applyMiddleware: 미들웨어를 적용할 수 있게 해주는 함수
        : composeWithDevTools(  // composeWithDevTools: 개발자 도구를 사용할 수 있게 해주는 함수
            applyMiddleware(...middlewares), 
        )
    const store = createStore(reducer, initialState, enhancer);   // reducer: 액션을 통해 상태를 어떻게 바꿀지 정의
    sagaMiddleware.run(rootSaga); 
    return store;   // store: 애플리케이션의 상태를 저장
}

// 하이오더(고차) 컴포넌트: 컴포넌트를 감싸면 기존 컴포넌트의 기능을 확장
export default withRedux(configureStore)(NodeBird); // withRedux: 리덕스와 next를 연결해주는 함수