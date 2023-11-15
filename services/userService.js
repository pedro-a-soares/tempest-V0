import axiosInstance from "../utils/axiosConfig";

const baseUrl = "/users";

export async function profile() {
  const url = `${baseUrl}/me`;
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function updateProfile(profileData) {
  const url = `${baseUrl}/me`;
  try {
    const { data } = await axiosInstance.patch(url, profileData);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
