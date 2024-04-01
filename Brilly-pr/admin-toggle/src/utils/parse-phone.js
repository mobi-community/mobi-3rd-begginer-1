// phoneNumber 가운데 4자리  *로 파싱
export const parsePhone = (phoneNumber) => {
  const parseNumber = phoneNumber.substring(4, 8).replace(/\d/g, "*");
  return `010-${parseNumber}-${phoneNumber.substring(9)}`;
};
