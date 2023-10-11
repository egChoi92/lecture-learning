import React from 'react';
import { Input } from 'antd';

const TextInput = React.memo(({type, name, value, onChange}) => {
    return (
        <Input type={type} name={name} value={value} required onChange={onChange}  />
    )
})

export default TextInput;