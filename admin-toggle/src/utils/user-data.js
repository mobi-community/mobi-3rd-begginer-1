import { createKoreanName } from "./create-korean-name";
import { RandomBirthDay } from "./random-birthdaty";
import { RandomLastLogin } from "./random-last-login";
import { RandomPhoneNumber } from "./random-phone-number";

export const CreateUserData = ({ userDataNum }) => {
    const users = [];

    for (let i = 0; i < userDataNum; i++) {
        users.push({
            user_id: i + 1,
            name: createKoreanName(),
            birthday: RandomBirthDay(),
            phone_number: RandomPhoneNumber(),
            last_login: RandomLastLogin(),
        });
    }
    return users;
};
