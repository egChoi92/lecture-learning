import React from 'react';
import { Card, Avatar } from 'antd';

const UserProfile = (e) => {
     return (
        <Card
            actions={[
                <div key="post">글<br />{dummy.post.length}</div>,
                <div key="followings">팔로잉<br />{dummy.followings.length}</div>,
                <div key="followers">팔로워<br />{dummy.followers.length}</div>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>{dummy.name[0]}</Avatar>}
                title={dummy.name}
            />
        </Card>
     )
};

export default UserProfile;