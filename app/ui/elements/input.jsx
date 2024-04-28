import React from 'react';

const InputComponent = ({ id,type,name, value, onChange, placeholder, className }) => {
    return (
        <input
            id={id}
            type={type}
            name={name} // Add name attribute
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
        />
    );
};

export default InputComponent;
