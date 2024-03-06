import { useNavigate } from "react-router-dom";
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

    // 받아온 값으로 새로운 주소로 이동
    const paginate = (page) => {
        navigate(`/user/${page}?per_page=${userPerPage}&sort=${sort}`);
    };

    // userData.length를 userPerPage로 나누어서 올림
    const pageCount = Math.ceil(userData.length / userPerPage);

    return (
        <PageNumber>
            <Ul>
                {Array.from({ length: pageCount }, (_, index) => (
                    <Li key={index}>
                        <Button onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Button>
                    </Li>
                ))}
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
