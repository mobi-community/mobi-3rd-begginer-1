import { users } from "../q-mock/mock";
import UseOneList from "./components/useOneList";

const MainPage = () => {
  const userList = users();
  const [userDataList, setUserDataList] = userList;
  const onAddUserData = (e) => {
    e.prevantDefault();
    setUserDataList((prev) => {
      const newList = [...prev, e.target.name.value];
      return prev === newList;
    });
  };

  return (
    <>
      <form onSubmit={onAddUserData}>
        <input name="name" />
        <button>add</button>
      </form>

      {userDataList.map((list, index) => (
        <UseOneList
          key={index}
          list={list}
          userDataList={userDataList}
          setUserDataList={setUserDataList}
        />
      ))}
    </>
  );
};
export default MainPage;
