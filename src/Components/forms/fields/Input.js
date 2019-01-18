import React from "react";

const Input = ({meta, input, type}) => {
    return (
        <span>
            <input {...input} type={type} autoComplete="off" />
            <span> {meta.touched && meta.error} </span>
        </span>
    );
}

export default Input;