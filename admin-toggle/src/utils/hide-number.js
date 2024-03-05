export const HideNumber = (phoneNumber) => {
    const phone = phoneNumber.replace(/\D/g, "");

    const result = `${phone.slice(0, 3)}-****-${phone.slice(7)}`;
    return result;
};
