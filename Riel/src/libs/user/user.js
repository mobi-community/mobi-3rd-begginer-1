import { fakerKO as faker } from "@faker-js/faker";

export const userListData = Array.from({ length: 200 }, (_, index) => ({
    id: index + 1,
    name: faker.person.lastName() + faker.person.firstName(),
    birthDay: faker.date.birthdate(),
    phone: faker.phone.number(),
    lastLogin: faker.date.recent(),
}));
