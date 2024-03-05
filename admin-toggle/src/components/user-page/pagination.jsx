import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Pagination = ({ userPerPage, userData }) => {
    const navigate = useNavigate();

    const paginate = (page) => {
        navigate(`/user/${page}?per_page=${userPerPage}`);
    };

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
