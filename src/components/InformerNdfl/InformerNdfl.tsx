import React from 'react';
import './InformerNdfl.scss';
import { connect } from 'react-redux';
import { IFormStates } from '../../interface';

const NDFL_PERCENT = 13;
const showPeriod = 'mounth';

type InformerNdflProps = {
  salary: number;
  ndfl: boolean;
  period: string;
}

const InformerNdfl: React.FC<InformerNdflProps> = ({salary, ndfl, period}) => {
  const persentSalary: number = salary / 100 * NDFL_PERCENT;
  const salaryOnHands = ndfl ? salary : salary - persentSalary
  const ndflSumValue = salary > 0 ? persentSalary : 0;
  const totalSum: number = ndfl ? salary + ndflSumValue : salary;

  return (
    period === showPeriod
      ? <div className="informer-ndfl">
          <p className="informer-ndfl__text"><b>{salaryOnHands} &#8381;</b> сотрудник будет получать на руки</p>
          <p className="informer-ndfl__text"><b>{ndflSumValue} &#8381;</b> НДФЛ, {NDFL_PERCENT}% от оклада</p>
          <p className="informer-ndfl__text"><b>{totalSum} &#8381;</b> за сотрудника в месяц</p>
        </div>
      : null
  )
}

function mapStateToProps(state: IFormStates) {
  let {salary, ndfl, period} = state.form.simple.values;
  salary = Number(salary)

  return {
    salary,
    ndfl,
    period
  }
}

export default connect(mapStateToProps)(InformerNdfl)
