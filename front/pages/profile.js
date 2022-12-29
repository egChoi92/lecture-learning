import React from 'react';
import { Form, Input, Button, List, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import NicknameEditForm from '../components/NicknameEditForm';

const followingsList = [
    '테스트1',
    '테스트2',
    '테스트3',
]

const followerList = [
    '팔로워 테스트1',
    '팔로워 테스트2',
    '팔로워 테스트3',
]

const Profile = () => {
    return (
        <div>
            <NicknameEditForm />
            <List 
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={followingsList}
                renderItem={item => (
                    <List.Item style={{ marginTop: '10px' }}>
                        <Card actions={[<StopOutlined />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
            <List 
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={followerList}
                renderItem={item => (
                    <List.Item style={{ marginTop: '10px' }}>
                        <Card actions={[<StopOutlined />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Profile;
