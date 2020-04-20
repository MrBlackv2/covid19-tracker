export interface HistStateData {
  date: Date | string;
  state: string;
  positive: number;
  negative: number;
  pending: number | null;
  hospitalizedCurrently: number | null;
  hospitalizedCumulative: number | null;
  inIcuCurrently: number | null;
  inIcuCumulative: number | null;
  onVentilatorCurrently: number | null;
  onVentilatorCumulative: number | null;
  recovered: number | null;
  hash: string;
  dateChecked: string;
  death: number;
  hospitalized: number | null;
  total: number;
  totalTestResults: number;
  posNeg: 81;
  fips: string;
  deathIncrease: 1;
  hospitalizedIncrease: number;
  negativeIncrease: number;
  positiveIncrease: number;
  totalTestResultsIncrease: number;
}

export function getHistStateProps(): { id: string, name: string }[] {
  return [
    { id: 'positive', name: 'Cases' },
    { id: 'positiveIncrease', name: 'New Cases' },
    { id: 'negative', name: 'Negatives' },
    { id: 'negativeIncrease', name: 'New Negatives' },
    { id: 'hospitalizedCurrently', name: 'Hospitalized (Current)' },
    { id: 'hospitalizedCumulative', name: 'Hospitalized (Cum.)' },
    { id: 'hospitalizedIncrease', name: 'Hospitalized Increase' },
    { id: 'inIcuCurrently', name: 'In ICU (Current)' },
    { id: 'inIcuCumulative', name: 'In ICU (Cum.)' },
    { id: 'onVentilatorCurrently', name: 'On Ventilator (Current)' },
    { id: 'onVentilatorCumulative', name: 'On Ventilator (Cum.)' },
    { id: 'recovered', name: 'Recovered' },
    { id: 'death', name: 'Deaths' },
    { id: 'totalTestResults', name: 'Total Tests' },
    { id: 'totalTestResultsIncrease', name: 'Total Tests Increase' }
  ];
}
