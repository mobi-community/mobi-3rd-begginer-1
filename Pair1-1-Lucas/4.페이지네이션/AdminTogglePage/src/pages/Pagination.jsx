import { useSearchParams } from "react-router-dom";

const Pagination = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const handleFirstPage = () => {
        searchParams.set("test", 0);
        setSearchParams(searchParams);
    };

    const handlePrevPage = () => {
        searchParams.set("test", 1);
        setSearchParams(searchParams);
    };
    const handleNextPage = () => {
        searchParams.set("test", 2);
        setSearchParams(searchParams);
    };
    const handleLastPage = () => {
        searchParams.set("test", 3);
        setSearchParams(searchParams);
    };

    console.log(searchParams.get("test"));
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <div onClick={handleFirstPage}>{"<<"}</div>
                <div onClick={handlePrevPage}>{"<"}</div>
                <div>{"[1]"}</div>
                <div>{"[2]"}</div>
                <div>{"[3]"}</div>
                <div>{"[4]"}</div>
                <div>{"[5]"}</div>
                <div onClick={handleNextPage}>{">"}</div>
                <div onClick={handleLastPage}>{">>"}</div>
            </div>
        </>
    );
};
export default Pagination;
