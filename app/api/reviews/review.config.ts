import { api } from "@/config/axios.config";

export const getReviews = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  try {
    const response = await api.get(`/reviews?page=${page}&limit=${limit}`);
    return response?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
export const getReview = async (reviewId: string) => {
  try {
    const response = await api.get(`/reviews/${reviewId}`);
    return response?.data?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
