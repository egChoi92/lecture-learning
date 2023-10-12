import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from './CustomHook';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
    const [text, setText] = useState('');
    const { imagePath, isAddingPost, postAdded} = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        setText('')
    }, [postAdded === true])

    const onSubmitForm = useCallback(() => {
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text
            }
        })
    }, [])
    
    const onChangeText = useCallback((e) => {
        setText(e.target.value)
    })
     return (
        <Form encType="multipart/form-dat" style={{ marginBottom: '20px' }} onFinish={onSubmitForm}>
        <Input.TextArea maxLength={140} placehoder="어떤 일이 있었나요?" value={text} onChange={onChangeText} />
        <div style={{ marginTop: '10px'}}>
            <input type="file" multiple hidden />
            <Button>이미지 업로드</Button>
            <Button type="primary" htmlType="submit" style={{ float: 'right'}} loading={isAddingPost} >글쓰기</Button>
        </div>
        <div className="">
            {imagePath.map((value, index) => ( 
                <div key={index} style={{ display: 'inline-block'}}>
                    <img src={location.origin + value} style={{ width: '200px' }}/>
                    <div>
                        <Button>제거</Button>
                    </div>
                </div>
            ))}
        </div>
    </Form>
     )
};

PostForm.prototypes = {
    imagePath: PropTypes.object,
}
export default PostForm;