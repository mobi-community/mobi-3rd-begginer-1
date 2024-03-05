import React from "react";
import { users } from "../libs/faker/fakeData";
import { styled } from "styled-components";

// 테이블 리스트 컴포넌트
const TableList = () => {
  const parsePhone = (phoneNumber) => {
    const parseNumber = phoneNumber.substring(4, 8).replace(/\d/g, "*");
    return `010-${parseNumber}-${phoneNumber.substring(9)}`;
  };

  return (
    <S.Table>
      {/* 테이블 헤더 */}
      <S.THead>
        <S.TableRow>
          <S.TableHeader>ID</S.TableHeader>
          <S.TableHeader>Name</S.TableHeader>
          <S.TableHeader>Birth</S.TableHeader>
          <S.TableHeader>Phone</S.TableHeader>
          <S.TableHeader>Last Login</S.TableHeader>
        </S.TableRow>
      </S.THead>
      {/* 테이블 바디 */}
      <S.TBody>
        {users.map((user) => (
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
  );
};

export default TableList;

const Table = styled.table`
  border-collapse: collapse;
  padding: 8px;
  width: 100%;
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
  Table,
  THead,
  TableRow,
  TableHeader,
  TBody,
  TableCell,
};
