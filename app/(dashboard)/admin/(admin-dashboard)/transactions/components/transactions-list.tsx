"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@iconify/react";

import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

export default function TransactionsList({
  transactions = [],
}: {
  transactions: any[];
}) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const selectAllRef = useRef<HTMLButtonElement>(null); // Use HTMLButtonElement

  useEffect(() => {
    if (selectAllRef.current) {
      const checkbox = selectAllRef.current.querySelector("input");
      if (checkbox) {
        checkbox.indeterminate =
          selectedRows.length > 0 && selectedRows.length < transactions.length;
      }
    }
  }, [selectedRows]);

  const handleSelectAll = () => {
    if (selectedRows.length === transactions.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(transactions.map((row: any) => row.id));
    }
  };

  const handleRowSelect = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <Table className="w-[500px] mx-auto lg:w-full">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox
              ref={selectAllRef}
              checked={selectedRows?.length === transactions?.length}
              onCheckedChange={handleSelectAll}
            />
          </TableHead>
          <TableHead className="font-semibold">
            {selectedRows.length > 0 ? (
              <div className="flex gap-2">
                <Button
                  size="xs"
                  variant="outline"
                  className="text-xs"
                  color="destructive"
                >
                  Delete
                </Button>
              </div>
            ) : (
              "Invoice Number"
            )}
          </TableHead>
          <TableHead>Patient Id </TableHead>
          <TableHead>Patient Name </TableHead>

          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {transactions.map((transaction) => (
          <TableRow
            key={transaction?.id}
            className="hover:bg-muted"
            data-state={
              selectedRows.includes(transaction?.id) ? "selected" : undefined
            }
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.includes(transaction?.id)}
                onCheckedChange={() => handleRowSelect(transaction?.id)}
              />
            </TableCell>
            <TableCell>{transaction?.invoiceNumber}</TableCell>
            <TableCell>PI-0{transaction?.id}</TableCell>
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 specialtiys-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={transaction?.bilTo?.image} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {transaction?.image?.name}
                </span>
              </div>
            </TableCell>
            <TableCell>{transaction?.amount}</TableCell>
            <TableCell>
              <Badge
                variant="soft"
                color={
                  (transaction.status === "Paid" && "success") ||
                  (transaction.status === "Unpaid" && "warning") ||
                  "default"
                }
                className=" capitalize"
              >
                {transaction.status}
              </Badge>
            </TableCell>
            <TableCell className="flex justify-start">
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  color="secondary"
                  className="h-7 w-7"
                >
                  <Icon icon="heroicons:pencil" className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-7 w-7"
                  color="secondary"
                >
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
