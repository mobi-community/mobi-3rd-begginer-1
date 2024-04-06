import styled from "styled-components"

import { useRef, useState } from "react"
import DropDownTrigger from "./dropdownTrigger"
import DropdownItems from "./dropdownItems"

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("select")
  const boxRef = useRef(null)
  const onClickTrigger = () => {
    setIsOpen((prev) => !prev)
  }
  const onClickItems = (item) => {
    setSelectedOption(item)
    setIsOpen(false)
  }
  return (
    <S.DropDownWrapper
      onBlur={(e) => {
        setIsOpen(false)
      }}
      ref={boxRef}
    >
      <DropDownTrigger
        isOpen={isOpen}
        clickCallback={onClickTrigger}
        selectedOption={selectedOption}
      />
      {isOpen && <DropdownItems items={items} clickCallback={onClickItems} />}
    </S.DropDownWrapper>
  )
}
export default Dropdown

const DropDownWrapper = styled.div`
  cursor: pointer;
  width: 15rem;
  position: relative;
`

const S = {
  DropDownWrapper,
}
