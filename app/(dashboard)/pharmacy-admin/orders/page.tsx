import LimitSelect from "@/components/limit-select";
import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
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
import { getOrders } from "@/config/order/config";
import { Order } from "@/config/order/data";
import { Eye, Pencil, Trash } from "lucide-react";

export default async function ProductList({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = parseInt(searchParams.limit || "7", 10);

  const products = await getOrders({ page, limit });

  return (
    <div className="border p-6 bg-card rounded-md space-y-4">
      <h1 className="text-2xl font-bold   bg-card/50 text-default-600  ">
        Order List
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SearchInput searchParamKey="name" />
        <LimitSelect />
      </div>
      <ScrollArea className="pb-8  lg:pb-0">
        <Table className="min-w-full whitespace-nowrap">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Order ID</TableHead>
              <TableHead>Batch No.</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Prescription</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products?.data?.length > 0 &&
              products?.data?.map((order: Order) => (
                <TableRow key={order.orderId} className="hover:bg-muted">
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.batchNo}</TableCell>
                  <TableCell>${order.price || "N/A"}</TableCell>
                  <TableCell>{order.quantity}</TableCell>

                  <TableCell>
                    <Badge
                      variant="outline"
                      color={
                        (order.status === "Shipped" && "info") ||
                        (order.status === "Canceled" && "destructive") ||
                        (order.status === "Pending" && "warning") ||
                        (order.status === "Delivered" && "success") ||
                        "default"
                      }
                      className="capitalize"
                    >
                      {order.status}
                    </Badge>
                  </TableCell>

                  {/* Prescription Required Badge */}
                  <TableCell>
                    <Badge
                      variant="outline"
                      color={order.prescription ? "destructive" : "success"}
                    >
                      {order.prescription ? "Required" : "Not Required"}
                    </Badge>
                  </TableCell>

                  <TableCell className="flex justify-start">
                    <div className="flex gap-3">
                      <Button size="icon" variant="outline" className="h-7 w-7">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="h-7 w-7">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-7 w-7"
                        color="destructive"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {products?.pagination?.totalRecords > products?.pagination?.perPage && (
        <div>
          <Pagination
            currentPage={products?.pagination?.currentPage}
            totalPages={products?.pagination?.totalPages}
          />
        </div>
      )}
    </div>
  );
}
