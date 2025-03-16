import { api } from "@/config/axios.config";

export const getProducts = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  try {
    const response = await api.get(`/products?page=${page}&limit=${limit}`);
    return response?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
export const getProduct = async (doctoId: string) => {
  try {
    const response = await api.get(`/products/${doctoId}`);
    return response?.data?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
