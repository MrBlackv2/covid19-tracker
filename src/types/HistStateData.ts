export interface HistStateData {
  date: number,
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
