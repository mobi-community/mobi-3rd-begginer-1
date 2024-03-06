import createUsers from "../../utils/user";

const Pagenation = ({ currentPage, onPageChange, perPage }) => {
    const userData = createUsers();
    // //한페이지당 보여줄 컨텐츠 갯수
    // const perPage = 20;
    // //현재페이지
    // const [currentPage, setCurrentPage] = useState(1);
    // //전체페이지
    const totalPage = Math.ceil(userData.length / perPage);
    // //처음 시작하는 데이터
    // const startIndex = (currentPage - 1) * perPage;
    // //마지막 데이터
    // const endIndex = startIndex + perPage;
    // const currentData = userData.slice(startIndex, endIndex);
    const handlePrevPage = () => {
        onPageChange(currentPage - 1);
    };
    const handleNextPage = () => {
        onPageChange(currentPage + 1);
    };
    return (
        <>
            <button onClick={handlePrevPage}>이전</button>
            <button onClick={handleNextPage}>다음</button>
        </>
    );
};
export default Pagenation;
