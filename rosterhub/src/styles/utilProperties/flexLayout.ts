export const $AlignCenter: React.CSSProperties = {
	display: "flex",
	alignItems: "center"
};
export const $AlignStart: React.CSSProperties = {
	display: "flex",
	alignItems: "start"
};
export const $AlignEnd: React.CSSProperties = {
	display: "flex",
	alignItems: "end"
};
export const $JustifyCenter: React.CSSProperties = {
	display: "flex",
	justifyContent: "center"
};
export const $JustifyStart: React.CSSProperties = {
	display: "flex",
	justifyContent: "start"
};
export const $JustifyEnd: React.CSSProperties = {
	display: "flex",
	justifyContent: "end"
};
export const $FlexCenter: React.CSSProperties = {
	...$AlignCenter,
	...$JustifyCenter
};
export const $FlexStart: React.CSSProperties = {
	...$AlignStart,
	...$JustifyStart
};
export const $FlexEnd: React.CSSProperties = {...$AlignEnd, ...$JustifyEnd};
export const $DirectionColumn: React.CSSProperties = {
	display: "flex",
	flexDirection: "column"
};
