export interface Entry {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
}

export function getEntryProperties(): { id: string, name: string }[] {
  return [
    { id: "cases", name: "Cases" },
    { id: "todayCases", name: "Cases (Today)" },
    { id: "casesPerOneMillion", name: "Cases per Million" },
    { id: "deaths", name: "Deaths" },
    { id: "todayDeaths", name: "Deaths (Today)" },
    { id: "deathsPerOneMillion", name: "Deaths per Million" },
    { id: "recovered", name: "Recovered" },
    { id: "active", name: "Active" },
    { id: "critical", name: "Critical" },
    { id: "tests", name: "Tests" },
    { id: "testsPerOneMillion", name: "Tests per Million" },
  ];
}
