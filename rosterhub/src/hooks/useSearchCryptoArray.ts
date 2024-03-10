import { arrayDecoder, arrayEncoder } from "@/utils";
import { useSearchParams } from "react-router-dom";

export const useSearchCryptoArray = <T>(urlParamKey: string) => {
	const [params, setParams] = useSearchParams();
	/** 조회 */
	const getArray = (): T[] => {
		const encodedArray = params.get(urlParamKey);
		if (!encodedArray) return [];
		return arrayDecoder<T>(encodedArray);
	};
	/** 추가 */
	const addElementOne = (newElement: T) => {
		const encodedArray = params.get(urlParamKey);
		if (!encodedArray) {
			params.set(urlParamKey, arrayEncoder<T>([newElement]));
		} else {
			const originArray = arrayDecoder<T>(encodedArray);
			params.set(urlParamKey, arrayEncoder<T>([...originArray, newElement]));
		}
		setParams(params);
	};
	return { getArray, addElementOne };
};
