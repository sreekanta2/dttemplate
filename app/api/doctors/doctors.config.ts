import { api } from "@/config/axios.config";

export const getDoctors = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  try {
    const response = await api.get(`/doctors?page=${page}&limit=${limit}`);
    return response?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
export const getDoctor = async (doctoId: string) => {
  try {
    const response = await api.get(`/doctors/${doctoId}`);
    return response?.data?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
