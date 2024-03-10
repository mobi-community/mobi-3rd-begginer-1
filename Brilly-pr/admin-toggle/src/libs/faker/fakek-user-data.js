import { fakerKO as faker } from "@faker-js/faker";
export const users = Array.from({ length: 200 }, (_, index) => {
  const id = index + 1;
  const lastName = faker.person.lastName();
  const firstName = faker.person.firstName();
  const fullName = `${lastName} ${firstName}`;
  const birth = faker.date.birthdate();
  const formattedBirth = `${birth.getFullYear()}-${(birth.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${birth.getDate().toString().padStart(2, "0")}`;
  // padStart(채울 길이, 채울 문자) => 총 길이가 2가 안되면 왼쪽을 0으로 채운다
  const randomNumberMid = Math.floor(Math.random() * 10000).toString();
  const randomNumberLast = Math.floor(Math.random() * 10000).toString();
  const phone = `010-${randomNumberMid.padStart(
    4,
    "0"
  )}-${randomNumberLast.padStart(4, "0")}`;
  const lastLogin = new Date(faker.date.recent().toString());
  const formattedLastLogin = `${lastLogin.getFullYear()}.${(
    lastLogin.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${lastLogin
    .getDate()
    .toString()
    .padStart(2, "0")} ${lastLogin
    .getHours()
    .toString()
    .padStart(2, "0")}:${lastLogin
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${lastLogin.getSeconds().toString().padStart(2, "0")}`;
  return {
    id,
    fullName,
    formattedBirth,
    phone,
    formattedLastLogin,
  };
});
