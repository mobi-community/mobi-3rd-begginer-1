import { useState } from "react";
import Pagenation from "../components/common/pagenation";
import createUsers from "../utils/user";
import styled from "styled-components";

const MainPage = () => {
    const users = createUsers();
    const perPage = 20; // 한 페이지당 보여줄 유저 수
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = Math.ceil(users.length / perPage);

    // 현재 페이지의 유저 데이터 계산
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentUsers = users.slice(startIndex, endIndex);
    return (
        <MainWrapper>
            {users.map((user) => (
                <UserContainer key={user.id}>
                    <UserInfo>{user.id}</UserInfo>
                    <UserInfo>{user.name}</UserInfo>
                    <UserInfo>{user.birth}</UserInfo>
                    <UserInfo>
                        {user.phone.replace(/(?<=010-).*(?=-)/, "****")}
                    </UserInfo>
                    <UserInfo>{user.lastLoginDate}</UserInfo>
                </UserContainer>
            ))}
            <Pagenation
                currentPage={currentPage}
                // totalPage={totalPage}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </MainWrapper>
    );
};
export default MainPage;

const MainWrapper = styled.div`
    width: 100%;
    height: fit-content;
`;
const UserContainer = styled.div`
    border-radius: 10px;
    margin: 10px;
    width: 300px;
    height: 150px;
    text-align: center;
    /* height: 100px; */
    border: 2px solid #d7d7d7;
    display: flex;
    flex-direction: column;
`;
const UserInfo = styled.p`
    font-size: 15px;
    line-height: 0px;
`;
