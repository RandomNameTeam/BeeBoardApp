import React from 'react';

const MyInput = ({title, ...props}) => {
    return (
        <input placeholder={title}/>
    );
};

export default MyInput;