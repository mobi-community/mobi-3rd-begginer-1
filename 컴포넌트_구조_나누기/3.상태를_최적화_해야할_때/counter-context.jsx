import React, { createContext, useCallback, useContext, useState } from "react";

const CounterContext = createContext();

const initialData = {
    count: 0,
};

export const useCounterContext = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(initialData);

    const increment = useCallback(() => {
        setCount((prev) => ({
            ...prev,
            count: prev.count + 1,
        }));
    }, []);

    const decrement = useCallback(() => {
        setCount((prev) => ({
            ...prev,
            count: prev.count - 1,
        }));
    }, []);

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};
