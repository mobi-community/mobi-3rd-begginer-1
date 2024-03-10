import { axiosInstance } from "./axios-instance";

export const getUserInfo = async () => {
    const response = await axiosInstance.get("나머지 URL");
    return response.data;
};
