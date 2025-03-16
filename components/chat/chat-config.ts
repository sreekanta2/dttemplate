import { api } from "@/config/axios.config";

export const getContacts = async () => {
  const response = await api.get("/api/chat");
  return response.data;
};

export const getMessages = async (id: any) => {
  try {
    const response = await api.get(`/api/chat/messages/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};
export const deleteMessage = async (obj: any) => {
  try {
    await api.delete(`/api/chat/messages/${obj.selectedChatId}`, { data: obj });
  } catch (error) {
    console.error("Error deleting message:", error);
    // Handle error gracefully (e.g., display an error message to the user)
  }
};

export const getProfile = async () => {
  const response = await api.get("/api/chat/profile-data");
  return response.data;
};

export const sendMessage = async (msg: any) => {
  const response = await api.post("/api/chat/messages", msg);
  return response.data;
};
