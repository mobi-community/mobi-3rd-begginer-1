import styled from 'styled-components';

import { usePageNationBtn } from '../../hooks/usePageNationBtn';

const PageBtn = ({ userData }) => {
  const { changePage, isPrevBtnDisabled, isNextBtnDisabled, BtnListFunction, currentPage, totalPages } =
    usePageNationBtn(userData);

  return (
    <S.pageButtonWrapper>
      <button onClick={changePage(1)} disabled={isPrevBtnDisabled(currentPage)}>
        PrevPrev
      </button>

      <button onClick={changePage(currentPage - 1)} disabled={isPrevBtnDisabled(currentPage)}>
        Prev
      </button>

      {BtnListFunction().map((page, index) => (
        <S.btnList key={index} onClick={changePage(page)} $isSelected={page === currentPage}>
          {page}
        </S.btnList>
      ))}

      <button onClick={changePage(currentPage + 1)} disabled={isNextBtnDisabled(currentPage)}>
        Next
      </button>
      <button onClick={changePage(totalPages)} disabled={isNextBtnDisabled(currentPage)}>
        NextNext
      </button>
    </S.pageButtonWrapper>
  );
};
export default PageBtn;

const pageButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const btnList = styled.button`
  color: ${({ $isSelected }) => ($isSelected ? 'blue' : 'black')};
  border-style: none;
`;

const S = { pageButtonWrapper, btnList };
