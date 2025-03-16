import { api } from "@/config/axios.config";
import { blogsData } from "./data";

export const getBlogs = async ({
  page = 1,
  limit = 5,
}: {
  page: number;
  limit: number;
}) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = blogsData.slice(startIndex, endIndex);
  const totalRecords = blogsData.length;
  const totalPages = Math.ceil(totalRecords / limit);

  return {
    status: "success",
    message: "Successfully fetched data",
    data: paginatedData,
    pagination: {
      totalRecords,
      totalPages,
      currentPage: page,
      perPage: limit,
      hasNextPage: endIndex < totalRecords,
      hasPrevPage: startIndex > 0,
    },
  };
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
