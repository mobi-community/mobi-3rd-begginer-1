import { useState } from "react";

const OneTodo = ({ id, todo }) => {
    const [state, setState] = useState();

    const onPressStateButton = () => {
        setState((prev) => !prev);
    };

    return;
};

export default OneTodo;
