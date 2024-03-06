import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { CreateUserData } from "../utils/user-data";
import { styled } from "styled-components";
import Pagination from "../components/user-page/pagination";

const UserPage = () => {
    const [userData, setUserData] = useState([]);
    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    // sort button을 보여주기위한 배열
    const sortBtnArr = [
        { name: "이름순", key: "name" },
        { name: "생년월일순", key: "birthday" },
        { name: "전화번호순", key: "phone_number" },
        { name: "마지막 로그인순", key: "last_login" },
    ];

    const queryParam = new URLSearchParams(location.search);

    useEffect(() => {
        // 마운트 시 랜덤한 user data 200개를 새로 만듦
        setUserData(CreateUserData({ userDataNum: 200 }));

        searchParams.set("page", 1);

        setSearchParams(searchParams);
    }, []);

    useEffect(() => {
        const params = queryParam;
        // perPage의 초기값 설정
        const perPage = Number(params.get("per_page") || 20);

        searchParams.set("per_page", perPage);
        setSearchParams(searchParams);
        // setUserPerPage(perPage);

        // key값 name, birthday...등을 받아와서 정렬해주는 함수
        const sortKeyChange = (key) => {
            const sortKey = [...userData].sort((a, b) => {
                return a[key]?.localeCompare(b[key]);
            });
            // 정렬된 값 userData에 새로 저장
            setUserData(sortKey);
        };

        // 주소의 sort를 가져와서 저장
        const sortKey = params.get("sort");
        // 만약 sortKey, userData의 길이가 0보다 클 때
        if (sortKey && userData.length > 0) {
            // 함수 정렬해주는 함수에 sortKey 전달
            sortKeyChange(sortKey);
        }
        // 주소가 변경될 때마다 마운트
    }, [location.search]);

    // event의 target.value값을 params의 key, value로 전달
    const handlePerPageChange = (e) => {
        const newPerPage = e.target.value;
        searchParams.set("per_page", newPerPage);
        setSearchParams(searchParams);
    };

    // click시 받은 key를 params에 key, value로 전달
    // page 변경 시 주소에 보여주도록 상태로 전달
    const onClickSortKey = (key) => {
        searchParams.set("sort", key);
        setSearchParams(searchParams);
    };

    return (
        <>
            <SelectPerPageBox>
                <SelectPerPage
                    // value={userPerPage}
                    onChange={handlePerPageChange}
                >
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </SelectPerPage>
                {/* 중복되는 button을 배열을 받아와 map으로 보여줌 */}
                {sortBtnArr.map((button, index) => (
                    <SortButton
                        key={index}
                        onClick={() => onClickSortKey(button.key)}
                        disabled={searchParams.get("sort") === button.key}
                        isActive={searchParams.get("sort") === button.key}
                    >
                        {button.name}
                    </SortButton>
                ))}
            </SelectPerPageBox>
            <Wrapper>
                <Pagination
                    curPage={searchParams}
                    setCurpage={setSearchParams}
                    userPerPage={searchParams.get("per_page")}
                    userData={userData}
                />
            </Wrapper>
        </>
    );
};
export default UserPage;

const SelectPerPageBox = styled.div`
    display: flex;
    justify-content: center;
`;

const SelectPerPage = styled.select`
    width: 50px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SortButton = styled.button`
    background-color: ${(props) => (props.isActive ? "#ccc" : "#fff")};
    color: ${(props) => (props.isActive ? "#fff" : "#000")};
    border: 1px solid ${(props) => (props.isActive ? "#ccc" : "#000")};
    cursor: ${(props) => (props.isActive ? "default" : "pointer")};

    &:disabled {
        opacity: 0.5;
    }
`;
