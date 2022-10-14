import {educationalDegrees} from "../data/education";

export function getSelectedDegree(degree: string) {
  return educationalDegrees.find((item) => item.label === degree);
}

export function getSelectedCountry(country: string, countries: any[]) {
  return countries.find((item) => item.label === country);
}