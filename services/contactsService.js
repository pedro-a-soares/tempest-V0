import axiosInstance from "../utils/axiosConfig";

const baseUrl = "/contacts";

export async function contacts() {
  const url = `${baseUrl}`;
  try {
    const { data } = await axiosInstance.get(url);
    const { contacts } = data;
    return contacts;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function addContact(handle) {
  const url = `${baseUrl}`;
  try {
    const { data } = await axiosInstance.post(url, { contact: handle });
    const { contacts } = data;
    return contacts;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
