import styled from "styled-components"
import {
  COLOR,
  FONT_SIZE,
} from "../../../libs/styledComponents/referenceTokens"
import { useEffect, useState, useRef } from "react"

const PageNationBtn = ({ urlParams, setUrlParams, totalPageLength }) => {
  const totalPage = Math.ceil(totalPageLength / +urlParams.get("perPage"))
  const [pageBtn, setPageBtn] = useState([1, 2, 3, 4, 5])
  const pageIdxRef = useRef(1)

  useEffect(() => {
    const page = +urlParams.get("page")
    pageIdxRef.current = page
    if (page < 5) return setPageBtn([1, 2, 3, 4, 5])
    if (page % 5 === 1) {
      setPageBtn((prev) => {
        return prev.map((_, idx) => idx + pageIdxRef.current)
      })
    }
    if (page % 5 === 0) {
      setPageBtn((prev) => {
        return prev.map((_, idx) => pageIdxRef.current - idx).reverse()
      })
    }
    // if (page % 5 === 0 && totalPage / page < 2) {
    //   const number = pageIdxRef.current
    //   const btnLength = (totalPage % 5) + 1
    //   setPageBtn(() => {
    //     return Array(btnLength - 1)
    //       .fill()
    //       .map((_, idx) => number + idx + 1)
    //   })
    // }
  }, [urlParams])

  const onClickEndBtn = () => {}
  const onClickStartBtn = () => {
    urlParams.set("page", 1)
    setUrlParams(urlParams)
  }

  const onClickPrevBtn = () => {
    const prevPage = +urlParams.get("page")
    if (prevPage <= 1) return
    urlParams.set("page", +prevPage - 1)
    setUrlParams(urlParams)
  }
  const onClickNextBtn = () => {
    const prevPage = +urlParams.get("page")
    if (prevPage + 1 > totalPage) return
    urlParams.set("page", +prevPage + 1)
    setUrlParams(urlParams)
  }
  const onClickNumBtn = (btn) => {
    urlParams.set("page", +btn.target.id)
    setUrlParams(urlParams)
  }
  return (
    <S.BtnWrapper>
      <>
        <ArrowBtn onClick={onClickStartBtn}>{"<<"}</ArrowBtn>
        <ArrowBtn onClick={onClickPrevBtn}>{"<"}</ArrowBtn>
        {pageBtn.map((number) => (
          <S.NumBtn
            key={number}
            $urlParamsIdx={+urlParams.get("page") === number}
            id={number}
            onClick={(e) => {
              onClickNumBtn(e)
            }}
          >
            {number}
          </S.NumBtn>
        ))}
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
const NumBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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

const S = { BtnWrapper, NumBtn, ArrowBtn }
