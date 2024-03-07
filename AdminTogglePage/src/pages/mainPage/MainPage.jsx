import styled from "styled-components"
import { creatRandomUserData } from "../../utils/creatRandomUserData"
import { PageNationBtn, UserTable } from "./components"
import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { editUserDataByPerPage } from "../../utils/dataEditor"

const MainPage = () => {
  const mockData = useMemo(() => creatRandomUserData(250), [])
  const [urlParams, setUrlParams] = useSearchParams()
  const [userData, setUserData] = useState([])

  useEffect(() => {
    urlParams.set("page", 1)
    urlParams.set("perPage", 20)
    setUrlParams(urlParams)
  }, [])

  useEffect(() => {
    const page = +urlParams.get("page")
    const perPage = +urlParams.get("perPage")
    setUserData(editUserDataByPerPage(mockData, page, perPage))
  }, [urlParams])
  
  return (
    <S.CenterWrapper>
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
