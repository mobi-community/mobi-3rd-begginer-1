import { BORDER_RADIUS, COLOR } from "@/styles/tokens";
import { $FlexCenter } from "@/styles/utilProperties";
import type { ButtonHTMLAttributes, CSSProperties } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	backgroundColor?: string;
	children?: string;
};
export const Button = ({
	children,
	backgroundColor = COLOR.brand.orange,
	...rest
}: ButtonProps) => {
	return (
		<button
			style={{ ...$Button, backgroundColor }}
			{...rest}
		>
			{children}
		</button>
	);
};
const $Button: CSSProperties = {
	...$FlexCenter,
	width: "fit-content",
	minWidth: "4rem",
	height: "fit-content",
	minHeight: "4rem",
	padding: "1rem 1.5rem",
	color: COLOR.grayScale[100],
	borderRadius: BORDER_RADIUS.middle
};
