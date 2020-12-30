import React from 'react';
import { Field } from 'redux-form';
import './Input.scss';
import {connect} from "react-redux";
import { IFormStates } from '../../interface';
import { RadioValues } from '../../data';

type InputProps = {
  placeholder?: string;
  period: string;
}

const Input: React.FC<InputProps> = ({ placeholder = '', period}) => {
  const getInputLabel = (): string => {
    let text = '';
    switch (period) {
      case RadioValues.day:
        text = 'в день';
        return text;
      case RadioValues.hour:
        text = 'в час';
        return text;
    }

    return text;
  }
  const inputLabel = getInputLabel();

  return (
    period !== RadioValues.mrot
      ? <div className="input">
        <Field
          name="salary"
          component="input"
          type="number"
          placeholder={placeholder}
          className="input__control"
        /> <b>&#8381;</b> {inputLabel}
      </div>
    : null
  )
}

const mapStateToProps = (state: IFormStates) => {
  return ({
  period: state.form.simple.values.period,
})}

const Connected = connect(mapStateToProps)(Input)
export { Connected as Input}