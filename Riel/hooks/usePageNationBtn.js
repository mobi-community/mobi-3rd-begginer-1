import { UseHandleUrl } from './useHandleUrl';

export const usePageNationBtn = (userData) => {
  const { setUrlValue, getUrlValue } = UseHandleUrl();
  const currentPage = +getUrlValue('page');
  const perPage = +getUrlValue('perPage');
  const totalPages = Math.ceil(userData.length / perPage);

  const changePage = (page) => () => {
    setUrlValue('page', page);
  };
  function isPrevBtnDisabled() {
    return currentPage <= 1;
  }

  function isNextBtnDisabled() {
    return currentPage >= totalPages;
  }
  const BtnListFunction = () => {
    let firstPageBtn;
    let lastPageBtn;

    if (currentPage >= totalPages - 1) {
      firstPageBtn = Math.max(1, totalPages - 4);
    } else {
      firstPageBtn = Math.max(1, currentPage - 2);
    }

    if (currentPage <= 2) {
      lastPageBtn = Math.min(5, totalPages);
    } else {
      lastPageBtn = Math.min(currentPage + 2, totalPages);
    }

    const pageBtnList = [];
    for (let i = firstPageBtn; i <= lastPageBtn; i++) {
      pageBtnList.push(i);
    }
    return pageBtnList;
  };

  return { changePage, isPrevBtnDisabled, isNextBtnDisabled, BtnListFunction, currentPage, perPage, totalPages };
};
