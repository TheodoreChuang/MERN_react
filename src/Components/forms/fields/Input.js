import React from "react";

const Input = ({meta, input, type, placeholder, id, value, name}) => {
    return (
        <span>
            <input {...input} autoComplete="false" type={type} id={id} placeholder={placeholder} value={value} name={name}/>
            <span> {meta.touched && meta.error} </span>
        </span>
    );
}

export default Input;