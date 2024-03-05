export const RandomLastLogin = () => {
    const lastLoginData = new Date(
        Date.now() - Math.floor(Math.random() * (100 * 24 * 60 * 60 * 1000))
    );

    const toStringPadStart = (data) => {
        return data.toString().padStart(2, "0");
    };

    const year = lastLoginData.getFullYear();
    const month = toStringPadStart(lastLoginData.getMonth() + 1);
    const day = toStringPadStart(lastLoginData.getDate());
    const hour = toStringPadStart(lastLoginData.getHours());
    const minutes = toStringPadStart(lastLoginData.getMinutes());
    const seconds = toStringPadStart(lastLoginData.getSeconds());

    const formattedLastLogin = `${year}.${month}.${day}.${hour}.${minutes}.${seconds}`;

    return formattedLastLogin;
};
