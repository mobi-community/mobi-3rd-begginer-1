import { OptionDropbox } from "@/components";
import {
	Filters,
	ULR_PARAM_SORT_BY,
	ULR_PARAM_SORT_METHOD,
	URL_PARAM_LOAD_PER_PAGE
} from "@/constants";
import { $JustifyEnd } from "@/styles";
import type { CSSProperties } from "react";

export const FilterSection = () => {
	const filterParams = [
		ULR_PARAM_SORT_BY,
		ULR_PARAM_SORT_METHOD,
		URL_PARAM_LOAD_PER_PAGE
	];
	return (
		<div style={$OptionsContainer}>
			{Filters.map((filter, idx) => (
				<OptionDropbox
					paramKey={filterParams[idx]}
					key={filter.filterLabel}
					filter={filter}
				/>
			))}
		</div>
	);
};

const $OptionsContainer: CSSProperties = {
	...$JustifyEnd,
	width: "100%",
	height: "fit-content",
	gap: "2rem"
};
