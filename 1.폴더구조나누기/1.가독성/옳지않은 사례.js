const Mainpage = () => {
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
export default Mainpage;
