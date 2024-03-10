import { $SizeFull } from "@/styles";
import type { ReactNode } from "react";

type SymmetricalPaddedBoxProps = {
	horizontal?: string;
	vertical?: string;
	children: ReactNode;
};

export const SymmetricalPaddedBox = ({
	horizontal = "0rem",
	vertical = "0rem",
	children,
	...rest
}: SymmetricalPaddedBoxProps) => {
	return (
		<div
			style={{
				...$SizeFull,
				padding: `${vertical} ${horizontal}`
			}}
			{...rest}
		>
			{children}
		</div>
	);
};
