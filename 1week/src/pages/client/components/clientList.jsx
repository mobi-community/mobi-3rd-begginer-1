import { styled } from "styled-components";

const ClientLst = ({ list }) => {
  //   console.log(list);
  //1 | 김피넛 | 2003-03-03 | 010-****-1234 | 2023.03.02.13:52:36:22
  return (
    <TR>
      <td>{list.id}</td>
      <td>{list.name}</td>
      <td>{list.birthday}</td>
      <td>{list.number}</td>
      <td>{list.createdAt}</td>
    </TR>
  );
};
export default ClientLst;
const TR = styled.tr`
  & > td {
    border-bottom: 1px solid #e0e0e0;
    padding: 20px 0;
    width: 255px;
    text-align: center;
  }
  /*
  
    light_grey: "#777",
  line_grey: "#787878",*/
`;
