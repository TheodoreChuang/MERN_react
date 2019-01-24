import React from "react";
// import Input from '@material-ui/core/Input';

const Input = ({meta, input, ...other }) => {
    
    return (
        <span>
            
            <input {...input} type={type} name={name} placeholder={placeholder} value={value} creator_id={creator_id} required = {required} autoComplete="off"  />

            <span> {meta.touched && meta.error} </span>
        </span>
    );
}

export default Input;