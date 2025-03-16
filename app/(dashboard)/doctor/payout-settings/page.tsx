import Pagination from "@/components/PaginationComponents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getInvoices } from "@/config/invoices/invoices.config";
import { BadgeCheck, Download, Eye } from "lucide-react";
import EditForm from "./components/edit-form";

const RequestPageView = async ({
  searchParams,
}: {
  searchParams: { [key: string]: "accounts" | "refaunds" };
}) => {
  const headers = [
    "ID",
    "TXID",
    "Date",
    "Status",
    "Amount",
    "Payment system",
    "Action",
  ];
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 5;

  // Fetch doctors data based on page and limit
  const invoicesResponse = await getInvoices({ page, limit });

  return (
    <div className="space-y-6   bg-card p-6 rounded-md">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4 bg-primary p-6 rounded-md text-default-50">
          <h1 className="text-2xl font-semibold ">Payout Settings</h1>
          <p className="text-sm  ">
            All the earning will be sent to below selected payout method
          </p>

          <div className="flex gap-8     ">
            <div className="flex gap-4 w-36 h-28 bg-default-100 rounded-md flex-col items-center py-4 relative ">
              <p className="text-2xl text-primary font-semibold border-b pb-1">
                Paypal
              </p>
              <EditForm />
              <BadgeCheck
                size={20}
                strokeWidth={2}
                fill="green"
                className="text-default-50 absolute -top-2 -right-1"
              />
            </div>
            <div className="flex gap-4 w-36 h-28 bg-default-100 rounded-md flex-col items-center py-4 relative ">
              <p className="text-2xl text-primary  font-semibold border-b pb-1">
                Stripe
              </p>
              <EditForm />
              <BadgeCheck
                size={20}
                strokeWidth={2}
                fill="green"
                className="text-default-50 absolute -top-2 -right-1"
              />
            </div>
          </div>
        </div>

        <div className="my-8">
          <div className=" w-full">
            <h1 className="text-lg my-2">Transactions</h1>
            <hr className="" />
            <div className="  py-4 ">
              <ScrollArea className="h-fit w-full   ">
                {/* Set a fixed height for vertical scrolling */}
                <div className="m-1 ">
                  <Table className=" min-w-full whitespace-nowrap  ">
                    {/* Ensure the table is wider than the container for horizontal scrolling */}
                    <TableHeader>
                      <TableRow>
                        {headers.map((header, index) => (
                          <TableHead key={index} className="w-[100px]">
                            {header}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoicesResponse?.data?.length > 0 &&
                        invoicesResponse?.data?.map((item: any) => (
                          <TableRow key={item.id} className="hover:bg-muted">
                            <TableCell>{item.invoiceNumber} </TableCell>
                            <TableCell className="font-medium text-card-foreground/80">
                              KJDOO1540L
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
                                className=" capitalize"
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
                        ))}
                    </TableBody>
                  </Table>
                </div>
                <ScrollBar orientation="horizontal" />{" "}
              </ScrollArea>
            </div>
          </div>

          {/* Pagination Component */}
          {invoicesResponse?.pagination?.totalRecords >
            invoicesResponse?.pagination?.perPage && (
            <div className="mt-4">
              <Pagination
                currentPage={invoicesResponse?.pagination?.currentPage}
                totalPages={invoicesResponse?.pagination?.totalPages}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestPageView;
