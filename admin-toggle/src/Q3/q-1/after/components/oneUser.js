const OneUser = ({ list }) => {
  return (
    <div>
      <div>{list.id}</div>
      <div>{list.name}</div>
      <div>{list.birthday}</div>
      <div>{list.number}</div>
    </div>
  );
};
export default OneUser;
