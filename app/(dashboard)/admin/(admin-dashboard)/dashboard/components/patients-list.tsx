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

import { Badge } from "@/components/ui/badge";
import { PatientsRows, patients } from "../../data";

const PatientsList = () => {
  return (
    <Table className="w-[550px]">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">Patient Name</TableHead>

          <TableHead>Phone </TableHead>
          <TableHead>Last Visit</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {patients.map((item: PatientsRows) => (
          <TableRow key={item.id} className="hover:bg-muted">
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 items-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {item.name}
                </span>
              </div>
            </TableCell>

            <TableCell>{item.phone}</TableCell>
            <TableCell>
              {item.lastVisit
                ? new Date(item.lastVisit * 1000).toLocaleDateString("en-GB")
                : "N/A"}
            </TableCell>

            <TableCell>
              <Badge
                variant="soft"
                color={
                  (item.status === "paid" && "success") ||
                  (item.status === "unpaid" && "destructive") ||
                  (item.status === "refund" && "warning") ||
                  "default"
                }
                className=" capitalize"
              >
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PatientsList;
