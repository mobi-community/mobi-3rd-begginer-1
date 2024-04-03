import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./button";

function Pagination({ total, limit, currentPage, curParams, setCurParams }) {
    const numPages = Math.ceil(total / limit);
    const [searchParams, setSearchParams] = useSearchParams();
    const pageGroup = 5;
    const pageParam = searchParams.get("currentPage");
    // + 일 때와, - 일 때
    const handlePageChange = (page) => {
        searchParams.set("currentPage", page);
        setSearchParams(searchParams);
    };

    //페이지 그룹 시작 : 1,6,11~
    const startPageGroup =
        Math.floor((pageParam - 1) / pageGroup) * pageGroup + 1;

    //페이지 그룹 마지막 번호 :
    const endPageGroup = Math.min(startPageGroup + pageGroup - 1, numPages);

    return (
        <ButtonWrapper>
            <Button
                color="lemon"
                size="mini"
                text="&lt;&lt;"
                onClick={() => handlePageChange(startPageGroup - pageGroup)}
                disabled={startPageGroup === 1}
            />
            <Button
                color="peach"
                size="mini"
                text="&lt;"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={startPageGroup === 1}
            />
            {Array(endPageGroup - startPageGroup + 1)
                .fill()
                .map((_, i) => {
                    const pageNumber = startPageGroup + i;
                    return (
                        <Button
                            color="peach"
                            size="mini"
                            text={pageNumber.toString()}
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                        />
                    );
                })}
            <Button
                color="peach"
                size="mini"
                text=" &gt;"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === numPages}
            />
            <Button
                color="lemon"
                size="mini"
                text="&gt;&gt;"
                onClick={() => handlePageChange(endPageGroup + 1)}
                disabled={endPageGroup === numPages}
            />
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
