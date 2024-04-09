// 재사용되는 컴포넌트 일 경우

// 공용컴포넌트로 만들어서 사용

const CustomButton = ({ onClick, children }) => {
    <button onClick={onClick}>{children}</button>;
};

export default CustomButton;
