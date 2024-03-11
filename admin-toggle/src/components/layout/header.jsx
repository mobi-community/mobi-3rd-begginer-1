import { useState } from "react";
import { styled } from "styled-components";

const Header = () => {
  const [isOpenClientModal, setIsOpenClientModal] = useState(false);
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);

  return (
    <Wrapper>
      <Title>
        <div onClick={() => setIsOpenClientModal((prev) => !prev)}>
          회원관리
          {isOpenClientModal && (
            <ModalBox>
              <div>회원목록</div>
              <div>회원등록</div>
            </ModalBox>
          )}
        </div>

        <div onClick={() => setIsOpenProductModal((prev) => !prev)}>
          상품관리
          {isOpenProductModal && (
            <ModalBox>
              <div>상품목록</div>
              <div>상품등록</div>
            </ModalBox>
          )}
        </div>
      </Title>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.black};
`;
const Title = styled.div`
  width: 600px;
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  color: ${({ theme }) => theme.COLORS.white};
  & > div {
    text-align: center;
    margin: 0 auto;
  }
`;

const ModalBox = styled.div`
  display: flex;
  position: absolute;
`;
