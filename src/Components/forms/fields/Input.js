import React from "react";

const Input = ({meta, input, type, placeholder}) => {
    return (
        <span>
            <input {...input} autoComplete="false" type={type}  placeholder={placeholder}/>
            <span> {meta.touched && meta.error} </span>
        </span>
    );
}

export default Input;