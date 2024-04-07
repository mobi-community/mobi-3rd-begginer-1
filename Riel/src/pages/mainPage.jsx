import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import UserList from '../components/userList';
import { userListData } from '../libs/user/user';
import PageBtn from '../components/pageBtn';

function MainPage() {
  //   const [searchParams, setSearchParams] = useSearchParams();
  const [users] = useState(userListData);

  //   const sortField = searchParams.get('sortField') || 'name';
  //   const sortOrder = searchParams.get('sortOrder') || 'asc';
  return (
    <div>
      {/* <SortOptions userPerPage={userPerPage} setSearchParams={setSearchParams} /> */}
      <UserList userData={users} />
      <PageBtn userData={users} />
    </div>
  );
}

export default MainPage;
