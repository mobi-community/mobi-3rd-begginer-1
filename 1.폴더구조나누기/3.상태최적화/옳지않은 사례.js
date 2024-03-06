const dataList = () => {
    const [data, setData] = useState([]);
    const fetchData = () => {
        setTimeout(() => {
            setData(["Item 1", "Item 2", "Item 3"]);
        }, 1000);
    };

    const clearData = () => {
        setData([]);
    };
    eturn(
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            <button onClick={clearData}>Clear Data</button>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default dataList;
