import { reduxForm, InjectedFormProps } from 'redux-form';
import { Checkbox } from './../Checkbox/Checkbox';
import InformerNdfl from './../InformerNdfl/InformerNdfl';
import { Input } from './../Input/Input';
import { RadioGroup } from './../RadioGroup/RadioGroup';
import {RADIO_LIST} from "../../data";
import './FormNdfl.scss';

const FormNdfl = (props: InjectedFormProps) => {
  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit} className="form-ndfl">
      <div className="form-ndfl__group">
        <RadioGroup radioData={RADIO_LIST} />
      </div>
      <div className="form-ndfl__group">
        <Checkbox />
      </div>
      <div className="form-ndfl__group">
        <Input placeholder="Введите сумму" />
      </div>
      <InformerNdfl />
    </form>
  );
};


export default reduxForm({
  form: 'simple',
})(FormNdfl);


