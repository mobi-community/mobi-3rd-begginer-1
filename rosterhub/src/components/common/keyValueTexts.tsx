import { $AlignCenter, $DirectionColumn, COLOR, FONT_SIZE } from "@/styles";

type KeyValueTextsProps = {
	keyText: string;
	keySize?: string;
	keyColor?: string;
	valueText: string;
	valueSize?: string;
	valueColor?: string;
	gap?: string;
	width?: string;
	height?: string;
};

export const KeyValueTexts = ({
	keyText,
	valueText,
	keySize = FONT_SIZE.middle,
	keyColor = COLOR.grayScale[42],
	valueColor = COLOR.grayScale[0],
	valueSize = FONT_SIZE.extreme,
	gap = "0rem",
	width = "fit-content",
	height = "fit-content"
}: KeyValueTextsProps) => {
	return (
		<div style={{ ...$DirectionColumn, ...$AlignCenter, gap, width, height }}>
			<p style={{ color: keyColor, fontSize: keySize }}>{keyText}</p>
			<p style={{ color: valueColor, fontSize: valueSize }}>{valueText}</p>
		</div>
	);
};
