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
import { useSearchParams } from "react-router-dom";

// 테이블 리스트 컴포넌트
const TableList = () => {
  const [users, setUsers] = useState([...usersData]);
  const [searchParams, setSearchParams] = useSearchParams();
  const viewCount = [20, 50]; // 옵션 : 페이지당 갯수
  const [perPage, setPerPage] = useState(
    parseInt(searchParams.get("perPage")) || 20
  ); // 페이지당 갯수
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  ); // 현재 페이지
  const TotalPage = Math.ceil(users.length / perPage); // 전체 페이지
  const [sortDirection, setSortDirection] = useState("asc"); // 정렬 방향

  // phoneNumber 가운데 4자리  *로 파싱
  const parsePhone = (phoneNumber) => {
    const parseNumber = phoneNumber.substring(4, 8).replace(/\d/g, "*");
    return `010-${parseNumber}-${phoneNumber.substring(9)}`;
  };

  // perPage 갯수에 따라 페이지네이션에 보여질 페이지의 처음과 끝 index
  const getUsersForPage = (page) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return users.slice(startIndex, endIndex);
  };

  // selectOption으로 perPage 갯수 설정
  const handleSelected = (e) => {
    const perPageValue = parseInt(e.target.value);
    setPerPage(perPageValue);
    setSearchParams({ perPage: perPageValue, page: 1 });
    setCurrentPage(1);
  };

  // 이전 페이지로 이동하는 함수
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setSearchParams({ ...searchParams, page: currentPage });
  };

  // 이전 5개 페이지로 이동하는 함수
  const goToPrevUnitPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 5, 1));
    setSearchParams({ ...searchParams, page: currentPage - 5 });
  };

  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, TotalPage));
    setSearchParams({ ...searchParams, page: currentPage });
  };
  // 다음 5개 페이지로 이동하는 함수
  const goToNextUnitPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 5, TotalPage));
    setSearchParams({ ...searchParams, page: currentPage + 5 });
  };
  // 특정 페이지로 이동하는 함수
  const goToPage = (page) => {
    setCurrentPage(page);
    setSearchParams({ ...searchParams, page: page });
  };

  // userTable 정렬 방법
  const toggleSortDirection = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc"
    );
  };

  const sortByName = (a, b) => {
    if (sortDirection === "asc") {
      return a.fullName.localeCompare(b.fullName);
    } else {
      return b.fullName.localeCompare(a.fullName);
    }
  };

  const handleSortByName = () => {
    const sortedUsers = [...users].sort(sortByName);
    setUsers(sortedUsers);
    toggleSortDirection();
  };

  const sortByFormattedBirth = (a, b) => {
    const dateA = new Date(a.formattedBirth);
    const dateB = new Date(b.formattedBirth);
    if (sortDirection === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  };

  const handleSortByFormattedBirth = () => {
    const sortedUsers = [...users].sort(sortByFormattedBirth);
    setUsers(sortedUsers);
    toggleSortDirection();
  };

  const sortByFormattedLastLogin = (a, b) => {
    const dateA = new Date(a.formattedLastLogin);
    const dateB = new Date(b.formattedLastLogin);
    if (sortDirection === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  };

  const handleSortByFormattedLastLogin = () => {
    const sortedUsers = [...users].sort(sortByFormattedLastLogin);
    setUsers(sortedUsers);
    toggleSortDirection();
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
            <S.TableHeader onClick={handleSortByName}>Name</S.TableHeader>
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
