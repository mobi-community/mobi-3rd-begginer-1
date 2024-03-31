// selectOption으로 perPage 갯수 설정
export const handleSelected = (
  e,
  { setPerPage, setSearchParams, setCurrentPage }
) => {
  const perPageValue = parseInt(e.target.value);
  setPerPage(perPageValue);
  setSearchParams({ perPage: perPageValue, page: 1 });
  setCurrentPage(1);
};
