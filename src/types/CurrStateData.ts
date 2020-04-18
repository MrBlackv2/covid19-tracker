export interface CurrStateData {
  state: string;
  positive: number;
  positiveScore: number;
  negativeScore: number;
  negativeRegularScore: number;
  commercialScore: number;
  grade: string;
  score: number;
  pending: number | null;
  negative: number;
  hospitalizedCurrently: number;
  hospitalizedCumulative: number;
  inIcuCurrently: number | null;
  inIcuCumulative: number | null;
  onVentilatorCurrently: number | null;
  onVentilatorCumulative: number | null;
  recovered: number;
  lastUpdateEt: string;
  checkTimeEt: string;
  death: number;
  hospitalized: number;
  totalTestResults: number;
  posNeg: number;
  fips: string;
  dateModified: string;
  dateChecked: string;
  notes: string;
  hash: string;
}
