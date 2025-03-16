import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getMedicalRecords } from "@/config/medical-records/config";
import { MedicalRecordsForm } from "./components/add-medical-records";
import { MedicalRecordsUpdateForm } from "./components/update-form";

const MedicalRecordPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = parseInt(searchParams?.page || "1", 10);

  const mededicalRecords = await getMedicalRecords({ page, limit: 5 });
  return (
    <div className="border rounded-md p-6 bg-card space-y-6">
      <div className="flex items-center justify-between border-none pb-0">
        <h1 className="text-2xl"> Dependents </h1>

        <SearchInput searchParamKey="search" />
        <MedicalRecordsForm />
      </div>
      <hr className="my-2" />

      <ScrollArea className="w-full">
        <Table className="min-w-full whitespace-nowrap">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Record ID</TableHead>

              <TableHead>Date of Birth</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Doctor</TableHead>

              <TableHead>Created Time</TableHead>

              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mededicalRecords?.data?.map((record) => (
              <TableRow key={record.id} className="hover:bg-muted">
                <TableCell>MR-00{record?.id}</TableCell>

                <TableCell>{record?.dateOfBirth}</TableCell>
                <TableCell>{record?.gender}</TableCell>
                <TableCell className="font-medium text-card-foreground/80">
                  <div className="flex gap-3 items-center">
                    <Avatar className="rounded-full">
                      <AvatarImage src={""} />
                      <AvatarFallback>
                        {record?.doctorName?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-card-foreground">
                      {record?.doctorName}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(record?.createdAt).toLocaleString()}
                </TableCell>

                <TableCell className="flex justify-start">
                  <MedicalRecordsUpdateForm />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {/* Pagination Controls */}
      {mededicalRecords?.pagination?.totalRecords >
        mededicalRecords?.pagination?.perPage && (
        <div className="mt-4">
          <Pagination
            currentPage={mededicalRecords?.pagination?.currentPage}
            totalPages={mededicalRecords?.pagination?.totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default MedicalRecordPage;
