import { StyleBtn } from "../styleTheme/button.style";

const Button = ({ color, size, text, ...restProps }) => {
    return (
        <StyleBtn size={size} color={color} {...restProps}>
            {text}
        </StyleBtn>
    );
};
export default Button;
