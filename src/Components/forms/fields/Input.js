import React from "react";
import Input from '@material-ui/core/Input';


const InputField = ({meta, input, type, ...other}) => {
    
    return (
        <span>
            <Input {...input} type={type} {...other} autoComplete="off" />

            <span> {meta.touched && meta.error} </span>
        </span>
    );
}

export default InputField;