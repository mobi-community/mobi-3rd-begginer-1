import { COLOR, FONT_SIZE, FONT_WEIGHT } from "@/styles";
type HighlightTextProps = {
	color?: string;
	fontSize?: string;
	fontWeight?: number;
	backgroundColor?: string;
	children: string;
};

export const HighlightText = ({
	color = COLOR.grayScale[100],
	fontSize = FONT_SIZE.middle,
	fontWeight = FONT_WEIGHT.regular,
	backgroundColor = "transparent",
	children,
	...rest
}: HighlightTextProps) => {
	return (
		<mark
			style={{ color, fontSize, fontWeight, backgroundColor }}
			{...rest}
		>
			{children}
		</mark>
	);
};
