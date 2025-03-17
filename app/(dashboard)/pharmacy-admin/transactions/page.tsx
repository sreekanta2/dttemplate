import Pagination from "@/components/PaginationComponents";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Download, Eye } from "lucide-react";
import InvoiceStats from "../../patient/invoice-list/invoice-stats";

const Invoices = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = parseInt(searchParams.limit || "7", 10);

  // Fetch doctors data based on page and limit
  const invoicesResponse = await getInvoices({ page, limit });

  return (
    <div className=" w-full">
      <div className="border p-4 bg-card rounded-md space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          <InvoiceStats />
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-medium     bg-card/50 text-default-700      ">
            Transactions
          </h1>
          <hr className="my-4" />

          <div className=" max-h-[600px]    ">
            <ScrollArea className="h-fit w-full   ">
              {/* Set a fixed height for vertical scrolling */}
              <div className="m-1 ">
                <Table className=" min-w-full whitespace-nowrap  ">
                  {/* Ensure the table is wider than the container for horizontal scrolling */}
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
                    {invoicesResponse?.data?.length > 0 &&
                      invoicesResponse?.data.map((item: any) => (
                        <TableRow key={item.id} className="hover:bg-muted">
                          <TableCell>{item.invoiceNumber} </TableCell>
                          <TableCell className="font-medium text-card-foreground/80">
                            <div className="flex gap-3 items-center">
                              <Avatar className="rounded-full">
                                <AvatarImage src={item.billTo.image} />
                                <AvatarFallback>
                                  {item?.billTo.name.charAt(0)}
                                  {item?.billTo.name.split(" ")[1]?.charAt(0) ||
                                    ""}
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
              {/* Add horizontal scrollbar */}
              <ScrollBar orientation="vertical" />{" "}
              {/* Add vertical scrollbar */}
            </ScrollArea>
            {invoicesResponse?.pagination?.totalRecords >
              invoicesResponse?.pagination?.perPage && (
              <div>
                <Pagination
                  currentPage={invoicesResponse?.pagination?.currentPage}
                  totalPages={invoicesResponse?.pagination?.totalPages}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
