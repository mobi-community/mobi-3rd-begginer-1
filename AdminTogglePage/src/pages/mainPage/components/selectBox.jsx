import styled from "styled-components"
import Dropdown from "./dropdown"

const SelectBox = () => {
  return (
    <S.DrowDownContainer>
      <Dropdown items={["meun1", "meun2", "meun3"]} />
      <Dropdown items={["meun1", "meun2", "meun3"]} />
      <Dropdown items={["meun1", "meun2", "meun3"]} />
    </S.DrowDownContainer>
  )
}
export default SelectBox

const DrowDownContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const S = { DrowDownContainer }
