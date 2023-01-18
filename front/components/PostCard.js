import React, { useCallback, useEffect, useState } from 'react';
import { Card, Button, Avatar, Form, Input, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText] = useState('');
    const { me } = useSelector(state => state.user);
    const { commentAdded, isAddingComment } = useSelector(state => state.post);
    const dispatch = useDispatch();

    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
    }, []);

    const onSubmitComment = useCallback(() => {
        if (!me) {
            return alert('로그인이 필요합니다.');
        }
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                postId: post.id,
            }
        })
    }, [me && me.id]);

    useEffect(() => {
        setCommentText('');
    }, [commentAdded === true])

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    }, []);

    return (
        <div>
            <Card 
                cover={post.img && <img src={post.img} alt="example" />}
                actions={[
                    <RetweetOutlined />,
                    <HeartOutlined />,
                    <MessageOutlined onClick={onToggleComment}/>,
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
            {commentFormOpened && (
                <>
                    <Form onFinish={onSubmitComment}>
                        <Form.Item>
                            <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                        </Form.Item>
                        <Button type="primary" htmlType='submit'>댓글 쓰기</Button>
                        <List
                            header={`${post.Comments ? post.Comments.length : 0}개의 댓글`}
                            itemLayout='horizontal'
                            dataSource={post.Comments || []}
                            renderItem={(item) => (
                                <li>
                                    <Comment
                                        author={item.User.nickName}
                                        avatar={<Avatar>{item.User.nickName[0]}</Avatar>}
                                        content={item.content}
                                        // datatime={item.createdAt}
                                    />
                                </li>
                            )}
                        >

                        </List>
                    </Form>      
                </>
            )}         
        </div>
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