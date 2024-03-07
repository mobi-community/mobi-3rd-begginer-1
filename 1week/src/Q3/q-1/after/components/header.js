import Search from "./search";

const Header = () => {
  return (
    <>
      <div>Logo</div>
      <div>
        <ul>
          <li>등록순</li>
          <li>생일순</li>
          <li>생년월일</li>
        </ul>
      </div>
      <Search />
    </>
  );
};
export default Header;
