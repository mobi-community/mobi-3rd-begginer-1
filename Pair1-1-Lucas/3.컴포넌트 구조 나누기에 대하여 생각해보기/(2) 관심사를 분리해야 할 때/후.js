function HelloMessage() {
    return <h1>안녕</h1>;
}

function Button() {
    return (
        <button onClick={() => alert("난 Lucas야")}>내가 누군지 궁금해?</button>
    );
}

function HelloPage() {
    return (
        <div>
            <Message />
            <Button />
        </div>
    );
}
