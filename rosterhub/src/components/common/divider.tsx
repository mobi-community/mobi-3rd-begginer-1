import { BORDER_RADIUS, COLOR } from "@/styles";
import type { CSSProperties } from "react";

type DividerProps = {
	direction?: "horizontal" | "vertical";
	length?: string;
	thickness?: string;
};

export const Divider = ({
	direction = "horizontal",
	length = "1rem",
	thickness = "0.3rem"
}: DividerProps) => {
	return (
		<div
			style={{
				...$Divider,
				...(direction === "horizontal" && { width: length, height: thickness }),
				...(direction === "vertical" && { width: thickness, height: length })
			}}
		/>
	);
};

const $Divider: CSSProperties = {
	backgroundColor: COLOR.grayScale[70],
	borderRadius: BORDER_RADIUS.small
};
