import { getInvoices } from "@/app/api/invoices/invoices.config";
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
import { Download, Eye } from "lucide-react";

const MedicalRecordsTable = async () => {
  const page = 1;
  const limit = 2;

  // Fetch doctors data based on page and limit
  const invoicesResponse = await getInvoices({ page, limit });

  return (
    <div className="m-1 ">
      <Table className=" min-w-full whitespace-nowrap  ">
        {/* Ensure the table is wider than the container for horizontal scrolling */}
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">INID</TableHead>
            <TableHead>Patient Name</TableHead>
            <TableHead>Payment Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoicesResponse?.data?.length > 0 &&
            invoicesResponse?.data.map((item: any) => (
              <TableRow key={item.id} className="hover:bg-muted">
                <TableCell>{item.invoiceNumber} </TableCell>
                <TableCell className="font-medium text-card-foreground/80">
                  <div className="flex gap-3 items-center">
                    <Avatar className="rounded-full">
                      <AvatarImage src={item.billTo.image} />
                      <AvatarFallback>
                        {item?.billTo.name.charAt(0)}
                        {item?.billTo.name.split(" ")[1]?.charAt(0) || ""}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-card-foreground">
                      {item.billTo.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{item.paymentDate}</TableCell>
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

                <TableCell>{item.amount}</TableCell>

                <TableCell>{item.paymentMethod}</TableCell>
                <TableCell className="flex justify-start">
                  <div className="flex gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      color="success"
                      className="h-7 w-7"
                    >
                      <Download className="h-4 w-4" />
                    </Button>

                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      color="secondary"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MedicalRecordsTable;
