import styled, { keyframes } from "styled-components"
import {
  COLOR,
  FONT_SIZE,
} from "../../../libs/styledComponents/referenceTokens"
import { useRef, useState } from "react"

const Dropdown = ({ items, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("select")
  const boxRef = useRef(null)
  const Arrow = isOpen ? "⬆️" : "⬇️"
  return (
    <S.DropDownWrapper
      onBlur={(e) => {
        if (boxRef.current.contains(e.target)) {
          setTimeout(() => {
            setIsOpen(false)
          }, 1000)
        }
      }}
      ref={boxRef}
      {...rest}
    >
      <S.DropDownTrigger onClick={() => setIsOpen((prev) => !prev)}>
        <S.Title>{selectedOption}</S.Title>
        <div> {Arrow}</div>
      </S.DropDownTrigger>
      {isOpen && (
        <S.DropDownItemsWrapper>
          {items.map((item, idx) => (
            <S.DropDownItems
              isOpen={isOpen}
              key={idx}
              onMouseDown={() => {
                setSelectedOption(item)
                setIsOpen(false)
              }}
            >
              {item}
            </S.DropDownItems>
          ))}
        </S.DropDownItemsWrapper>
      )}
    </S.DropDownWrapper>
  )
}
export default Dropdown

const rotateOpen = keyframes`
0% {
  opacity: 0;
  transform: translateY(-10%);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`

const rotateClose = keyframes`
0% {
  opacity: 1;
  transform: translateY(0);
}
100% {
  opacity: 0;
  transform: translateY(-10%);
}
`

const DropDownWrapper = styled.div`
  cursor: pointer;
  width: 15rem;
  position: relative;
`

const DropDownTrigger = styled.button`
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
const DropDownItemsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: absolute;
`

const DropDownItems = styled(DropDownTrigger)`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ isOpen }) => (isOpen ? rotateOpen : rotateClose)} 0.5s linear;
  height: fit-content;
  z-index: 1000;
  color: ${COLOR.COMMON[1000]};
  font-size: ${FONT_SIZE.bg};
  background-color: ${COLOR.THEME.SUB[600]};
`
const S = {
  DropDownWrapper,
  DropDownTrigger,
  Title,
  DropDownItemsWrapper,
  DropDownItems,
}
