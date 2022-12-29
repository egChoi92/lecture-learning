import React, { useCallback, useState } from 'react';
import { Button, Checkbox, Form, Input} from 'antd';
import TextInput from '../components/TextInput';
import { useInput } from '../components/CustomHook';

const Signup = () => {
    
    const [id, onChangeId] = useInput('');
    const [name, onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheeck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const onSubmit = useCallback((event) => {
        if (password !== passwordCheck) {
            setPasswordError(true)
        }
        if (!term) {
            setTermError(true)
        }
        console.log({
            id,
            name,
            password,
            passwordCheck,
            term
        });
    }, [password, passwordCheck, term]);

    const onChangePasswordCheck = useCallback((event) => {
        setPasswordError(event.target.value !== password)
        setPasswordCheeck(event.target.value)         
    }, [password]);
    
    const onChangeTerm = useCallback((event) => {
        setTermError(false)
        setTerm(event.target.checked)         
    }, []);

    return (
        <>
            <Form onFinish={onSubmit} style={{ padding: 20}}>
                <div style={{ marginTop: 10 }}>
                    <label htmlFor="user-id222">아이디</label>
                    <br />
                    <TextInput type="text" name='user-id' value={id} onChange={onChangeId}/>
                </div>
                <div style={{ marginTop: 10 }}>
                    <label htmlFor="user-name">닉네임</label>
                    <br />
                    <TextInput type="text" name='user-name' value={name} onChange={onChangeName}/>
                </div>
                <div style={{ marginTop: 10 }}>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <TextInput type="password" name='user-password' value={password} onChange={onChangePassword}/>
                </div>
                <div style={{ marginTop: 10 }}>
                    <label htmlFor="user-password-check">비밀번호 확인</label>
                    <br />
                    <TextInput type="password" name='user-password-check' value={passwordCheck} onChange={onChangePasswordCheck}/>
                    {passwordError && <p style={{ color: 'red'}}>비밀번호가 일치하지 않습니다.</p>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>동의합니다</Checkbox>
                    {termError && <p style={{ color: 'red'}}>약관에 동의해주세요.</p>}
                </div>
                <div style={{marginTop: 20}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </>
    )
}

export default Signup;
