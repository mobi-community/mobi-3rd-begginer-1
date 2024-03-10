import styled from "styled-components"
import { creatRandomUserData } from "../../utils/creatRandomUserData"
import { OptionList, PageNationBtn, UserTable } from "./components"
import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { editUserDataByPerPage } from "../../utils/dataEditor"
import { URL_KEY } from "../../const"

const MainPage = () => {
  const mockData = useMemo(() => creatRandomUserData(270), [])
  const [urlParams, setUrlParams] = useSearchParams()
  const [userData, setUserData] = useState([])

  useEffect(() => {
    urlParams.set(URL_KEY.PAGE, 1)
    urlParams.set(URL_KEY.PER_PAGE, 20)
    setUrlParams(urlParams)
  }, [])

  useEffect(() => {
    const page = +urlParams.get(URL_KEY.PAGE)
    const perPage = +urlParams.get(URL_KEY.PER_PAGE)
    setUserData(editUserDataByPerPage(mockData, page, perPage))
  }, [urlParams])

  return (
    <S.CenterWrapper>
      <OptionList urlParams={urlParams} setUrlParams={setUrlParams} />
      <UserTable userData={userData} />
      <PageNationBtn
        urlParams={urlParams}
        setUrlParams={setUrlParams}
        totalPageLength={mockData.length}
      />
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
