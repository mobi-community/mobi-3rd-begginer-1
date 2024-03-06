import React, { useState } from "react";
import { users } from "../libs/faker/fakek-user-data";
import { styled } from "styled-components";

const Pagination = ({
	currentPage,
	TotalPage,
	goToPrevUnitPage,
	goToPrevPage,
	goToNextPage,
	goToNextUnitPage,
	goToPage,
}) => {
	const renderPageButtons = () => {
		const pages = [];
		const startPage = Math.max(currentPage - 1, 1);
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
