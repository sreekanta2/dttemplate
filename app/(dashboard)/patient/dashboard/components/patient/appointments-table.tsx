"use client"; // Convert to client component

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAppointments } from "@/config/appointments/appointments.config";
import { Download, Eye } from "lucide-react";
import { useEffect, useState } from "react";

const AppointmentTable = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [invoicesResponse, setInvoicesResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Fetch invoices data based on page and limit
  const fetchInvoices = async () => {
    setLoading(true);
    try {
      const response = await getAppointments({ page, limit });
      setInvoicesResponse(response.data);
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch invoices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [page, limit]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="m-1">
      <Table className="min-w-full whitespace-nowrap">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">INID</TableHead>
            <TableHead>Patient Name</TableHead>
            <TableHead>Payment Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : invoicesResponse?.data?.length > 0 ? (
            invoicesResponse.data.map((item: any) => (
              <TableRow key={item.id} className="hover:bg-muted">
                <TableCell>{item.invoiceNumber}</TableCell>
                <TableCell className="font-medium text-card-foreground/80">
                  <div className="flex gap-3 items-center">
                    <Avatar className="rounded-full">
                      <AvatarImage src={item.billTo.image} />
                      <AvatarFallback>
                        {item?.billTo.name.charAt(0)}
                        {item?.billTo.name.split(" ")[1]?.charAt(0) || ""}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-card-foreground">
                      {item.billTo.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{item.paymentDate}</TableCell>
                <TableCell>
                  <Badge
                    variant="soft"
                    color={
                      (item.status === "Paid" && "success") ||
                      (item.status === "Unpaid" && "destructive") ||
                      "default"
                    }
                    className="capitalize"
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.paymentMethod}</TableCell>
                <TableCell className="flex justify-start">
                  <div className="flex gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      color="success"
                      className="h-7 w-7"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      color="secondary"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-end gap-2 mt-4">
        <Button
          onClick={handlePreviousPage}
          disabled={page === 1 || loading}
          variant="outline"
        >
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={
            !invoicesResponse?.data ||
            invoicesResponse.data.length < limit ||
            loading
          }
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AppointmentTable;
