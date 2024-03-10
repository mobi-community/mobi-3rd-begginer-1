import "@/assets/fonts/font.css";
import { CSSProperties, ReactNode } from "react";
import "./index.css";
import { COLOR, FONT_WEIGHT } from "./tokens";

type GlobalStylesProps = {
	children: ReactNode;
};

const GlobalStyles = ({ children }: GlobalStylesProps) => {
	return <div style={$GlobalProperties}>{children}</div>;
};

export default GlobalStyles;

const $GlobalProperties: CSSProperties = {
	width: "fit-content",
	minWidth: "100%",
	height: "fit-content",
	minHeight: "100vh",

	fontWeight: FONT_WEIGHT.regular,

	color: COLOR.grayScale[0],
	backgroundColor: COLOR.grayScale[100]
};
