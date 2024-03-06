//3-3
import { useState } from "react";

const Fc = () => {
    const [numbers, setNumbers] = useState({
        first: 0,
        second: 0,
    });

    const onChangeNumber = (e) =>
        setNumbers((prev) => ({
            ...prev,
            [e.target.name]: parseInt(e.target.value, 10),
        }));

    return (
        <>
            <input
                type="number"
                value={numbers.first}
                name="first"
                onChange={onChangeNumber}
            />
            +
            <input
                type="number"
                value={numbers.second}
                name="second"
                onChange={onChangeNumber}
            />
            ={numbers.first + numbers.second}
        </>
    );
};
export default Fc;
//다른 파일을 이용 실험해봄
