import React from 'react';
import './Radio.scss';
import { Field } from 'redux-form';
import { IRadio } from '../../interface';
import { Infobox } from '../Infobox/Infobox';

type RadioProps = {
  data: IRadio;
  key: number;
  checkedValue: string;
}

export const Radio: React.FC<RadioProps> = ({data, checkedValue}) => {
  return (
    <div className="radio-group__item radio">
      <label className="radio__wrap">
        <Field
          name="period"
          component="input"
          checked={data.value === checkedValue}
          type="radio"
          value={data.value}
          className="radio__control"
        />
        <span className="radio__label">{data.label}</span>
      </label>
      <Infobox description={data.description} className="radio__infobox" />
    </div>
  )
}
