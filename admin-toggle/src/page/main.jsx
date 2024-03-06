import { useNavigate } from "react-router-dom";
import UserPage from "./user-page";

const Main = () => {
    const navigate = useNavigate();

    const onClickUserinfo = () => {
        navigate("/user/");
    };

    return (
        <>
            <div>
                <button onClick={onClickUserinfo}>회원 정보</button>
            </div>
        </>
    );
};
export default Main;
