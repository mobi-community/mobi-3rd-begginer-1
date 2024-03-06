const Main = () => {
    const fetchData = async () => {
        try {
            const response = await axios.get("https://api.example.com/data");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };
    return <div></div>;
};
export default Main;
