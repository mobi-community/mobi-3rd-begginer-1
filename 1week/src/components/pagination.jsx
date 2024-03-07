import { styled } from "styled-components";
import { useEffect, useState } from "react";

const Pagination = ({ totalLength, searchParams, setSearchParams }) => {
  // 현재 페이지 (시작 페이지 = 1)
  const page = parseInt(searchParams.get("page")) ?? 1;
  // 한 페이지에 보여줄 글의 최대 개수
  const perPage = searchParams.get("perPage") ?? 20;
  //글을 모두 보여주기 위해 필요한 페이지의 개수
  const totalPage = Math.ceil(totalLength / perPage);
  //한 화면에 보여줄 페이지 버튼의 최대 개수
  const pagesPerGroup = 5;

  const [currentPage, setCurrentPage] = useState(page);
  // console.log(currentPage); // 왜 숫자가 점점 커지지..??

  // 맨 첫번째로
  const onStartBtn = () => {
    // setCurrentPage(1);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  const [pageNumber, setPageNumber] = useState([1, 2, 3, 4, 5]);
  /*
맨 첫번째로 누르면
setCurrentPage => page의 값을 1로 변경해
함수 이름 변경하기 

*/
  // 이전
  const onBefore = () => {
    const pageValue = +searchParams.get("page"); //1
    if (pageValue === 1) return;
    searchParams.set("page", pageValue - 1);
    setSearchParams(searchParams);
  };

  // 다음
  const onNext = () => {
    const pageValue = +searchParams.get("page");
    searchParams.set("page", pageValue + 1);
    setSearchParams(searchParams);
    console.log(typeof pageValue); //string
  };
  // 맨 마지막으로
  const onEndBtn = () => {
    // setCurrentPage(totalPage);
    searchParams.set("page", totalPage);
    setSearchParams(searchParams);
  };

  /*
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);
*/
  const onPageChange = (idx) => {
    setCurrentPage(idx + 1);
    searchParams.set("page", idx);
    setSearchParams(searchParams);

    console.log(idx);
  };
  // 이렇게하면 10부터 나오구..
  //
  return (
    <PaginationBtn>
      <Button onClick={onStartBtn}>《</Button>
      <Button onClick={onBefore}>〈</Button>
      {Array(pagesPerGroup)
        .fill()
        .map((_, idx) => (
          <Button
            key={idx}
            onClick={() => onPageChange(idx + 1)}
            $seleted={idx + 1 === +searchParams.get("page")}
          >
            {page + idx}
          </Button>
        ))}
      <Button onClick={onNext}>〉</Button>
      <Button onClick={onEndBtn}>》</Button>
    </PaginationBtn>
  );
};
export default Pagination;
const PaginationBtn = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: ${({ $seleted }) => ($seleted ? "blue" : "white")};
`;
