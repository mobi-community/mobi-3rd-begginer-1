import React from "react";
import { StyleBtn } from "../styleTheme/button.style";

const Button = React.forwardRef(({ color, size, text, ...restProps }, ref) => {
    return (
        <StyleBtn size={size} color={color} {...restProps} ref={ref}>
            {text}
        </StyleBtn>
    );
});
export default Button;
