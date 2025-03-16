import { api } from "@/config/axios.config";

export const getInvoices = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  try {
    const response = await api.get(`/invoices?page=${page}&limit=${limit}`);
    return response?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
export const getInvoice = async (invoiceId: string) => {
  try {
    const response = await api.get(`/invoices/${invoiceId}`);
    return response?.data?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
