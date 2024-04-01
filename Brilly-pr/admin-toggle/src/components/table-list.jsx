import React, { useState } from "react";

import { users as usersData } from "../libs/faker/fakek-user-data";
import { styled } from "styled-components";
import Pagination from "./pagination";
import { useSearchParams } from "react-router-dom";
import { parsePhone } from "../utils/parse-phone";

// 테이블 리스트 컴포넌트
const TableList = () => {
	const [users, setUsers] = useState([...usersData]); // user정보
	const [searchParams, setSearchParams] = useSearchParams();
	const viewCount = [20, 50]; // 옵션 : 페이지당 갯수
	// 페이지당 갯수
	const [perPage, setPerPage] = useState(
		parseInt(searchParams.get("perPage")) || 20
	); // 페이지당 갯수
	const [currentPage, setCurrentPage] = useState(
		parseInt(searchParams.get("page")) || 1
	); // 현재 페이지
	const TotalPage = Math.ceil(users.length / perPage); // 전체 페이지
	const [sortDirection, setSortDirection] = useState("asc"); // 정렬 방향

	// perPage 갯수에 따라 페이지네이션에 보여질 페이지의 처음과 끝 index
	const getUsersForPage = (page) => {
		const startIndex = (page - 1) * perPage;
		const endIndex = startIndex + perPage;
		return users.slice(startIndex, endIndex);
	};

	// userTable 정렬 방법
	const toggleSortDirection = () => {
		setSortDirection((prevDirection) =>
			prevDirection === "asc" ? "desc" : "asc"
		);
	};

	// selectOption으로 perPage 갯수 설정
	const handleSelected = (e) => {
		const perPageValue = parseInt(e.target.value);
		setPerPage(perPageValue);
		setSearchParams({ perPage: perPageValue, page: 1 });
		setCurrentPage(1);
	};

	// key에 따라 문자열 기준으로 정렬
	const sortByKey = (key) => (a, b) => {
		if (sortDirection === "asc") {
			return a[key].localeCompare(b[key]);
		} else {
			return b[key].localeCompare(a[key]);
		}
	};

	// key에 따라 날짜 기준으로 정렬
	const sortByDate = (key) => (a, b) => {
		const dateA = new Date(a[key]);
		const dateB = new Date(b[key]);
		if (sortDirection === "asc") {
			return dateA - dateB;
		} else {
			return dateB - dateA;
		}
	};

	const handleSort = (sortBy) => {
		const sortedUsers = [...users].sort(sortBy);
		setUsers(sortedUsers);
		toggleSortDirection();
	};

	const handleSortByName = () => {
		handleSort(sortByKey("fullName"));
	};

	const handleSortByFormattedBirth = () => {
		handleSort(sortByDate("formattedBirth"));
	};

	const handleSortByFormattedLastLogin = () => {
		handleSort(sortByDate("formattedLastLogin"));
	};

	return (
		<S.Wrapper>
			<S.SelectOption onChange={handleSelected} value={perPage}>
				{viewCount.map((count) => (
					<S.Option value={count} key={count}>
						{count}
					</S.Option>
				))}
			</S.SelectOption>
			<S.Table>
				{/* 테이블 헤더 */}
				<S.THead>
					<S.TableRow>
						<S.TableHeader>ID</S.TableHeader>
						<S.TableHeader onClick={handleSortByName}>
							Name
						</S.TableHeader>
						<S.TableHeader onClick={handleSortByFormattedBirth}>
							Birth
						</S.TableHeader>
						<S.TableHeader>Phone</S.TableHeader>
						<S.TableHeader onClick={handleSortByFormattedLastLogin}>
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
				TotalPage={TotalPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</S.Wrapper>
	);
};

export default TableList;

const Wrapper = styled.div`
	display: block;
	margin-left: 20%;
`;

const SelectOption = styled.select``;

const Option = styled.option``;

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
	SelectOption,
	Option,
	Table,
	THead,
	TableRow,
	TableHeader,
	TBody,
	TableCell,
};
