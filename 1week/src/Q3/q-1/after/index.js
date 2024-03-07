import { users } from "../../q-mock/mock";
import Header from "./components/header";
import OneUser from "./components/oneUser";

const userPage = () => {
  const user = users;
  return (
    <>
      <Header />
      <p>목록</p>
      {/* user info */}
      {user.map((list, index) => (
        <OneUser list={list} />
      ))}
    </>
  );
};
export default userPage;
