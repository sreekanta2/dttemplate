"use client";

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
import { Icon } from "@iconify/react";
import { transactionsData, TransactionsRows } from "../../data";

export default function TransectionsList() {
  return (
    <Table className="w-[800px] lg:w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">Invoice No</TableHead>
          <TableHead>Product ID</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Total Amount</TableHead>
          <TableHead>Status</TableHead>

          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {transactionsData.map((transaction: TransactionsRows) => (
          <TableRow key={transaction.id} className="hover:bg-muted">
            <TableCell>{transaction.id}</TableCell>
            <TableCell>{transaction.productId}</TableCell>
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 justify-start">
                <Avatar className="rounded-full">
                  <AvatarImage src={transaction.image} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {transaction.productName}
                </span>
              </div>
            </TableCell>
            <TableCell>{transaction.totalAmount}</TableCell>

            <TableCell>
              <Badge
                variant="outline"
                color={
                  (transaction.status === "Paid" && "success") || "default"
                }
                className="capitalize"
              >
                {transaction.status}
              </Badge>
            </TableCell>

            {/* Prescription Required Badge */}

            <TableCell className="flex justify-start">
              <div className="flex gap-3">
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
