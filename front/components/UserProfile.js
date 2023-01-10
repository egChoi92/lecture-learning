import React, { useCallback } from 'react';
import { Card, Avatar, Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = (e) => {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(logoutAction);
    })
    return (
        <Card
            actions={[
                <div key="post">글<br />{user.post.length}</div>,
                <div key="followings">팔로잉<br />{user.followings.length}</div>,
                <div key="followers">팔로워<br />{user.followers.length}</div>
            ]}
        >   
            <Row style={{justifyContent:'space-between'}}>
                <Card.Meta 
                    avatar={<Avatar>{user.name[0]}</Avatar>}
                    title={user.name}
                />
                <Button onClick={onLogout}>로그아웃</Button>
            </Row>
        </Card>
     )
};

export default UserProfile;