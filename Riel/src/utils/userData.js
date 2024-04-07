export const phoneNumber = (number) => {
  const cleanNum = number.replace(/-/g, '');
  const lastNum = cleanNum.slice(-4);
  return `010-****-${lastNum}`;
};

export function leftIdPad(value) {
  if (value < 100) {
    if (value < 10) {
      return `00${value}`;
    }
    return `0${value}`;
  }
  return value;
}

export const birthDate = (date) => {
  const newDate = new Date(date).toISOString();
  return newDate.split('T')[0];
};

export const lastLoginDate = (date) => {
  const newDate = new Date(date).toISOString();
  const datePart = newDate.split('T')[0].replace(/-/g, '.');
  const timePart = newDate.slice(0, -2).split('T')[1].replace('.', ':');
  return datePart + '.' + timePart;
};
