import React from 'react';
import { Field } from 'redux-form';
import './Checkbox.scss';
import {connect} from "react-redux";
import { IFormStates } from '../../interface';

type CheckboxProps = {
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({checked = false}) => {
  return (
    <div className="checkbox">
      <span className="chekcbox__left-label chekcbox__label">Указать с НДФЛ</span>
      <div className="form-check form-switch">
        <Field
          name="ndfl"
          id="ndfl"
          component="input"
          type="checkbox"
          checked={checked}
          className="form-check-input checkbox__control"
        />
      </div>
      <span className="chekcbox__right-label chekcbox__label">Без НДФЛ</span>
    </div>
  )
}

const mapStateToProps = (state: IFormStates) => ({
  checked: state.form.simple.values.ndfl
})

const Connected = connect(mapStateToProps)(Checkbox)
export { Connected as Checkbox}