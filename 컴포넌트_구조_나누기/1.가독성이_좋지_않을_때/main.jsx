import { useState } from "react";
import UserInfo from "./user-info";

const Main = () => {
    const [data, setData] = useState();

    setData({
        name: "이름",
        nick_name: "닉네임",
        phone: "없음",
    });

    return <UserInfo data={data} />;
};
export default Main;
