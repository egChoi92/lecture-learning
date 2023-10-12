import React, { useCallback } from 'react';
import { Card, Avatar, Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST, logoutAction } from '../reducers/user';

const UserProfile = (e) => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, [])
    return (
        <Card
            actions={[
                <div key="post">글<br />{me.post.length}</div>,
                <div key="followings">팔로잉<br />{me.followings.length}</div>,
                <div key="followers">팔로워<br />{me.followers.length}</div>
            ]}
        >   
            <Row style={{justifyContent:'space-between'}}>
                <Card.Meta 
                    avatar={<Avatar>{me.nickName[0]}</Avatar>}
                    title={me.nickName}
                />
                <Button onClick={onLogout}>로그아웃</Button>
            </Row>
        </Card>
     )
};

export default UserProfile;