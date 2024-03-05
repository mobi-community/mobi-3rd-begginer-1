import { useEffect } from "react";
import { getUserInfo } from "./user";

const UserInfo = () => {
    useEffect(() => {
        const fetchUserInfo = async () => {
            const response = await getUserInfo();
            console.log(response);
        };
        fetchUserInfo();
    }, []);
};
export default UserInfo;
