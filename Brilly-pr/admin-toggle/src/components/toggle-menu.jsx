import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsList } from "react-icons/bs";

const ToggleMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // 뒤로가기 이벤트 처리
  useEffect(() => {}, []);

  const toggleSideMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <>
      <S.MenuListIcon onClick={toggleSideMenu} />
      <S.SideBarWrapper isOpenMenu={isOpenMenu}>
        <div>
          <MenuTitle>
            <li>회원관리</li>
            <ul>
              <li>회원목록</li>
              <li>회원등록</li>
            </ul>
            <li>상품관리</li>
            <ul>
              <li>상품목록</li>
              <li>상품등록</li>
            </ul>
          </MenuTitle>
        </div>
        {isOpenMenu && <S.SidebarOverlay onClick={toggleSideMenu} />}
      </S.SideBarWrapper>
    </>
  );
};

export default ToggleMenu;

const SideBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpenMenu }) => (isOpenMenu ? "0" : "-200px")};
  width: 200px;
  height: 100%;
  background-color: #fff;
  transition: left 0.3s ease-in-out;
`;

const MenuListIcon = styled(BsList)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const MenuTitle = styled.ul``;

const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 13rem;
  height: 100%;
  background-color: rgba(175, 122, 245, 0.3);
`;

const S = {
  SideBarWrapper,
  MenuListIcon,
  SidebarOverlay,
};
