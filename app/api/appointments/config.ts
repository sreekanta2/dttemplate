import { api } from "@/config/axios.config";

export const getAppointments = async ({
  page,
  limit,
  completed,
}: {
  page: number;
  limit: number;
  completed?: boolean;
}) => {
  try {
    const response = await api.get(
      `/appointments?completed=${completed}&page=${page}&limit=${limit}`
    );
    return response?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
export const getDoctor = async (doctoId: string) => {
  try {
    const response = await api.get(`/appointments/${doctoId}`);
    return response?.data?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
