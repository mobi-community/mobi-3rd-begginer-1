import { HighlightText } from "@/components/common";
import { COLOR, FONT_WEIGHT } from "@/styles";

export const Logo = () => {
	const logoSize = "5rem";
	return (
		<h1 style={{ fontSize: logoSize }}>
			<HighlightText
				fontSize={logoSize}
				color={COLOR.brand.ocher}
				fontWeight={FONT_WEIGHT.bold}
			>
				R
			</HighlightText>
			oster
			<HighlightText
				fontSize={logoSize}
				color={COLOR.brand.marieRouge}
				fontWeight={FONT_WEIGHT.bold}
			>
				H
			</HighlightText>
			ub
		</h1>
	);
};
