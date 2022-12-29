import React from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

const PostForm = ({ imagePath }) => {
     return (
        <Form encType="multipart/form-dat" style={{ marginBottom: '20px' }}>
        <Input.TextArea maxLength={140} placehoder="" />
        <div style={{ marginTop: '10px'}}>
            <input type="file" multiple hidden />
            <Button>이미지 업로드</Button>
            <Button type="primary" htmlType="submit" style={{ float: 'right'}}>글쓰기</Button>
        </div>
        <div className="">
            {imagePath.map((value, index) => {
                return (
                    <div key={index} style={{ display: 'inline-block'}}>
                        <img src={location.origin + value} style={{ width: '200px' }}/>
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                )
            })}
        </div>
    </Form>
     )
};

PostForm.prototypes = {
    imagePath: PropTypes.object,
}
export default PostForm;