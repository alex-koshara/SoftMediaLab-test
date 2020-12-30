import React from 'react';
import { IRadio, IFormStates } from '../../interface';
import './RadioGroup.scss';
import { Radio } from '../Radio/Radio';
import {connect} from "react-redux";

type RadioGroupProps = {
  radioData: IRadio[];
  value: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({radioData, value}) => {
  return (
    <div className="radio-group">
      <span className="radio-group__title">Сумма</span>
      <div className="radio-group__wrap">
        {radioData.map(radio => {
          return (
            <Radio
              data={radio}
              key={radio.id}
              checkedValue={value}
            />
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state: IFormStates) => ({
  value: state.form.simple?.values.period
})

const Connected = connect(mapStateToProps)(RadioGroup)
export  { Connected as RadioGroup}