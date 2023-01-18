import React from 'react';
import { Card, Button, Avatar } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
     return (
        <Card 
            cover={post.img && <img src={post.img} alt="example" />}
            actions={[
                <RetweetOutlined />,
                <HeartOutlined />,
                <MessageOutlined />,
                <EllipsisOutlined />,
            ]}
            extra={<Button>팔로우</Button>}
        >
            <Card.Meta 
                avatar={<Avatar>{post.User.nickName[0]}</Avatar>}
                title={post.User.nickName}
                description={post.content}
            />
        </Card>
     )
};

PostCard.prototypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    }),
}

export default PostCard;