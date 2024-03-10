import { CenterBox, KeyValueTexts } from "@/components";
import {
	$AlignCenter,
	$SizeFull,
	BORDER_RADIUS,
	COLOR,
	FONT_SIZE
} from "@/styles";
import type { CSSProperties } from "react";

type PersonnelCardProps = {
	id: number;
	name: string;
	phoneNumberText: string;
	birthDayText: string;
	themeColor: string;
};

export const PersonnelCard = ({
	id,
	name,
	phoneNumberText,
	birthDayText,
	themeColor
}: PersonnelCardProps) => {
	return (
		<div style={$Container}>
			<div style={{ ...$IdentificationContainer, backgroundColor: themeColor }}>
				<h1 style={$IdHazyText}>#{id}</h1>
				<CenterBox>
					<h4 style={$IdCompleteText}>#{id}</h4>
				</CenterBox>
			</div>
			<div style={$PersonnelWrapper}>
				<KeyValueTexts
					keyText={"이름"}
					valueText={name}
					width="30%"
				/>
				<KeyValueTexts
					keyText={"전화번호"}
					valueText={phoneNumberText}
					width="30%"
				/>
				<KeyValueTexts
					keyText={"생년월일"}
					valueText={birthDayText}
					width="30%"
				/>
			</div>
		</div>
	);
};

const $Container: CSSProperties = {
	width: "100%",
	height: "15rem",
	borderRadius: BORDER_RADIUS.big,
	border: `0.3rem solid ${COLOR.grayScale[91]}`,
	backgroundColor: COLOR.grayScale[100],

	display: "grid",
	gridTemplateColumns: "2fr 8fr",
	overflow: "hidden"
};

const $IdentificationContainer: CSSProperties = {
	position: "relative",
	overflow: "hidden"
};

const $IdHazyText: CSSProperties = {
	position: "absolute",
	fontSize: "8rem",
	color: "rgba(230, 230, 230, 0.5)",
	top: "-18%",
	left: "-5%",
	textAlign: "center"
};

const $IdCompleteText: CSSProperties = {
	fontSize: FONT_SIZE.big,
	color: COLOR.grayScale[28]
};

const $PersonnelWrapper: CSSProperties = {
	...$SizeFull,
	...$AlignCenter,
	justifyContent: "space-around",
	padding: "2rem"
};
