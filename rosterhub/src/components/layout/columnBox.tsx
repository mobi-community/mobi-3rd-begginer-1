import { $DirectionColumn, $SizeFull } from "@/styles";
import { ReactNode } from "react";

type ColumnBoxProps = {
	width?: string;
	height?: string;
	backgroundColor?: string;
	gap?: string;
	children: ReactNode;
};

export const ColumnBox = ({
	width = "100%",
	height = "100%",
	backgroundColor = "transparent",
	gap = "0",
	children,
	...rest
}: ColumnBoxProps) => {
	return (
		<div
			style={{
				...$SizeFull,
				...$DirectionColumn,
				width,
				height,
				gap,
				backgroundColor
			}}
			{...rest}
		>
			{children}
		</div>
	);
};
