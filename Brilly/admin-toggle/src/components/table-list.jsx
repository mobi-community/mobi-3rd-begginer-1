/* 
**필터링 옵션 만들기**

- 20개씩 보기, 50개씩 보기
- 이름 순, 마지막 로그인 순, 생년월일 순으로 정렬하기
- 오름차순 내림차순 정렬하기
*/

import React, { useState } from "react";

import { users as usersData } from "../libs/faker/fakek-user-data";
import { styled } from "styled-components";
import Pagination from "./pagination";

// 테이블 리스트 컴포넌트
const TableList = () => {
	const [users, setUsers] = useState([...usersData]);
	const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
	const [perPage, setPerPage] = useState(20); // 페이지당 갯수
	const TotalPage = Math.ceil(users.length / perPage); // 전체 페이지

	const parsePhone = (phoneNumber) => {
		const parseNumber = phoneNumber.substring(4, 8).replace(/\d/g, "*");
		return `010-${parseNumber}-${phoneNumber.substring(9)}`;
	};

	const getUsersForPage = (page) => {
		const startIndex = (page - 1) * perPage;
		const endIndex = startIndex + perPage;
		return users.slice(startIndex, endIndex);
	};

	// 이전 페이지로 이동하는 함수
	const goToPrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	// 이전 5개 페이지로 이동하는 함수
	const goToPrevUnitPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 5, 1));
	};

	// 다음 페이지로 이동하는 함수
	const goToNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, TotalPage));
	};
	// 다음 5개 페이지로 이동하는 함수
	const goToNextUnitPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 5, TotalPage));
	};
	// 특정 페이지로 이동하는 함수
	const goToPage = (page) => {
		setCurrentPage(page);
	};

	const sortByFormattedBirth = (a, b) => {
		const dateA = new Date(a.formattedBirth);
		const dateB = new Date(b.formattedBirth);
		return dateA - dateB;
	};
	const sort = () => {
		const sortedUsers = [...users].sort(sortByFormattedBirth);
		setUsers(sortedUsers);
	};

	return (
		<S.Wrapper>
			<S.Table>
				{/* 테이블 헤더 */}
				<S.THead>
					<S.TableRow>
						<S.TableHeader>ID</S.TableHeader>
						<S.TableHeader onClick={() => {}}>Name</S.TableHeader>
						<S.TableHeader onClick={sort}>Birth</S.TableHeader>
						<S.TableHeader>Phone</S.TableHeader>
						<S.TableHeader onClick={() => {}}>
							Last Login
						</S.TableHeader>
					</S.TableRow>
				</S.THead>
				{/* 테이블 바디 */}
				<S.TBody>
					{getUsersForPage(currentPage).map((user) => (
						<S.TableRow key={user.id}>
							<S.TableCell>{user.id}</S.TableCell>
							<S.TableCell>{user.fullName}</S.TableCell>
							<S.TableCell>{user.formattedBirth}</S.TableCell>
							<S.TableCell>{parsePhone(user.phone)}</S.TableCell>
							<S.TableCell>{user.formattedLastLogin}</S.TableCell>
						</S.TableRow>
					))}
				</S.TBody>
			</S.Table>
			<Pagination
				currentPage={currentPage}
				TotalPage={TotalPage}
				goToPrevUnitPage={goToPrevUnitPage}
				goToPrevPage={goToPrevPage}
				goToNextPage={goToNextPage}
				goToNextUnitPage={goToNextUnitPage}
				goToPage={goToPage}
			/>
		</S.Wrapper>
	);
};

export default TableList;

const Wrapper = styled.div`
	display: block;
	margin-left: 10%;
`;
const Table = styled.table`
	border-collapse: collapse;
	padding: 8px;
	width: 80%;
	text-align: center;
`;
const THead = styled.thead`
	background-color: #ddd;
`;
const TableRow = styled.tr``;
const TableHeader = styled.th`
	border: 1px solid #eee;
	padding: 8px;
`;
const TBody = styled.tbody``;

const TableCell = styled.td`
	border: 1px solid #ddd;
	padding: 8px;
`;
const S = {
	Wrapper,
	Table,
	THead,
	TableRow,
	TableHeader,
	TBody,
	TableCell,
};
