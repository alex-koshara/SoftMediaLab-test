import React from 'react';
import { Field } from 'redux-form';
import './Checkbox.scss';
import { connect } from "react-redux";
import { IFormStates } from '../../interface';

type CheckboxProps = {
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({checked = false}) => {
  const leftLabelClass = checked ? 'checkbox__left-label checkbox__label' : 'checkbox__left-label checkbox__label checkbox__label--active';
  const rightLabelClass = checked ? 'checkbox__right-label checkbox__label checkbox__label--active' : 'checkbox__right-label checkbox__label';

  return (
    <div className="checkbox">
      <span className={leftLabelClass}>Указать с НДФЛ</span>
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
      <span className={rightLabelClass}>Без НДФЛ</span>
    </div>
  )
}

const mapStateToProps = (state: IFormStates) => ({
  checked: state.form.simple.values.ndfl
})

const Connected = connect(mapStateToProps)(Checkbox)
export { Connected as Checkbox}