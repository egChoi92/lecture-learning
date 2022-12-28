import React, { useEffect } from 'react';
import Link from 'next/link';
import { Menu, Input, Button } from 'antd';

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
]

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu 
                mode="horizontal"
                items={menuItems} 
            />
            <Link href="/signup"><Button>회원가입</Button></Link>
            {children}
        </div>
    );
}

export default AppLayout;