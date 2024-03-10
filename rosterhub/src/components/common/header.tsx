import { ColumnBox, Logo, RegisterPanel } from "@/components";

export const Header = () => {
	return (
		<ColumnBox
			height="fit-content"
			gap="2rem"
		>
			<Logo />
			<RegisterPanel />
		</ColumnBox>
	);
};
