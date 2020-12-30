
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import './style.scss'
import FormNdfl from "./components/FormNdfl/FormNdfl";
import {RadioValues} from "./data";

const rootEl = document.getElementById("root");
const DEFAULT_SALARY = 0;

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <FormNdfl initialValues={
        {
          ndfl: true,
          period: RadioValues.mounth,
          salary: DEFAULT_SALARY
        }
      } />
    </div>
  </Provider>,
  rootEl
);

