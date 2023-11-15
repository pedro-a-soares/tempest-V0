import axiosInstance from "../utils/axiosConfig";

const baseUrl = "/chats";

export async function getMessages(handle) {
  const url = `${baseUrl}/read`;
  try {
    const { data } = await axiosInstance.post(url, { contact: handle });
    const { chat } = data;
    return chat;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function sendMessage(message) {
  const url = `${baseUrl}/send`;
  try {
    const { data } = await axiosInstance.post(url, message);
    const { chat } = data;
    return chat;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
