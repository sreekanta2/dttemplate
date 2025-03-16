import { api } from "@/config/axios.config";

export const getBlogs = async ({
  page = 1,
  limit = 5,
}: {
  page: number;
  limit: number;
}) => {
  try {
    const response = await api.get(`/blogs?page=${page}&limit=${limit}`);
    return response?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
export const getBlog = async (blogId: string, page: number, limit: number) => {
  try {
    const response = await api.get(
      `/blogs/${blogId}?page=${page}&limit=${limit}`
    );
    return response?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
