import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./button";
import { useEffect, useRef } from "react";

function Pagination({ total, limit, currentPage, curParams, setCurParams }) {
    const numPages = Math.ceil(total / limit);
    const [searchParams, setSearchParams] = useSearchParams();
    const pageGroup = 5;
    const pageParam = searchParams.get("currentPage");
    const buttonRef = useRef([]);

    //페이지 그룹 시작 : 1,6,11~
    const startPageGroup =
        Math.floor((pageParam - 1) / pageGroup) * pageGroup + 1;

    //페이지 그룹 마지막 번호 :
    const endPageGroup = Math.min(startPageGroup + pageGroup - 1, numPages);

    // + 일 때와, - 일 때
    const handlePageChange = (page) => {
        searchParams.set("currentPage", page);
        setSearchParams(searchParams);

        if (page >= startPageGroup && page <= endPageGroup) {
            buttonRef.current[page - startPageGroup]?.focus();
        } else {
            if (page < startPageGroup) {
                buttonRef.current[0].focus(); // 첫 번째 페이지 번호 버튼
                // handlePageChange(startPageGroup);
            } else if (page > endPageGroup) {
                buttonRef.current[pageGroup - 1].focus(); // 마지막 페이지 번호 버튼
                // handlePageChange(endPageGroup);
            }
        }
    };

    useEffect(() => {
        if (buttonRef.current.length > 0) {
            const focusIndex =
                currentPage >= startPageGroup && currentPage <= endPageGroup
                    ? currentPage - startPageGroup
                    : null;
            if (focusIndex !== null) {
                buttonRef.current[focusIndex].focus();
            }
        }
    }, [currentPage, startPageGroup, endPageGroup]);

    return (
        <ButtonWrapper>
            <Button
                color="lemon"
                size="mini"
                text="&lt;&lt;"
                // onClick={() => handlePageChange(startPageGroup - pageGroup)}
                onClick={() => {
                    handlePageChange(startPageGroup - pageGroup);
                }}
                disabled={startPageGroup === 1}
            />
            <Button
                color="peach"
                size="mini"
                text="&lt;"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
            {Array(Math.max(endPageGroup - startPageGroup + 1, 0))
                .fill()
                .map((_, i) => {
                    const pageNumber = startPageGroup + i;
                    return (
                        <Button
                            ref={(el) => (buttonRef.current[i] = el)}
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
