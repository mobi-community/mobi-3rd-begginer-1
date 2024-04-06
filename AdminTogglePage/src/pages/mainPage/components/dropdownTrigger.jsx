import styled from "styled-components"
import { COLOR } from "../../../libs/styledComponents/referenceTokens"

const DropDownTrigger = ({ isOpen, selectedOption, clickCallback }) => {
  const Arrow = isOpen ? "⬆️" : "⬇️"
  return (
    <S.DropDownTriggerWrapper onClick={() => clickCallback()}>
      <S.Title>{selectedOption}</S.Title>
      <div> {Arrow}</div>
    </S.DropDownTriggerWrapper>
  )
}

export default DropDownTrigger
const DropDownTriggerWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 5px solid ${COLOR.THEME.SUB[200]};
  border-radius: 3rem;
  padding: 1rem;
`
const Title = styled.h4`
  padding-left: 2rem;
  max-width: 80%;
  overflow: hidden;
`
const S = { DropDownTriggerWrapper, Title }
