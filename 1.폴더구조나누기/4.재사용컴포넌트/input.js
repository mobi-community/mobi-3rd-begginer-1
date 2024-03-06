const CommonInput = ({ ...rest }) => {
    return <Input {...rest} />;
};
export default CommonInput;
const Input = styled.input`
    width: 100%;
    color: red;
`;
