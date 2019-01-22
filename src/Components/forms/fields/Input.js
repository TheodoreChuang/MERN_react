import React from "react";

const Input = ({meta, input, type, placeholder, id, value, name, required }) => {
    return (
        <span>
            <input {...input} autoComplete="false" type={type} id={id} placeholder={placeholder} value={value} name={name} required={required} />
            <span> {meta.touched && meta.error} </span>
        </span>
    );
}

export default Input;