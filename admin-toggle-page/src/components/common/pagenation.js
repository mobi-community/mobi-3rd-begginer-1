import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./button";

function Pagination({ total, limit, currentPage, curParams, setCurParams }) {
    const numPages = Math.ceil(total / limit);
    const [searchParams, setSearchParams] = useSearchParams();
    const pageGroup = 5;
    // + 일 때와, - 일 때
    const handlePageChange = (page) => {
        searchParams.set("currentPage", page);
        setSearchParams(searchParams);
    };
    return (
        <ButtonWrapper>
            <Button color="lemon" size="mini" text="&lt;&lt;" />
            <Button
                color="peach"
                size="mini"
                text="&lt;"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
            {Array(numPages)
                .fill()
                .map((_, i) => (
                    <Button
                        color="peach"
                        size="mini"
                        text={i + 1}
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                    />
                ))}
            <Button
                color="peach"
                size="mini"
                text=" &gt;"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === numPages}
            />
            <Button color="lemon" size="mini" text="&gt;&gt;" />
        </ButtonWrapper>
    );
}
const ButtonWrapper = styled.div`
    gap: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Pagination;
