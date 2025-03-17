import LimitSelect from "@/components/limit-select";
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

import { TUser } from "@/config/user/data";
import { getUsers } from "@/config/user/user.config";

export default async function LatestCustomers({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // If searchParams is a plain object, get the page param
  const page = parseInt(searchParams.page || "1", 10);

  const limit = parseInt(searchParams.limit || "10", 10);

  // Fetch doctors data based on page and limit
  const usersResponse = await getUsers({ page, limit });
  // console.log(doctorsResponse?.data?.length);
  return (
    <div className="border p-6 bg-card rounded-md space-y-4">
      <h1 className="text-2xl font-bold   bg-card/50 text-default-600     ">
        Customers List
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SearchInput searchParamKey="name" />
        <LimitSelect />
      </div>
      <ScrollArea className="pb-4">
        <Table className="min-w-full  whitespace-nowrap">
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
            {usersResponse?.data?.length > 0 &&
              usersResponse?.data.map((customer: TUser) => (
                <TableRow key={customer.id} className="hover:bg-muted">
                  <TableCell>{customer.id}</TableCell>
                  <TableCell className="font-medium text-card-foreground/80">
                    <div className="flex gap-3 justify-start">
                      <Avatar className="rounded-full">
                        <AvatarImage src={customer.image} />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-card-foreground">
                        {customer.name}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell>
                    {customer?.addresses?.city} , {customer?.addresses?.address}
                  </TableCell>
                  <TableCell>{customer.phoneNumber}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
      {usersResponse?.pagination?.totalRecords >
        usersResponse?.pagination?.perPage && (
        <div className="">
          <Pagination
            currentPage={usersResponse?.pagination?.currentPage}
            totalPages={usersResponse?.pagination?.totalPages}
          />
        </div>
      )}
    </div>
  );
}
