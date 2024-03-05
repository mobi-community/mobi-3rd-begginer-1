export const RandomPhoneNumber = () => {
    const firstNum = Math.floor(1000 + Math.random() * 9000);
    const lastNum = Math.floor(1000 + Math.random() * 9000);
    const phoneNumber = `010-${firstNum}-${lastNum}`;

    return phoneNumber;
};
