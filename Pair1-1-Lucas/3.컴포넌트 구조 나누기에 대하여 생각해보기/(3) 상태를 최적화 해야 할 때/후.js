function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>증가</button>
        </>
    );
}

function Input() {
    const [text, setText] = useState("");
    return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

function App() {
    return (
        <>
            <Counter />
            <Input />
        </>
    );
}
