import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateUserData } from "../utils/user-data";
import { styled } from "styled-components";
import UserList from "../components/user-page/user-list";
import Pagination from "../components/user-page/pagination";

const UserPagenation = () => {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setUserData(CreateUserData({ userDataNum: 200 }));
    }, [location]);

    const getUserPerPageUrl = () => {
        const queryParams = new URLSearchParams(location.search);
        return Number(queryParams.get("per_page")) || 20;
    };

    const [userPerPage, setUserPerPage] = useState(getUserPerPageUrl());

    useEffect(() => {
        setUserPerPage(getUserPerPageUrl());
    }, [location.search]);

    const handlePerPageChange = (e) => {
        const newPerPage = e.target.value;
        setUserPerPage(newPerPage);
        navigate(`/user/1?per_page=${newPerPage}`);
    };

    const onClickSortName = () => {
        const nameSort = [...userData].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        setUserData(nameSort);
    };

    return (
        <>
            <SelectPerPageBox>
                <SelectPerPage
                    value={userPerPage}
                    onChange={handlePerPageChange}
                >
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </SelectPerPage>
                <button onClick={onClickSortName}>이름순</button>
            </SelectPerPageBox>
            <Wrapper>
                <UserList userPerPage={userPerPage} userData={userData} />
                <Pagination userPerPage={userPerPage} userData={userData} />
            </Wrapper>
        </>
    );
};
export default UserPagenation;

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
