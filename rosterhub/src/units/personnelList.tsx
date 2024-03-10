import { ColumnBox, PersonnelCard } from "@/components";
import {
	ULR_PARAM_SORT_BY,
	ULR_PARAM_SORT_METHOD,
	URL_PARAM_LOAD_PER_PAGE,
	URL_PARAM_PAGE,
	URL_PARAM_PERSONNEL
} from "@/constants";
import { useSearchCryptoArray, useSearchSingleValue } from "@/hooks";
import { COLOR } from "@/styles";
import type { PersonnelInfoType } from "@/types";

export const PersonnelList = () => {
	const { getArray: getPersonnel } =
		useSearchCryptoArray<PersonnelInfoType>(URL_PARAM_PERSONNEL);
	const { getValue: getPage, updateValue: updatePage } =
		useSearchSingleValue(URL_PARAM_PAGE);
	const { getValue: getSortBy, updateValue: updateSortBy } =
		useSearchSingleValue(ULR_PARAM_SORT_BY);
	const { getValue: getSortMethod, updateValue: updateSortMethod } =
		useSearchSingleValue(ULR_PARAM_SORT_METHOD);
	const { getValue: getPerPage, updateValue: updatePerPage } =
		useSearchSingleValue(URL_PARAM_LOAD_PER_PAGE);

	const page = parseInt(getPage("1"));
	const perPage = parseInt(getPerPage("20"));
	const sortBy = getSortBy("name");
	const sortMethod = getSortMethod("ascend");

	console.log("page"+	)

	// 이름 순 정렬

	// 생년월일 순 정렬

	// 생성시간 순 정렬

	// 페이지 한번 보여질 만큼 자르기

	const printedPersonnelArray = getPersonnel();

	return (
		<ColumnBox gap="3rem">
			{getPersonnel().map((user) => (
				<PersonnelCard
					key={user.id}
					id={user.id}
					name={user.name}
					phoneNumberText={user.phoneNumber}
					birthDayText={user.birthDay}
					themeColor={COLOR.brand.marieRouge}
				/>
			))}
		</ColumnBox>
	);
};
