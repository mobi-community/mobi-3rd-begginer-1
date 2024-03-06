import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

/**
 * @component
 * @parameter userPerPage: number - 현재 페이지의 번호를 받아옵니다
 * @parameter userData: Array<Object> - 전체 유저의 데이터를 받아옵니다
 * @parameter sort: string - 현재 정렬의 값을 받아옵니다
 * @returns {JSX.Element}
 *
 * @description pagination을 하게해주는 페이지입니다
 */
const Pagination = ({ userPerPage, userData, sort }) => {
    const navigate = useNavigate();
    const { pageNumber } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState(1);
    const perPageGroup = 5;

    useEffect(() => {
        if (pageNumber <= perPageGroup) {
            setCurrentPage(1);
        }
        if (pageNumber > perPageGroup) {
            setCurrentPage(2);
        }
    }, [pageNumber]);

    // userData.length를 userPerPage로 나누어서 올림
    const pageCount = Math.ceil(userData.length / userPerPage);

    // pageCount를 perPageGroup로 나눔
    const totalPageGroup = Math.ceil(pageCount / perPageGroup);

    // 받아온 값으로 새로운 주소로 이동
    const paginate = (page) => {
        navigate(`/user/${page}?per_page=${userPerPage}&sort=${sort}`);
    };

    const pageNumbers = () => {
        const startPage = (currentPage - 1) * perPageGroup + 1;
        const endPage = Math.min(startPage + perPageGroup - 1, pageCount);

        return Array.from({ length: endPage - startPage + 1 }, (_, index) => (
            <Li key={index}>
                <Button
                    onClick={() => {
                        paginate(index + startPage);
                        setPage(index + startPage);
                    }}
                >
                    {index + startPage}
                </Button>
            </Li>
        ));
    };

    const prevPage = () => {
        if (pageNumber > 1) {
            const newPage = pageNumber - 1;
            paginate(newPage);
            setPage(newPage);
        }
    };

    const prevGroup = () => {
        paginate(1);
        setCurrentPage(1);
        setPage(1);
    };

    const nextPage = () => {
        if (pageNumber < pageCount) {
            const newPage = page + 1;
            paginate(newPage);
            setPage(newPage);
        }
    };

    const nextGroup = () => {
        setCurrentPage(totalPageGroup);
    };

    return (
        <PageNumber>
            <Ul>
                <Li>
                    <Button onClick={prevGroup}>&lt;&lt;</Button>
                </Li>
                <Li>
                    <Button onClick={prevPage}>&lt;</Button>
                </Li>
                {pageNumbers()}
                <Li>
                    <Button onClick={nextPage}>&gt;</Button>
                </Li>
                <Li>
                    <Button onClick={nextGroup}>&gt;&gt;</Button>
                </Li>
            </Ul>
        </PageNumber>
    );
};
export default Pagination;

const PageNumber = styled.div`
    display: flex;
    justify-content: center;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
`;

const Li = styled.li`
    padding: 0 4px;
`;

const Button = styled.button`
    cursor: pointer;
`;
