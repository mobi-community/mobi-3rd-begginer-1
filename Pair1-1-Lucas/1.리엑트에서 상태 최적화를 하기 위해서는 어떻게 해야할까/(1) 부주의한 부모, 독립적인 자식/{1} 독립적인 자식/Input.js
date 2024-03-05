import { useState } from "react";

const Input = () => {
    const [isEdit, setIsEdit] = useState();
    const onPressEditButton = () => {
        setIsEdit(true);
    };
};

export default Input;
