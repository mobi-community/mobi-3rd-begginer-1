import React from "react";
import { useCounterContext } from "./counter-context";

const Counter = () => {
    const { count, increment, decrement } = useCounterContext();

    return (
        <div>
            <p>{count.count}</p>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    );
};
export default Counter;
