import styled from "styled-components"
import {
  COLOR,
  FONT_SIZE,
} from "../../../libs/styledComponents/referenceTokens"
import { useEffect, useState, useRef } from "react"
import { URL_KEY } from "../../../const"

const PageNationBtn = ({ urlParams, setUrlParams, totalPageLength }) => {
  const totalPage = Math.ceil(
    totalPageLength / +urlParams.get(URL_KEY.PER_PAGE)
  )
  const [pageBtn, setPageBtn] = useState([1, 2, 3, 4, 5])
  const pageIdxRef = useRef(1)

  useEffect(() => {
    const page = +urlParams.get(URL_KEY.PAGE)
    pageIdxRef.current = page
    if (page < 5) return setPageBtn([1, 2, 3, 4, 5])
    if (page % 5 === 1) {
      setPageBtn((prev) => {
        return prev.map((_, idx) => idx + pageIdxRef.current)
      })
    }
    if (page % 5 === 0) {
      setPageBtn(() => {
        return Array(5)
          .fill()
          .map((_, idx) => pageIdxRef.current - idx)
          .reverse()
      })
    }
    if (page % 5 === 1 && totalPage / page < 2) {
      const btnLength = totalPage % 5
      setPageBtn(() => {
        return Array(btnLength)
          .fill()
          .map((_, idx) => pageIdxRef.current + idx)
      })
    }
    if (page === totalPage) {
      const btnLength = totalPage % 5
      setPageBtn(() => {
        return Array(btnLength)
          .fill()
          .map((_, idx) => pageIdxRef.current - idx)
          .reverse()
      })
    }
  }, [urlParams])

  const onClickEndBtn = () => {
    urlParams.set(URL_KEY.PAGE, totalPage)
    setUrlParams(urlParams)
  }
  const onClickStartBtn = () => {
    urlParams.set(URL_KEY.PAGE, 1)
    setUrlParams(urlParams)
  }

  const onClickPrevBtn = () => {
    const prevPage = +urlParams.get(URL_KEY.PAGE)
    if (prevPage <= 1) return
    urlParams.set(URL_KEY.PAGE, +prevPage - 1)
    setUrlParams(urlParams)
  }
  const onClickNextBtn = () => {
    const prevPage = +urlParams.get(URL_KEY.PAGE)
    if (prevPage + 1 > totalPage) return
    urlParams.set(URL_KEY.PAGE, +prevPage + 1)
    setUrlParams(urlParams)
  }
  const onClickNumBtn = (btn) => {
    urlParams.set(URL_KEY.PAGE, +btn.target.id)
    setUrlParams(urlParams)
  }
  return (
    <S.BtnWrapper>
      <>
        <ArrowBtn onClick={onClickStartBtn}>{"<<"}</ArrowBtn>
        <ArrowBtn onClick={onClickPrevBtn}>{"<"}</ArrowBtn>
        <S.NumberWrapper>
          {pageBtn.map((number) => (
            <S.NumBtn
              key={number}
              $urlParamsIdx={+urlParams.get(URL_KEY.PAGE) === number}
              id={number}
              onClick={(e) => {
                onClickNumBtn(e)
              }}
            >
              {number}
            </S.NumBtn>
          ))}
        </S.NumberWrapper>
        <ArrowBtn onClick={onClickNextBtn}>{">"}</ArrowBtn>
        <ArrowBtn onClick={onClickEndBtn}>{">>"}</ArrowBtn>
      </>
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
