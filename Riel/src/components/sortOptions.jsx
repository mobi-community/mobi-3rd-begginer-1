// import { useSearchParams } from 'react-router-dom';

// const SortOptions = ({ userPerPage, setSearchParams }) => {
//   const [searchParams] = useSearchParams();

//   const handleSortFieldChange = (event) => {
//     setSearchParams({
//       page: 1,
//       userPerPage,
//       sortField: event.target.value,
//       sortOrder: searchParams.get('sortOrder') || 'asc',
//     });
//   };

//   const handleSortOrderChange = (event) => {
//     setSearchParams({
//       page: 1,
//       userPerPage,
//       sortField: searchParams.get('sortField') || 'name',
//       sortOrder: event.target.value,
//     });
//   };

//   const handleUserPerPageChange = (event) => {
//     setSearchParams({ page: 1, userPerPage: event.target.value });
//   };

//   return (
//     <div>
//       <select value={searchParams.get('sortField') || 'name'} onChange={handleSortFieldChange}>
//         <option value="name">이름</option>
//         <option value="lastLogin">마지막 로그인</option>
//         <option value="birthDay">생년월일</option>
//       </select>

//       <select value={searchParams.get('sortOrder') || 'asc'} onChange={handleSortOrderChange}>
//         <option value="asc">오름차순</option>
//         <option value="desc">내림차순</option>
//       </select>

//       <select value={userPerPage} onChange={handleUserPerPageChange}>
//         <option value="20">20개 보기</option>
//         <option value="50">50개 보기</option>
//       </select>
//     </div>
//   );
// };
// export default SortOptions;
