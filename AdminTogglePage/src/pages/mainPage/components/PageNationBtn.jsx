import styled from "styled-components"
import {
  COLOR,
  FONT_SIZE,
} from "../../../libs/styledComponents/referenceTokens"
import { URL_KEY } from "../../../const"

const PageNationBtn = ({ totalPageLength, urlParams, setUrlParams }) => {
  const perPage = +urlParams.get(URL_KEY.PER_PAGE)
  const page = +urlParams.get(URL_KEY.PAGE)
  const pagenationBtnLength = 5
  const totalPage = Math.ceil(totalPageLength / perPage)

  const changeUrl = (urlKey, value) => {
    urlParams.set(urlKey, value)
    setUrlParams(urlParams)
  }

  const onClickEndBtn = () => {
    changeUrl(URL_KEY.PAGE, totalPage)
  }
  const onClickStartBtn = () => {
    changeUrl(URL_KEY.PAGE, 1)
  }

  const onClickPrevBtn = () => {
    const prevPage = +urlParams.get(URL_KEY.PAGE)
    if (prevPage <= 1) return
    changeUrl(URL_KEY.PAGE, prevPage - 1)
  }
  const onClickNextBtn = () => {
    const prevPage = +urlParams.get(URL_KEY.PAGE)
    if (prevPage + 1 > totalPage) return
    changeUrl(URL_KEY.PAGE, +prevPage + 1)
  }
  const onClickNumBtn = (btn) => {
    changeUrl(URL_KEY.PAGE, +btn.target.id)
  }

  const creatNumberBtn = () => {
    const startNum =
      Math.floor((page - 1) / pagenationBtnLength) * pagenationBtnLength + 1
    const endNum = Math.min(startNum + pagenationBtnLength - 1, totalPage)
    return Array.from({ length: endNum - startNum + 1 }, (_, idx) => (
      <S.NumBtn
        key={idx}
        $urlParamsIdx={page === idx + startNum}
        id={idx}
        onClick={(e) => {
          onClickNumBtn(e)
        }}
      >
        {startNum + idx}
      </S.NumBtn>
    ))
  }

  return (
    <S.BtnWrapper>
      <ArrowBtn onClick={onClickStartBtn}>{"<<"}</ArrowBtn>
      <ArrowBtn onClick={onClickPrevBtn}>{"<"}</ArrowBtn>
      <S.NumberWrapper>{creatNumberBtn()}</S.NumberWrapper>
      <ArrowBtn onClick={onClickNextBtn}>{">"}</ArrowBtn>
      <ArrowBtn onClick={onClickEndBtn}>{">>"}</ArrowBtn>
    </S.BtnWrapper>
  )
}

export default PageNationBtn

const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 5rem;
  position: fixed;
  bottom: 5rem;
`
const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  gap: 1rem;
`
const NumBtn = styled.button`
  background-color: ${({ $urlParamsIdx }) =>
    $urlParamsIdx ? COLOR.THEME.SUB[200] : COLOR.THEME.SUB[900]};
  font-size: ${FONT_SIZE.xl};
  color: ${({ $urlParamsIdx }) =>
    $urlParamsIdx ? COLOR.COMMON[200] : COLOR.COMMON[1000]};
  width: 5rem;
  height: 5rem;
  border-radius: 15px;
  cursor: pointer;
`

const ArrowBtn = styled.button`
  font-size: ${FONT_SIZE.xl};
  background-color: ${COLOR.COMMON[1000]};
`

const S = { BtnWrapper, NumberWrapper, NumBtn, ArrowBtn }
