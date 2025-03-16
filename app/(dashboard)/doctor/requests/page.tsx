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
import { getAppointments } from "@/config/appointments/appointments.config";
import { Check, Trash } from "lucide-react";
const RequestPatient = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = parseInt(searchParams?.page || "1", 10);

  const limit = 6;
  // Fetch doctors data based on page and limit
  const appointments = await getAppointments({ page, limit });
  // console.log(appointments.pagination);

  return (
    <div className=" w-full">
      <div className="border p-4 bg-card rounded-md space-y-2">
        <h1 className="text-lg md:text-xl font-medium     bg-card/50 text-default-700      ">
          Requests Appointments
        </h1>
        <hr className="" />
        <div className="    pb-4 ">
          <ScrollArea className="h-fit w-full   ">
            {/* Set a fixed height for vertical scrolling */}
            <div className="m-1 ">
              <Table className=" min-w-full  whitespace-nowrap ">
                {/* Ensure the table is wider than the container for horizontal scrolling */}
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">
                      Patient Name
                    </TableHead>
                    <TableHead>Status</TableHead>

                    <TableHead>Appointment Type</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments?.data?.map((item: any) => (
                    <TableRow key={item.id} className="hover:bg-muted">
                      <TableCell className="font-medium text-card-foreground/80">
                        <div className="flex gap-3 items-center">
                          <Avatar className="rounded-full">
                            <AvatarImage src={item.image} />
                            <AvatarFallback>
                              {item?.patientName?.charAt(0)}
                              {item?.patientName?.split(" ")[1]?.charAt(0) ||
                                ""}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col justify-between">
                            <span className="text-sm text-card-foreground">
                              {item.patientName}
                            </span>
                            <span className="text-sm text-card-foreground">
                              APT{item.id}
                            </span>
                          </div>
                        </div>
                      </TableCell>
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

                      <TableCell>{item.department}</TableCell>
                      <TableCell>
                        {item.appointmentDate} - {item.appointmentTime}
                      </TableCell>

                      <TableCell>{item.contact}</TableCell>
                      <TableCell className="flex justify-end">
                        <div className="flex gap-3">
                          <Button
                            size="icon"
                            variant="outline"
                            color="success"
                            className="h-7 w-7"
                          >
                            <Check className="h-4 w-4" />
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
            </div>
            <ScrollBar orientation="horizontal" />{" "}
          </ScrollArea>
          {appointments?.pagination?.totalRecords >
            appointments?.pagination?.perPage && (
            <div className="mt-4">
              <Pagination
                currentPage={appointments?.pagination?.currentPage}
                totalPages={appointments?.pagination?.totalPages}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestPatient;
