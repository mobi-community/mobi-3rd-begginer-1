import { $SizeFull } from "@/styles";
import type { ReactNode } from "react";

type MaxSizeBoxProps = {
	maxWidth?: string;
	maxHeight?: string;
	backgroundColor?: string;
	children: ReactNode;
};

export const MaxSizeBox = ({
	maxWidth = "100%",
	maxHeight = "100%",
	backgroundColor = "transparent",
	children,
	...rest
}: MaxSizeBoxProps) => {
	return (
		<div
			style={{
				...$SizeFull,
				maxWidth,
				maxHeight,
				backgroundColor
			}}
			{...rest}
		>
			{children}
		</div>
	);
};
