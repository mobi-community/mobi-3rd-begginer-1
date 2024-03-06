import "./App.css";
import { userListData } from "./libs/user/user";

function App() {
    const phoneNumber = (number) => {
        const replaceNum = number.replace(/-/g, "").split("");
        replaceNum.splice(3, 4, "-****-");
        replaceNum.join("");
        return replaceNum;
    };
    const date = (e) => new Date(e);

    return userListData.map((data, index) => (
        <div
            key={index}
            style={{
                display: "flex",
                gap: "1rem",
            }}
        >
            <div>{data.id}</div>|<div>{data.name}</div>|
            <div>{date(data.birthDay).toString}</div>|
            <div>{phoneNumber(data.phone)}</div>
        </div>
    ));
}

export default App;
