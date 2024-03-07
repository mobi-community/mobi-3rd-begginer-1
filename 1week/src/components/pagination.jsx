import { styled } from "styled-components";
import { useEffect, useState } from "react";

const Pagination = ({ totalLength, searchParams, setSearchParams }) => {
  // 현재 페이지 (시작 페이지 = 1)
  const page = searchParams.get("page") ?? 1;
  // 한 페이지에 보여줄 글의 최대 개수
  const perPage = searchParams.get("perPage") ?? 20;
  //글을 모두 보여주기 위해 필요한 페이지의 개수
  const totalPage = Math.ceil(totalLength / perPage);
  //한 화면에 보여줄 페이지 버튼의 최대 개수
  const pagesPerGroup = 5;

  // console.log(totalPage);
  const [currentPage, setCurrentPage] = useState(page);

  // 맨 첫번째로
  const onStartBtn = () => {
    setCurrentPage(1);
  };
  /*
맨 첫번째로 누르면
setCurrentPage => page의 값을 1로 변경해
  */
  // 이전
  const onBefore = () => {
    if (currentPage !== totalPage) setCurrentPage((prev) => prev - 1);
  };

  // 다음
  const onNext = () => {
    if (currentPage !== totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  // 맨 마지막으로
  const onEndBtn = () => {
    setCurrentPage(totalPage);
  };
  /*
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

*/
  const onPageChange = (idx) => {
    setCurrentPage(idx);
    console.log(idx);
  };

  return (
    <PaginationBtn>
      <Button onClick={onStartBtn}>《</Button>
      <Button onClick={onBefore}>〈</Button>
      {Array(5)
        .fill()
        .map((_, idx) => (
          <Button
            key={idx}
            onClick={() => onPageChange(currentPage + idx)}
            style={{ backgroundColor: currentPage === idx ? "blue" : "#fff" }}
          >
            {currentPage + idx}
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
`;
