import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { HideNumber } from "../../utils/hide-number";

/**
 * @component
 * @parameter userPerPage: number - 현재 페이지의 번호를 받아옵니다
 * @parameter userData: Array<Object> - 전체 유저의 데이터를 받아옵니다
 * @returns {JSX.Element}
 *
 * @description user 정보를 list로 보여주는 컴포넌트입니다.
 */
const UserList = ({ userPerPage, userData }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = Number(queryParams.get("page"));

    const lastUserIndex = currentPage * userPerPage;
    const firstUserIndex = lastUserIndex - userPerPage;
    const currentUser = userData.slice(firstUserIndex, lastUserIndex);

    return (
        <Container>
            {currentUser.map((user, index) => (
                <UserBox key={index}>
                    <p>{user.user_id}</p>
                    <p>{user.name}</p>
                    <p>{user.birthday}</p>
                    <p>{HideNumber(user.phone_number)}</p>
                    <p>{user.last_login}</p>
                </UserBox>
            ))}
        </Container>
    );
};
export default UserList;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

const UserBox = styled.div`
    padding: 4px;
    border: 1px solid #ccc;
`;
