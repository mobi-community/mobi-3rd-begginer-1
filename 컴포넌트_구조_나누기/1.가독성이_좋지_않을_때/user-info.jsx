const UserInfo = ({ data }) => {
    return (
        <div>
            <div>{data.name}</div>
            <div>{data.nick_name}</div>
            <div>{data.phone}</div>
        </div>
    );
};
export default UserInfo;
