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

import { Rating } from "@/components/ui/rating";
import { DoctorsRows, doctors } from "../../data";

type TDoctorListProps = {
  className?: string;
};
const DoctorList = ({ className }: TDoctorListProps) => {
  return (
    <Table className="w-[500px]">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">Doctor Name</TableHead>

          <TableHead>Specialty</TableHead>
          <TableHead>Earned</TableHead>
          <TableHead>Reviews</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {doctors.map((item: DoctorsRows) => (
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

            <TableCell>{item.specialty}</TableCell>
            <TableCell>{item.earned}</TableCell>
            <TableCell className="p-0 m-0">
              <Rating value={2} readOnly className="gap-x-0.5 max-w-[100px]" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DoctorList;
