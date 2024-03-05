import { koreanFirstNames, koreanLastNames } from "../contants/korean-name";

export const createKoreanName = () => {
    const firstName =
        koreanFirstNames[Math.floor(Math.random() * koreanFirstNames.length)];
    const lastName =
        koreanLastNames[Math.floor(Math.random() * koreanLastNames.length)];

    return `${firstName}${lastName}`;
};
