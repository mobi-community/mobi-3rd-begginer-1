import { useRef, useState } from "react";

const UseOneList = ({ list, userDataList, setUserDataList }) => {
  const copyItemRef = useRef(null);
  const [isRefModal, setIsRefModal] = useState(false);
  // 여기 컴포넌트에서만 랜더링을 시켜줄 state
  const onEditUserData = () => {
    if (!isRefModal) return setIsRefModal;
    const copyLlst = [...userDataList];
    let findList = copyLlst.find((el) => el === list);
    findList = copyItemRef.current.value;
    setUserDataList([findList]);
  };

  const onDeleteUserData = () => {
    const filterList = userDataList.filter((el) => el !== list);
    setUserDataList(filter);
  };
  return (
    <>
      <div>{list.name}</div>
      {isRefModal ? (
        <textarea ref={copyItemRef}></textarea>
      ) : (
        <span>{list.name}</span>
      )}
      <button onClick={onEditUserData}>수정</button>
      <button onClick={onDeleteUserData}>삭제</button>
    </>
  );
};
export default UseOneList;
