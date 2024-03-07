import { useState } from "react";
import { users } from "../../q-mock/mock";

// /(1) 가독성이 좋지 않을 때 = 잘 읽히지 않는 코드
//id name number birth login
const userPage = () => {
  const user = users;
  return (
    <>
      <div>
        {/* header */}
        <div>Logo</div>
        <div>
          <ul>
            <li>등록순</li>
            <li>생일순</li>
            <li>생년월일</li>
          </ul>
        </div>
        {/* search */}
        <div>
          <input />
          <button>검색</button>
        </div>
      </div>
      <div>
        <p>목록</p>
        {/* user info */}
        {user.map((list, index) => (
          <div>
            <div>{list.id}</div>
            <div>{list.name}</div>
            <div>{list.birthday}</div>
            <div>{list.number}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default userPage;
