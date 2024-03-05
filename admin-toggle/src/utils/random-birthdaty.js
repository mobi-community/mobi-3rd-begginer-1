export const RandomBirthDay = () => {
    const birthDate = new Date(
        Date.now() -
            Math.floor(Math.random() * (100 * 365 * 24 * 60 * 60 * 1000))
    )
        .toISOString()
        .split("T")[0];
    return birthDate;
};
