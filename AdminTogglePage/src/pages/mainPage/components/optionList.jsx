import { useState } from "react"
import styled from "styled-components"
import { URL_KEY } from "../../../const"

const OptionList = ({ urlParams, setUrlParams }) => {
  // const options = {
  //   option1: [
  //     { key: "0", value: "20", text: "개씩" },
  //     { key: "1", value: "50", text: "개씩" },
  //   ],
  //   option2: [
  //     { key: "0", value: "name", text: "이름순" },
  //     { key: "1", value: "lastLogin", text: "마지막로그인순" },
  //     { key: "2", value: "birth", text: "생년월일순" },
  //   ],
  //   option3: [
  //     { key: "0", value: "ascend", text: "오름차순" },
  //     { key: "1", value: "descend", text: "내림차순" },
  //   ],
  // }
  const [selectedTextArr, setSelectedTextArr] = useState(() => [
    "20",
    "unselected",
    "unselected",
  ])
  const queryParams = new URLSearchParams(window.location.search)
  const URL_PAGE = queryParams.get(URL_KEY.PER_PAGE)
  const URL_SORT_TYPE_1 = queryParams.get(URL_KEY.SORT_TYPE_1)
  const URL_SORT_TYPE_2 = queryParams.get(URL_KEY.SORT_TYPE_2)

  const onChangeSeletBox = (e, id, urlKey) => {
    const changeOption = e.target.value
    urlParams.set(urlKey, changeOption)
    setUrlParams(urlParams)
    setSelectedTextArr((prev) => {
      const newArr = [...prev]
      newArr[id] = changeOption
      return newArr
    })
  }
  return (
    <S.SelectionWrapper>
      <S.SelectBox onChange={(e) => onChangeSeletBox(e, 0, URL_KEY.PER_PAGE)}>
        <optgroup label={`option : ${selectedTextArr[0]}`}>
          <S.Option key="0" value={20}>
            20개씩
          </S.Option>
          <S.Option key="1" value={50}>
            50개씩
          </S.Option>
        </optgroup>
      </S.SelectBox>
      <S.SelectBox
        onChange={(e) => onChangeSeletBox(e, 1, URL_KEY.SORT_TYPE_1)}
      >
        <optgroup label={`option : ${selectedTextArr[1]}`}>
          <S.Option key="0" value="name">
            이름순
          </S.Option>
          <S.Option key="1" value="birth">
            생년월일순
          </S.Option>
          <S.Option key="2" value="lastLogin">
            마지막로그인순
          </S.Option>
        </optgroup>
      </S.SelectBox>
      <S.SelectBox
        onChange={(e) => onChangeSeletBox(e, 2, URL_KEY.SORT_TYPE_2)}
      >
        <optgroup label={`option : ${selectedTextArr[2]}`}>
          <S.Option key="0" value="ascend">
            오름차순
          </S.Option>
          <S.Option key="1" value="descend">
            내림차순
          </S.Option>
        </optgroup>
      </S.SelectBox>
    </S.SelectionWrapper>
  )
}
export default OptionList
const SelectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const SelectBox = styled.select`
  border: none;
  width: 10rem;
  height: 3rem;
`
const Option = styled.option``

const S = { SelectionWrapper, SelectBox, Option }
