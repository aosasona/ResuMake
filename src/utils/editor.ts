import {educationalDegrees} from "../data/education";

export function getSelectedDegree(degree: string) {
  return educationalDegrees.find((item) => item.label === degree);
}