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
import { AppointmentRows, appointments } from "../../data";

const AppointmentList = () => {
  return (
    <Table className="w-[880px] lg:w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">Doctor Name</TableHead>

          <TableHead>Specialty </TableHead>
          <TableHead>Patient Name</TableHead>
          <TableHead>Appointment Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {appointments.map((appointment: AppointmentRows) => (
          <TableRow key={appointment.id} className="hover:bg-muted">
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 appointments-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={appointment.doctor.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {appointment.doctor.name}
                </span>
              </div>
            </TableCell>

            <TableCell>{appointment.doctor.specialty}</TableCell>
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 appointments-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={appointment.patient.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {appointment.patient.name}
                </span>
              </div>
            </TableCell>
            <TableCell>
              {appointment.appointmentDate
                ? new Date(
                    appointment.appointmentDate * 1000
                  ).toLocaleDateString("en-GB")
                : "N/A"}
            </TableCell>

            <TableCell>
              <Badge
                variant="soft"
                color={
                  (appointment.appointmentStatus === "confirm" && "default") ||
                  (appointment.appointmentStatus === "cancelled" &&
                    "destructive") ||
                  (appointment.appointmentStatus === "pending" && "warning") ||
                  (appointment.appointmentStatus === "completed" &&
                    "success") ||
                  "default"
                }
                className=" capitalize"
              >
                {appointment.appointmentStatus}
              </Badge>
            </TableCell>
            <TableCell>{appointment.appointmentAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AppointmentList;
