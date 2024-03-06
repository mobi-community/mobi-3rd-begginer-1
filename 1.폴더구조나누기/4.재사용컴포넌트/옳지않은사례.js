const MainPage = () => {
    return (
        <>
            <Input placeholder="이메일을 입력하세요" />
            <Input placeholder="비밀번호를 입력하세요" />
        </>
    );
};
export default MainPage;

const Input = styled.input`
    width: 100%;
    color: red;
`;
