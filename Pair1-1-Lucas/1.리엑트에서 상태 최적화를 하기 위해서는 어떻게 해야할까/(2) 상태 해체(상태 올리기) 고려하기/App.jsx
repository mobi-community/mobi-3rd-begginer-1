import TODOLIST from "./TODOLIST";
import OneTodo from "./OneTodo";
import { useState } from "react";

const App = () => {
    const [todoList, setTodoList] = useState(TODOLIST);

    return (
        <>
            {todoList.map((todo) => (
                <div key={todo.id}>
                    <OneTodo {...todo} />
                    {todo.state && "..."}
                </div>
            ))}
        </>
    );
};
