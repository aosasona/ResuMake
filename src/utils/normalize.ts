export const normalizeFirstCaps = (str: string) => {
  const stringParts = str.split(" ");
  for (let i = 0; i < stringParts.length; i++) {
	stringParts[i] = stringParts[i]?.toLowerCase();
	stringParts[i] = stringParts[i].charAt(0).toUpperCase() + stringParts[i].slice(1);
  }
  return stringParts.join(" ");
}

export const normalizePhoneNum = (phoneNum: string) => {
  if (!phoneNum.startsWith("0") && !phoneNum.startsWith("+")) {
	phoneNum = "+" + phoneNum;
  }
  return phoneNum
}