import { CenterBox, MaxSizeBox, SymmetricalPaddedBox } from "@/components";
import type { ReactNode } from "react";

type MainStructureProps = {
	children: ReactNode;
};

export const MainStructure = ({ children }: MainStructureProps) => {
	return (
		<SymmetricalPaddedBox
			vertical="2rem"
			horizontal="4rem"
		>
			<CenterBox
				height="100%"
				direction="both"
			>
				<MaxSizeBox maxWidth="1080px">{children}</MaxSizeBox>
			</CenterBox>
		</SymmetricalPaddedBox>
	);
};
