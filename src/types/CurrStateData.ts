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

export function getCurrStateProps(): { id: string, name: string }[] {
  return [
    { id: "positive", name: "Cases" },
    { id: "negative", name: "Negatives" },
    { id: "grade", name: "Grade" },
    { id: "hospitalizedCurrently", name: "Hospitalized (Current)" },
    { id: "hospitalizedCumulative", name: "Hospitalized (Cum.)" },
    { id: "inIcuCurrently", name: "In ICU (Current)" },
    { id: "inIcuCumulative", name: "In ICU (Cum.)" },
    { id: "onVentilatorCurrently", name: "On Ventilator (Current)" },
    { id: "onVentilatorCumulative", name: "On Ventilator (Cum.)" },
    { id: "recovered", name: "Recovered" },
    { id: "death", name: "Deaths" },
    { id: "totalTestResults", name: "Total Tests" },
  ];
}
