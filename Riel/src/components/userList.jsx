import { UseHandleUrl } from '../../hooks/useHandleUrl';
import { birthDate, lastLoginDate, leftIdPad, phoneNumber } from '../utils/userData';
import { styled } from 'styled-components';

// sortField, sortOrder ,
function UserList({ userData }) {
  const { getUrlValue } = UseHandleUrl();

  const currentPage = +getUrlValue('page');
  const perPage = +getUrlValue('perPage');
  const indexOfLastUser = perPage * currentPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUserList = userData.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div>
      <S.TitleWrapper>
        <h2>id</h2>
        <h2>이름</h2>
        <h2>생일</h2>
        <h2>번호</h2>
        <h2>지난 로그인</h2>
      </S.TitleWrapper>
      {currentUserList.map((data, index) => (
        <S.userInfoWrapper key={index}>
          <div>{leftIdPad(data.id)}</div>|<div>{data.name}</div>|<div>{birthDate(data.birthDay)}</div>|
          <div>{phoneNumber(data.phone)}</div>|<div>{lastLoginDate(data.lastLogin)}</div>
        </S.userInfoWrapper>
      ))}
    </div>
  );
}

export default UserList;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const userInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const S = { TitleWrapper, userInfoWrapper };
