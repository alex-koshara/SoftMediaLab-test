export interface IRadio {
  value: string;
  label: string;
  id: number;
  description?: string;
}

export interface IFormStates {
  form: {
    simple: {
      values: {
        salary: number,
        ndfl: boolean,
        period: string,
      }
    }
  }
}