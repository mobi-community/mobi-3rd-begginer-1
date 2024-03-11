import { FilterTypeSelect } from "../consts/filterType";
import { useSearchParams } from "react-router-dom";

const FilterPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //이름 순 정렬 함수

  const onChangeTypeOption = (e) => {
    const value = e.target.value;
    console.log(e.target.name);
    setSearchParams((prev) => {
      prev.set(e.target.name, value);
      return prev;
    });
  };

  return (
    <>
      {FilterTypeSelect.map((select, idx) => (
        <select
          name={select.optionType}
          key={idx}
          onChange={onChangeTypeOption}
        >
          {select.option.map((option, optionIdx) => (
            <option key={optionIdx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ))}
    </>
  );
};
export default FilterPage;
