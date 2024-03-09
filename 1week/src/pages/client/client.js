import { useEffect, useMemo, useState } from "react";
import { UserData } from "../../data/userData";
import ClientLst from "./components/clientList";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/pagination";
import FilterPage from "../../components/filter";

const ClientPage = () => {
  const userList = useMemo(() => UserData(200), []);
  const totalLength = userList.length;
  const [userDataList, setUserDataList] = useState(userList);
  const [searchParams, setSearchParams] = useSearchParams();

  const userListSlice = (startIdx, endIdx) => {
    const listSlice = userList.slice(
      (startIdx - 1) * endIdx,
      endIdx * startIdx
    );
    // slice(20*(1-1),20)
    // slice(20*(2-1) ,20*2)
    // slice(40*(3-1) ,20*3)
    // .....
    // slice(endIdx*(n="page"-1) ,20*n="page")
    return listSlice;
  };
  useEffect(() => {
    setUserDataList(
      userListSlice(+searchParams.get("page"), +searchParams.get("perPage"))
    );
  }, [searchParams]);
  /*
  1. useEffect 처음 화면이 열렸을때에 
  2. set을 사용하여 page와 perPage의 value를 설정
  */

  useEffect(() => {
    searchParams.set("page", 1);
    searchParams.set("perPage", 20);
    searchParams.set("filter", "name");
    setSearchParams(searchParams);
  }, []);

  const columns = [
    "고유번호",
    "이름",
    "생년월일",
    "연락처",
    "마지막 로그인 시간",
  ];

  //

  return (
    <Wrapper>
      <h1>회원관리 〉 회원목록</h1>
      <div>
        <FilterPage
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          userDataList={userDataList}
          setUserDataList={setUserDataList}
        />
      </div>
      <Table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <Th key={index}>{column}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userDataList.map((list, index) => (
            <ClientLst key={index} list={list} />
          ))}
        </tbody>
      </Table>
      <Pagination
        totalLength={totalLength}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </Wrapper>
  );
};
export default ClientPage;

const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  & > h1 {
    padding: 50px 0;
    font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
  }
`;
const Table = styled.table`
  width: 1280px;
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
`;

const Th = styled.th`
  width: 255px;
  padding-bottom: 10px;
`;
