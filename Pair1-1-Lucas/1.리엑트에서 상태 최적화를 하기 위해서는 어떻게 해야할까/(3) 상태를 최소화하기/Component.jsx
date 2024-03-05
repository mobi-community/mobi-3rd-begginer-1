import { useState } from "react";

const Component = () => {
    const [numbers, setNumbers] = useState({
        first: 0,
        second: 0,
    });

    const { first, second } = numbers;

    const onChangeNumber = (e) =>
        setNumbers((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

    return (
        <>
            <input
                type="number"
                value={first}
                name="first"
                onChange={onChangeNumber}
            />
            +
            <input
                type="number"
                value={second}
                name="second"
                onChange={onChangeNumber}
            />
            ={first + second}
        </>
    );
};
