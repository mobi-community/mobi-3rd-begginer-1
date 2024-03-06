function Components() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </>
    );
}
