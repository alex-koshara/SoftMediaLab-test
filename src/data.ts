export enum RadioValues {
  mounth = 'mounth',
  mrot = 'mrot',
  day = 'day',
  hour = 'hour'
}

enum RadioLabels {
  month = 'Оклад за месяц',
  mrot = 'MROT',
  day = 'Оплата за день',
  hour = 'Оплата за час',
}

export const RADIO_LIST = [
  {
    id: 0,
    value: RadioValues.mounth,
    label: RadioLabels.month,
  },
  {
    id: 1,
    value: RadioValues.mrot,
    label: RadioLabels.mrot,
    description: 'МРОТ - минимальный размер оплаты труда. Разный для разных регионов.'
  },
  {
    id: 2,
    value: RadioValues.day,
    label: RadioLabels.day,
  },
  {
    id: 3,
    value: RadioValues.hour,
    label: RadioLabels.hour,
  }
]