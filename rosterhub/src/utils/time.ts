export const getTimeStamp = () => new Date().getTime();

export const getFormattedTodayDate = () => {
	const today = new Date();
	const year = today.getFullYear().toString();
	const month = (today.getMonth() + 1).toString().padStart(2, "0");
	const day = today.getDate().toString().padStart(2, "0");
	return year + "-" + month + "-" + day;
};
