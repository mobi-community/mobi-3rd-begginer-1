import { useEffect, useState } from "react";
import "./App.css";
import { userListData } from "./libs/user/user";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

function App() {
    const { page, userPerPageLength } = useParams();
    const navigate = useNavigate();

    const [users] = useState(userListData);
    const [userPerPage, setUserPerPage] = useState(
        userPerPageLength ? parseInt(userPerPageLength, 10) : 20
    );
    const [currentPage, setCurrentPage] = useState(
        page ? parseInt(page, 10) : 1
    );
    useEffect(() => {
        navigate(`/users/${currentPage}/${userPerPage}`);
    }, [currentPage, userPerPage, navigate]);
    const indexOfLastUser = userPerPage * currentPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUserList = userListData.slice(
        indexOfFirstUser,
        indexOfLastUser
    );

    const totalPages = Math.ceil(users.length / userPerPage);

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

    const PageNationBtnList = [];

    let firstPageBtn;

    let lastPageBtn;

    if (currentPage >= totalPages - 1) {
        firstPageBtn = Math.max(1, totalPages - 4);
    } else {
        firstPageBtn = Math.max(1, currentPage - 2);
    }

    if (currentPage <= 2) {
        lastPageBtn = Math.min(5, totalPages);
    } else {
        lastPageBtn = Math.min(currentPage + 2, totalPages);
    }

    for (let i = firstPageBtn; i <= lastPageBtn; i++) {
        PageNationBtnList.push(i);
    }

    const changePage = (page) => () => {
        setCurrentPage(page);
    };

    function isPrevBtnDisabled(currentPage) {
        return currentPage <= 1;
    }

    function isNextBtnDisabled(currentPage) {
        return currentPage >= totalPages;
    }

    const handleSelectChange = (e) => {
        setUserPerPage(parseInt(e.target.value, 10));
        setCurrentPage(1); // 페이지 수 변경 시 첫 페이지로 리셋
        history.push(`/users/1/${e.target.value}`);
    };

    /*빈배열을 넣고  내가 원하는 건 배열안에 최대 5개 만들어갈수있게 하기 (5개 이하면 나오질 안겠지 애초에)
     * 첫번째 페이지는 max = currenPage-2 min = currentPage
     * 마지막 페이지도 max = currentPage min = currentPage+2
     *
     */

    return (
        <div>
            <div>
                <select value={userPerPage} onChange={handleSelectChange}>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
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
                <button
                    onClick={changePage(1)}
                    disabled={isPrevBtnDisabled(currentPage)}
                >
                    PrevPrev
                </button>

                <button
                    onClick={changePage(currentPage - 1)}
                    disabled={isPrevBtnDisabled(currentPage)}
                >
                    Prev
                </button>

                {PageNationBtnList.map((page, index) => (
                    <S.btnList
                        key={index}
                        onClick={changePage(page)}
                        isSelected={page === currentPage}
                    >
                        {page}
                    </S.btnList>
                ))}

                <button
                    onClick={changePage(currentPage + 1)}
                    disabled={isNextBtnDisabled(currentPage)}
                >
                    Next
                </button>
                <button
                    onClick={changePage(totalPages)}
                    disabled={isNextBtnDisabled(currentPage)}
                >
                    NextNext
                </button>
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
    justify-content: center;
`;
const btnList = styled.button`
    color: ${(props) => (props.isSelected ? "blue" : "black")};
    border-style: none;
`;

const S = { TitleWrapper, userInfoWrapper, pageButtonWrapper, btnList };
