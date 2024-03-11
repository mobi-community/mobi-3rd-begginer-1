//(2) 관심사를 분리해야할 때 관심사분리 컴포넌트
//코드를 유지보수하고 이해하기 쉽게 만들기 위해 코드를 각각의 독립적인 관심사에 따라 구조화하는 원칙

import { textOverFlow } from "./textoverFlow";

const MainPage = ({ user }) => {
  const userContent = user.content;
  return (
    <>
      <div>
        <div> title : {user.title}</div>
        <div> content : {textOverFlow(userContent)}</div>
      </div>
    </>
  );
};
export default MainPage;
