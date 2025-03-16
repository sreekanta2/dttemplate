import { api } from "@/config/axios.config";

export const getPatients = async ({
  page,
  limit,
  status,
}: {
  page: number;
  limit: number;
  status?: boolean;
}) => {
  try {
    const response = await api.get(
      `/patients?status=${status}&page=${page}&limit=${limit}`
    );
    return response?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
export const getPatient = async (doctoId: string) => {
  try {
    const response = await api.get(`/patients/${doctoId}`);
    return response?.data?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
