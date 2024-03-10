import { KeyValueTexts } from "@/components";
import { useSearchSingleValue } from "@/hooks";
import {
	$DirectionColumn,
	$FlexCenter,
	$SizeFull,
	BORDER_RADIUS,
	COLOR,
	FONT_SIZE
} from "@/styles";
import type { FilterType } from "@/types";
import type { CSSProperties } from "react";
import { useState } from "react";

type OptionBoxProps = {
	paramKey: string;
	filter: FilterType;
};

export const OptionDropbox = ({ paramKey, filter }: OptionBoxProps) => {
	const [isUnfolding, setIsUnfolding] = useState(false);
	const { getValue: getCurOption, updateValue: updateOption } =
		useSearchSingleValue(paramKey);

	const onHandleFolding = () => {
		setIsUnfolding((prev) => !prev);
	};
	const onClickOption = (selectedOption: string) => {
		updateOption(selectedOption);
		setIsUnfolding((prev) => !prev);
	};

	const optionLabelValueMap: { [key: string]: string } = {};
	filter.options.map((option) => {
		const label = option.label;
		const value = option.value;
		optionLabelValueMap[value] = label;
	});

	return (
		<div style={$Container}>
			<div
				style={$SelectedOption}
				onClick={onHandleFolding}
			>
				<KeyValueTexts
					keyText={filter.filterLabel}
					keyColor={COLOR.grayScale[70]}
					keySize={FONT_SIZE.tiny}
					valueText={optionLabelValueMap[getCurOption(filter.options[0].value)]}
					valueColor={COLOR.grayScale[100]}
					valueSize={FONT_SIZE.small}
					gap="0.5rem"
				/>
			</div>

			{isUnfolding &&
				filter.options.map((option, idx) => {
					return (
						<div
							key={idx}
							style={{
								...$UnfoldingOption,
								top: `${(idx + 1) * 120}%`
							}}
							onClick={() => {
								onClickOption(option.value);
							}}
						>
							{option.label}
						</div>
					);
				})}
		</div>
	);
};

const $Container: CSSProperties = {
	position: "relative",
	width: "10rem",
	height: "4.5rem",
	backgroundColor: COLOR.grayScale[21],
	borderRadius: BORDER_RADIUS.middle
};

const $SelectedOption: CSSProperties = {
	...$FlexCenter,
	...$SizeFull,
	cursor: "pointer"
};

const $UnfoldingOption: CSSProperties = {
	...$DirectionColumn,
	...$FlexCenter,
	...$SizeFull,
	position: "absolute",
	zIndex: 1,
	backgroundColor: COLOR.grayScale[100],
	border: `0.1rem solid ${COLOR.grayScale[21]}`,
	borderRadius: BORDER_RADIUS.small,
	textAlign: "center",
	fontSize: FONT_SIZE.tiny,
	cursor: "pointer"
};
