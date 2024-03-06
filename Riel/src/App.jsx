import { useState } from "react";
import "./App.css";
import { userListData } from "./libs/user/user";
import { styled } from "styled-components";

function App() {
    const [users] = useState(userListData);
    const [userPerPage] = useState(20);
    const [currentPage] = useState(1);
    const indexOfLastUser = userPerPage * currentPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUserList = userListData.slice(
        indexOfFirstUser,
        indexOfLastUser
    );
    const totalPages = Math.ceil(users.length / userPerPage);
    console.log(totalPages);
    console.log(currentUserList);
    const phoneNumber = (number) => {
        const cleanNum = number.replace(/-/g, "");
        const lastNum = cleanNum.slice(-4);
        return `010-****-${lastNum}`;
    };
    function leftIdPad(value) {
        if (value < 100) {
            if (value < 10) {
                return `00${value}`;
            }
            return `0${value}`;
        }
        return value;
    }
    const birthDate = (date) => {
        const newDate = new Date(date).toISOString();
        return newDate.split("T")[0];
    };
    const lastLoginDate = (date) => {
        const newDate = new Date(date).toISOString();
        const datePart = newDate.split("T")[0].replace(/-/g, ".");
        const timePart = newDate.slice(0, -2).split("T")[1].replace(".", ":");
        return datePart + "." + timePart;
    };

    return (
        <div>
            <S.TitleWrapper>
                <h2>id</h2>
                <h2>이름</h2>
                <h2>생일</h2>
                <h2>번호</h2>
                <h2>지난 로그인</h2>
            </S.TitleWrapper>

            {currentUserList.map((data, index) => (
                <S.userInfoWrapper key={index}>
                    <div>{leftIdPad(data.id)}</div>|<div>{data.name}</div>|
                    <div>{birthDate(data.birthDay)}</div>|
                    <div>{phoneNumber(data.phone)}</div>|
                    <div>{lastLoginDate(data.lastLogin)}</div>
                </S.userInfoWrapper>
            ))}
            <S.pageButtonWrapper>
                <div></div>
                <div></div>
                {totalPages.map((page, index) => (
                    <div key={index}>{page}</div>
                ))}
                <div></div>
                <div></div>
            </S.pageButtonWrapper>
        </div>
    );
}

export default App;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const userInfoWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;
const pageButtonWrapper = styled.div`
    display: flex;
`;

const S = { TitleWrapper, userInfoWrapper, pageButtonWrapper };
