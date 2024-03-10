import type { FilterType } from "@/types";

export const Filters: Array<FilterType> = [
	{
		filterLabel: "정렬 기준",
		options: [
			{
				label: "이름 순",
				value: "name"
			},
			{
				label: "생성시간 순",
				value: "createdAt"
			},
			{
				label: "생년월일 순",
				value: "birthday"
			}
		]
	},
	{
		filterLabel: "정렬 방법",
		options: [
			{
				label: "오름차순",
				value: "ascend"
			},
			{
				label: "내림차순",
				value: "descend"
			}
		]
	},
	{
		filterLabel: "한번에 보기",
		options: [
			{
				label: "20",
				value: "20"
			},
			{
				label: "50",
				value: "50"
			}
		]
	}
] as const;
