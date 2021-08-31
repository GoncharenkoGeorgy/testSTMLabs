import React from 'react';
import './Input.css';

export default function Input(props) {

  const { value, type, minLength, maxLength, required, autoComplete, onChange, placeholder, inputFieldClassName } = props;

  return (
    <div className="input__fields">

      <input
        type={type}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`${inputFieldClassName}`}
        autoComplete={autoComplete}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}