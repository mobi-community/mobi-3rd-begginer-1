import { useEffect, useState } from "react";
import Pagenation from "../components/common/pagenation";
import createUsers from "../utils/user";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const UserPage = () => {
    const users = createUsers();
    const [searchParams, setSearchParams] = useSearchParams();
    const limit = Number(searchParams.get("limit")) || 20;
    const currentPage = Number(searchParams.get("currentPage")) || 1;
    const startIndex = (currentPage - 1) * limit;
    useEffect(() => {
        searchParams.set("currentPage", 1);
        setSearchParams(searchParams);
    }, [searchParams]);
    //페이지 당 보여줄 데이터 수
    // const [limit, setLimit] = useState(20);
    // useEffect(() => {
    //     searchParams.set("limit", 20);
    //     setSearchParams(searchParams);
    // }, [searchParams]);
    //현재 페이지
    // const [currentpage, setCurrentPage] = useState(1);
    //각페이지에서 보여줄 데이터의 시작 위치
    // const startIndex = (currentpage - 1) * limit;
    const handleLimitChange = (e) => {
        const newLimit = Number(e.target.value);
        setSearchParams({ limit: newLimit });
    };
    return (
        <MainWrapper>
            <select value={limit} onChange={handleLimitChange}>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            {users.slice(startIndex, startIndex + limit).map((user) => (
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
                total={users.length}
                limit={limit}
                currentPage={currentPage}
                // setCurrentPage={setCurrentPage}
            />
        </MainWrapper>
    );
};
export default UserPage;

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
    border: 2px solid #d7d7d7;
    display: flex;
    flex-direction: column;
`;
const UserInfo = styled.p`
    font-size: 15px;
    line-height: 0px;
`;
