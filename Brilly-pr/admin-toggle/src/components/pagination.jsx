import React from "react";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ TotalPage, currentPage, setCurrentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 특정 페이지로 이동하는 함수
  const goToPage = (page) => {
    setCurrentPage(page);
    setSearchParams({ ...searchParams, page: page });
  };

  // 이전 페이지로 이동하는 함수
  const goToPrevPage = () => {
    goToPage(Math.max(currentPage - 1, 1));
  };

  // 이전 5개 페이지로 이동하는 함수
  const goToPrevUnitPage = () => {
    goToPage(Math.max(currentPage - 5, 1));
  };

  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    goToPage(Math.min(currentPage + 1, TotalPage));
  };

  // 다음 5개 페이지로 이동하는 함수
  const goToNextUnitPage = () => {
    goToPage(Math.min(currentPage + 5, TotalPage));
  };

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
