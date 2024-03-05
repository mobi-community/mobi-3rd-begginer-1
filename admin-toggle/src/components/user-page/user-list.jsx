import { useParams } from "react-router-dom";
import styled from "styled-components";
import { HideNumber } from "../../utils/hide-number";

const UserList = ({ userPerPage, userData }) => {
    const { pageNumber } = useParams();

    const currentPage = Number(pageNumber) || 1;

    const lastUserIndex = currentPage * userPerPage;
    const firstUserIndex = lastUserIndex - userPerPage;
    const currentUser = userData.slice(firstUserIndex, lastUserIndex);

    return (
        <Container>
            {currentUser.map((user, index) => (
                <div key={index}>
                    <p>{user.name}</p>
                    <p>{user.birthday}</p>
                    <p>{HideNumber(user.phone_number)}</p>
                    <p>{user.last_login}</p>
                </div>
            ))}
        </Container>
    );
};
export default UserList;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;
