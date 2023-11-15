import axiosInstance from "../utils/axiosConfig";

const baseUrl = "/auth";

export async function login(userInfo) {
  const url = `${baseUrl}/login`;
  try {
    const { data } = await axiosInstance.post(url, userInfo);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function register(userInfo) {
  const url = `${baseUrl}/register`;
  try {
    const { data } = await axiosInstance.post(url, userInfo);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
