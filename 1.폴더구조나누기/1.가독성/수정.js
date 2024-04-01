//user데이터만 담는 컴포넌트 따로 생성 후 메인페이지에 유저컴포넌트만 사용
const UserData = () => {
    const users = [
        { name: "wendy", age: 26 },
        { name: "wendy22", age: 26 },
        { name: "wendy33", age: 26 },
    ];
    return (
        <>
            {users.map((el) => (
                <div key={el.name}>{el.name}</div>
            ))}
        </>
    );
};
export default UserData;
