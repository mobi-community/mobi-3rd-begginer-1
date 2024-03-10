import CryptoJS from "crypto-js";

export const arrayEncoder = <T>(originArray: T[]): string => {
	const jsonString = JSON.stringify(originArray);
	const encryptedString = CryptoJS.AES.encrypt(
		jsonString,
		"tmp-encoder-salt"
	).toString();
	return encryptedString;
};
export const arrayDecoder = <T>(encryptedString: string): T[] => {
	const bytes = CryptoJS.AES.decrypt(encryptedString, "tmp-encoder-salt");
	const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
	const originArray = JSON.parse(decryptedString);
	return originArray;
};
