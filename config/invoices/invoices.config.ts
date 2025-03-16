import { api } from "@/config/axios.config";
import { invoices } from "./data";

export const getInvoices = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = invoices.slice(startIndex, endIndex);
  const totalRecords = invoices.length;
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
export const getInvoice = async (invoiceId: string) => {
  try {
    const response = await api.get(`/invoices/${invoiceId}`);
    return response?.data?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
