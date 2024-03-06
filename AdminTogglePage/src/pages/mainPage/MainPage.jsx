import styled from "styled-components"
import { creatRandomUserData } from "../../utils/creatRandomUserData"
import { UserTable } from "./components"

const MainPage = () => {
  const mockData = creatRandomUserData(100)
  return (
    <S.CenterWrapper>
      <UserTable userData={mockData} />
    </S.CenterWrapper>
  )
}
export default MainPage

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const S = {
  CenterWrapper,
}
