import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Button, Row, Col, Form } from 'antd';
import TextInput from './TextInput';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const dummy = {
    name: 'egChoi',
    post: [],
    followings: [],
    followers: [],
    isLoggedIn: false,
}

const AppLayout = ({ children }) => {
    const menuItems = [
        {
            label: (
                <Link href="/">노드버드</Link>    
            ),
            key: 'home',
        },
        {
            label: (
                <Link href="/profile">프로필</Link>    
            ),
            key: 'profile',
        },
        {
            label: (
                <Input.Search enterButton style={{ verticalAlign: 'middle' }}/>
            ),
            key: 'mail',
        },
    ];

    return (
        <div>
            <Menu 
                mode="horizontal"
                items={menuItems} 
            />
            <Row gutter={10} style={{ padding: '10px'}}>
                <Col xs={24} md={6}>
                    {dummy.isLoggedIn 
                        ? <UserProfile />
                        : <LoginForm />
                    }
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <Link href="https://agal.tistory.com/" target='_blank'>Made by AGAL with ZeroCho</Link>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node,
};

export default AppLayout;