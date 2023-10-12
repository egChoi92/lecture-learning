import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { Button, Form, Row, Col } from 'antd';
import TextInput from './TextInput';
import { useInput } from '../components/CustomHook';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const { isLoggingIn } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const onSubmitForm = useCallback((e) => {
        dispatch({
            type: LOG_IN_REQUEST,
            data: {
                id, password,
            }
        })
    }, [id, password])
    return (
        <>
            <Form onFinish={onSubmitForm}>
                <Row>
                    <Col xs={8}>
                        <label htmlFor="user-id222">아이디</label>
                    </Col>
                    <Col xs={16}>
                        <TextInput type="text" name='user-id' value={id} onChange={onChangeId}/>
                    </Col>
                </Row>
                <Row style={{marginTop: '5px'}}>
                    <Col xs={8}>
                        <label htmlFor="user-password">비밀번호</label>
                    </Col>
                    <Col xs={16}>
                    <TextInput type="password" name='user-password' value={password} onChange={onChangePassword}/>
                    </Col>
                </Row>
                <Row gutter={4} style={{ marginTop: 10 }}>
                    <Col xs={12}>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={isLoggingIn} >로그인</Button>
                    </Col>
                    <Col xs={12}>
                        <Link href="/signup"><Button style={{ width: '100%' }}>회원가입</Button></Link>
                    </Col>
                    
                    
                    
                </Row>
            </Form>
        </>
    )
};

export default LoginForm;