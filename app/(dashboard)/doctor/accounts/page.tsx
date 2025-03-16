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
import AccountsDetails from "./components/account-details";

const AccountPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: "accounts" | "refaunds" };
}) => {
  const headers = [
    "ID",
    "Profile",
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
  if (invoicesResponse?.status === "fail") {
    return <div>Something went wrong</div>;
  }
  // console.log(doctorsResponse?.data?.length);
  return (
    <div className="space-y-6   p-4 rounded-md bg-card">
      <AccountsDetails />
      <div className="my-8">
        <div className=" w-full">
          <h1 className="text-lg my-2">Invoices</h1>
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
  );
};

export default AccountPage;
