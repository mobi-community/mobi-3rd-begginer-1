import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ totalLength }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // 현재 페이지 (시작 페이지 = 1)
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page"))
    : 1;
  // 한 페이지에 보여줄 게시물의 최대 개수
  const perPage = searchParams.get("perPage")
    ? parseInt(searchParams.get("perPage"))
    : 20;
  //글을 모두 보여주기 위해 필요한 페이지의 개수
  const totalPage = Math.ceil(totalLength / perPage);
  //한 화면에 보여줄 페이지 버튼의 최대 개수
  const pagesPerGroup = 5;

  // 맨 첫번째로
  const onStartNumberBtn = () => {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  // 이전
  const onPrevBeforeBtn = () => {
    if (page === 1) return;
    searchParams.set("page", page - 1);
    setSearchParams(searchParams);
  };

  // 다음
  const onPrevNextBtn = () => {
    searchParams.set("page", page + 1);
    setSearchParams(searchParams);
    console.log(typeof page); //string
  };
  // 맨 마지막으로
  const onEndNumberBtn = () => {
    searchParams.set("page", totalPage);
    setSearchParams(searchParams);
  };

  const onPageChange = (idx) => {
    searchParams.set("page", idx);
    setSearchParams(searchParams);
    console.log(idx);
  };
  //12345
  return (
    <PaginationBtn>
      <Button onClick={onStartNumberBtn}>《</Button>
      <Button onClick={onPrevBeforeBtn}>〈</Button>
      {Array(pagesPerGroup)
        .fill()
        .map((_, idx) => (
          <Button
            key={idx}
            onClick={() => onPageChange(idx + 1)}
            $seleted={idx + 1 === +page}
          >
            {page + idx}
          </Button>
        ))}
      <Button onClick={onPrevNextBtn}>〉</Button>
      <Button onClick={onEndNumberBtn}>》</Button>
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
  background-color: ${({ $seleted }) => ($seleted ? "black" : "white")};
  color: ${({ $seleted }) => ($seleted ? "white" : "black")};
  font-size: large;
`;
