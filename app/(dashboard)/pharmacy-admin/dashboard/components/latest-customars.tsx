"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { customersData, CustomersRows } from "../../data";

export default function LatestCustomers() {
  return (
    <Table className="w-[980px] lg:w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">#</TableHead>
          <TableHead className="font-semibold"> Name</TableHead>

          <TableHead>Address </TableHead>

          <TableHead>Phone</TableHead>
          <TableHead>email</TableHead>
          <TableHead>Date Added</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {customersData.map((customer: CustomersRows) => (
          <TableRow key={customer.id} className="hover:bg-muted">
            <TableCell>{customer.id}</TableCell>
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 justify-start">
                <Avatar className="rounded-full">
                  <AvatarImage src={customer.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {customer.name}
                </span>
              </div>
            </TableCell>

            <TableCell>
              {customer.details.city} , {customer.details.address}
            </TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell>{customer.email}</TableCell>

            <TableCell>{customer.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
