import styled from "styled-components"
import { COLOR } from "../../../libs/styledComponents/referenceTokens/color"
import { FONT_SIZE } from "../../../libs/styledComponents/referenceTokens/fontSize"

const UserTable = ({ userData }) => {
  return (
    <S.MainContainer>
      {userData.map((user) => (
        <S.TableWrapper key={user.id}>
          <S.IndexCell>{user.id + 1}</S.IndexCell>
          <S.InfoWrapper>
            <S.UserName>NAME : {user.name}</S.UserName>
            <S.UserBirth>BIRTH : {user.birth}</S.UserBirth>
            <S.UserPhone>MOBILE : {user.phone}</S.UserPhone>
            <S.UserLastLoginRecord>
              LASTLOGIN : {user.loginRecords}
            </S.UserLastLoginRecord>
          </S.InfoWrapper>
        </S.TableWrapper>
      ))}
    </S.MainContainer>
  )
}
export default UserTable
const MainContainer = styled.div`
  width: 140rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`
const TableWrapper = styled.div`
  display: flex;
  padding: 1rem;
`
const InfoWrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.THEME.MAIN[800]};
`
const IndexCell = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.THEME.MAIN[100]};
  width: 3rem;
  height: 15rem;
`
const UserName = styled.div`
  padding-right: 10px;
`
const UserBirth = styled.div`
  padding-right: 10px;
`
const UserPhone = styled.div`
  padding-right: 10px;
`
const UserLastLoginRecord = styled.div`
  padding-right: 10px;
`
const S = {
  MainContainer,
  TableWrapper,
  InfoWrapper,
  IndexCell,
  UserName,
  UserBirth,
  UserPhone,
  UserLastLoginRecord,
}
