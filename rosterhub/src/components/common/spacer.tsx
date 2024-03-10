type SpacerProps = {
	width?: string;
	height?: string;
};
export const Spacer = ({
	width = "0rem",
	height = "0rem",
	...rest
}: SpacerProps) => {
	return (
		<div
			style={{ ...$Spacer, width, height }}
			{...rest}
		/>
	);
};

const $Spacer = {
	display: "inline-block"
};
