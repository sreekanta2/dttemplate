"use client";

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
import { Icon } from "@iconify/react";
import { orderData, OrderRows } from "../../data";

export default function PharmacyOrder() {
  return (
    <Table className="w-[800px] lg:w-full">
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
        {orderData.map((order: OrderRows) => (
          <TableRow key={order.id} className="hover:bg-muted">
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.batchNumber}</TableCell>
            <TableCell>${order.price?.toFixed(2) || "N/A"}</TableCell>
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
                color={order.prescriptionRequired ? "destructive" : "success"}
              >
                {order.prescriptionRequired ? "Required" : "Not Required"}
              </Badge>
            </TableCell>

            <TableCell className="flex justify-start">
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="h-7 w-7">
                  <Icon icon="heroicons:pencil" className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-7 w-7">
                  <Icon icon="heroicons:eye" className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-7 w-7"
                  color="destructive"
                >
                  <Icon icon="heroicons:trash" className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
