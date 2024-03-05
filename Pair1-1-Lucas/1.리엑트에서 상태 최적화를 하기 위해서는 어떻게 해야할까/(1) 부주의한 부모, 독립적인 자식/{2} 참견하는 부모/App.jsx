import { useState } from "react";
import Input from "./Input";

const App = () => {
    const [isEdit, setIsEdit] = useState();
    const onPressEditButton = () => {
        setIsEdit(true);
    };
    return (
        <>
            <Input {...{ isEdit, setIsEdit, onPressEditButton }} />
        </>
    );
};
