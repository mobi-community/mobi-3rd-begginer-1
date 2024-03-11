export const FilterTypeSelect = [
  {
    optionType: "perPage",
    option: [
      {
        label: "perPage",
        value: 20,
      },
      {
        label: "20개씩",
        value: 20,
      },
      {
        label: "50개씩",
        value: 50,
      },
    ],
  },
  {
    optionType: "filter",
    option: [
      {
        label: "filter",
        value: "name",
      },
      {
        label: "이름순",
        value: "name",
      },
      {
        label: "생년월일순",
        value: "birthday",
      },
      {
        label: "마지막 로그인순",
        value: "createdAt",
      },
    ],
  },
  {
    optionType: "sort",
    option: [
      {
        label: "sort",
        value: "ascend",
      },
      {
        label: "오름차순",
        value: "ascend",
      },
      {
        label: "내림차순",
        value: "descend",
      },
    ],
  },
];
