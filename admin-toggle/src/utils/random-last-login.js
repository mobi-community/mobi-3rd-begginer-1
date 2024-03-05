export const RandomLastLogin = () => {
    const lastLogin = new Date(
        Date.now() - Math.floor(Math.random() * (100 * 24 * 60 * 60 * 1000))
    )
        .toISOString()
        .split("T")[0];
    return lastLogin;
};
