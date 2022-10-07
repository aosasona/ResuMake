export const filterObject = (obj: any, disallowed: string[]) => {
  let newObj: any = {};
  for (const key in obj) {
	if (!disallowed.includes(key)) {
	  newObj[key] = obj[key];
	}
  }
  return newObj;
}