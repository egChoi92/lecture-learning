import React, { useEffect } from 'react';
import { Menu, Input } from 'antd';

const menuItems = [
    {
        label: '노드버드',
        key: 'home',
    },
    {
        label: '프로필',
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
            {children}
        </div>
    );
}

export default AppLayout;