import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types'; 
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout'; 
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

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

export default withRedux((initialState, options) => {   // withRedux: 리덕스를 사용하기 위한 라이브러리
    console.log('initialState: ', initialState);
    console.log('options: ', options);
    const middlewares = []; // 미들웨어: 액션이 디스패치되어 리듀서에서 이를 처리하기 전에 추가적인 작업을 할 수 있게 해주는 것 (액션과 스토어 사이에서 동작)
    const enhancer = composeWithDevTools(   // compose: 여러 개의 미들웨어를 합성할 수 있게 해주는 함수
        applyMiddleware(...middlewares),    // applyMiddleware: 미들웨어를 적용할 수 있게 해주는 함수
    )
    const store = createStore(reducer, initialState, enhancer);   // reducer: 액션을 통해 상태를 어떻게 바꿀지 정의
    return store;   // store: 애플리케이션의 상태를 저장
})(NodeBird);   // 하이오더(고차) 컴포넌트: 컴포넌트를 감싸면 기존 컴포넌트의 기능을 확장