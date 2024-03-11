import { useMemo } from "react";
import { UserData } from "../../data/userData";
import ClientLst from "./components/clientList";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/pagination";
import FilterPage from "../../components/filter";

const ClientPage = () => {
  const userList = useMemo(() => UserData(200), []);
  const totalLength = userList.length;
  const [searchParams] = useSearchParams();

  const filter = searchParams.get("filter") ?? "";
  const sort = searchParams.get("sort") ?? "ascend";
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page"))
    : 1;
  const perPage = searchParams.get("perPage")
    ? parseInt(searchParams.get("perPage"))
    : 20;

  /** 배열을 받아서, 이름 순으로 정렬 후 반환, sortMethod에 의해 오름차순 또는 내림차순으로 정렬  */
  const getSortedArrayByName = (array) => {
    if (sort == "ascend") {
      return array.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // 내림차순으로 반환되는 함수 작성
      return array.sort((a, b) => b.name.localeCompare(a.name));
    }
  };
  /** 배열을 받아서, 생년월일 순으로 정렬 후 반환, sortMethod에 의해 오름차순 또는 내림차순으로 정렬  */
  const getSortedArrayByBirthDay = (array) => {
    if (sort == "ascend") {
      return array.sort((a, b) => a.birthday.localeCompare(b.birthday));
    } else {
      // 내림차순으로 반환되는 함수 작성
      return array.sort((a, b) => b.birthday.localeCompare(a.birthday));
    }
  };
  /** 배열을 받아서, 생성시간 순으로 정렬 후 반환, sortMethod에 의해 오름차순 또는 내림차순으로 정렬  */
  const getSortedArrayByCreatedAt = (array) => {
    if (sort == "ascend") {
      return array.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    } else {
      // 내림차순으로 반환되는 함수 작성
      return array.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }
  };
  /** 배열을 받아서, startIdx ~ endIdx 까지 잘라진 배열을 반환  */
  const slicedArray = (array, startIdx, endIdx) => {
    return array.slice((startIdx - 1) * endIdx, endIdx * startIdx);
    // 정렬먼저 하고
    // 정렬된 배열을 자르고,
    // 반환
    // slice(20*(1-1),20)
    // slice(20*(2-1) ,20*2)
    // slice(40*(3-1) ,20*3)
    // .....
    // slice(endIdx*(n="page"-1) ,20*n="page")
  };

  let printedArray = [...userList];

  // url 에 filter 값이 name 일 때만 적용
  if (filter === "name") {
    // 이름순으로 반환되는 함수를 적용
    printedArray = getSortedArrayByName([...printedArray]);
  }
  // url 에 filter 값이 birthday 일 때만 적용
  if (filter === "birthday") {
    // 생일순으로 반환되는 함수를 적용
    printedArray = getSortedArrayByBirthDay([...printedArray]);
  }
  // url 에 filter 값이 createdAt 일 때만 적용
  if (filter === "createdAt") {
    // 생성순으로 반환되는 함수를 적용
    printedArray = getSortedArrayByCreatedAt([...printedArray]);
  }

  printedArray = slicedArray([...printedArray], page, perPage);
  // slicedArray(1,20) 1부터 20까지 배열을 잘라서 printedArray 에 넣는다.

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
        <FilterPage />
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
          {printedArray.map((list, index) => (
            <ClientLst key={index} list={list} />
          ))}
        </tbody>
      </Table>
      <Pagination totalLength={totalLength} />
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
