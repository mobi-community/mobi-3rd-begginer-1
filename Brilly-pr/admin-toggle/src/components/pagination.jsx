import React from "react";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";

const Pagination = ({
  TotalPage,
  goToPrevUnitPage,
  goToPrevPage,
  goToNextPage,
  goToNextUnitPage,
  goToPage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const renderPageButtons = () => {
    const pages = [];
    const currentPage = parseInt(searchParams.get("page")) || 1;
    const startPage = Math.max(Math.min(currentPage - 1, TotalPage - 4), 1);
    const endPage = Math.min(startPage + 4, TotalPage);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageButton
          key={i}
          onClick={() => goToPage(i)}
          active={i === currentPage}
        >
          {i}
        </PageButton>
      );
    }

    return pages;
  };
  return (
    <S.PaginationWrapper>
      <S.PageButton onClick={goToPrevUnitPage}>{"<<"}</S.PageButton>
      <S.PageButton onClick={goToPrevPage}>{"<"}</S.PageButton>
      {renderPageButtons()}
      <S.PageButton onClick={goToNextPage}>{">"}</S.PageButton>
      <S.PageButton onClick={goToNextUnitPage}>{">>"}</S.PageButton>
    </S.PaginationWrapper>
  );
};
export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "#ddd" : "transparent")};
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const S = {
  PaginationWrapper,
  PageButton,
};
