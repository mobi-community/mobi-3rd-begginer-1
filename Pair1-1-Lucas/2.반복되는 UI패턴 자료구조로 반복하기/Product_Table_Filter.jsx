const PRODUCT_TABLE_FILTER = [
    {
        type: "limit",
        option: [
            {
                value: 10,
                text: "10개씩 보기",
            },
            {
                value: 50,
                text: "50개씩 보기",
            },
        ],
    },
    {
        type: "sort",
        option: [
            {
                value: "popularity",
                text: "인기순",
            },
            {
                value: "sales",
                text: "판매순",
            },
            {
                value: "reviews",
                text: "리뷰순",
            },
        ],
    },
    {
        type: "order",
        option: [
            {
                value: "asc",
                text: "오름차순",
            },
            {
                value: "desc",
                text: "내림차순",
            },
        ],
    },
];

const Filter = () => {
    return (
        <>
            {PRODUCT_TABLE_FILTER.map((filter, index) => (
                <select key={index}>
                    {filter.option?.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            ))}
        </>
    );
};
