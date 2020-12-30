import React from 'react';
import { Field } from 'redux-form';
import './Input.scss';

type InputProps = {
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder = ''}) => {
  return (
    <div className="input">
        <Field
          name="salary"
          component="input"
          type="number"
          placeholder={placeholder}
          className="input__control"
        /> <b>&#8381;</b>
    </div>
  )
}