import styled from "styled-components"

import {
  COLOR,
  FONT_SIZE,
} from "../../../libs/styledComponents/referenceTokens"

const DropdownItems = ({ clickCallback, items }) => {
  return (
    <S.DropDownItemsWrapper>
      {items.map((item, idx) => (
        <S.DropDownItems
          key={idx}
          onMouseDown={() => {
            clickCallback(item)
          }}
        >
          {item}
        </S.DropDownItems>
      ))}
    </S.DropDownItemsWrapper>
  )
}

export default DropdownItems

const DropDownItemsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: absolute;
`

const DropDownItems = styled.div`
  width: 100%;
  border: 5px solid ${COLOR.THEME.SUB[200]};
  border-radius: 3rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  z-index: 1000;
  color: ${COLOR.COMMON[1000]};
  font-size: ${FONT_SIZE.bg};
  background-color: ${COLOR.THEME.SUB[600]};
`
const S = { DropDownItemsWrapper, DropDownItems }
