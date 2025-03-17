import LimitSelect from "@/components/limit-select";
import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { getProducts } from "@/config/products/products.config";
import { Eye, Pencil, Trash } from "lucide-react";
export default async function OutOfStock({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = parseInt(searchParams.limit || "8", 10);

  const products = await getProducts({ page, limit, filter: "expired" });
  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split("-"); // Split the date
    return `${year}-${month}-${day}`; // Reformat to YYYY-MM-DD
  };

  return (
    <div className="border p-6 bg-card rounded-md space-y-4">
      <h1 className="text-2xl font-bold   bg-card/50 text-default-600  ">
        Products List
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SearchInput searchParamKey="name" />
        <LimitSelect />
      </div>
      <ScrollArea className="pb-8  lg:pb-0">
        <Table className="w-[980px] lg:w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Product Name</TableHead>
              <TableHead className="font-semibold"> Category</TableHead>

              <TableHead>Price </TableHead>

              <TableHead>Quantity</TableHead>
              <TableHead>Discount</TableHead>
              <TableHead>Expire</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products?.data?.length > 0 &&
              products.data.map((product: any) => (
                <TableRow key={product.id} className="hover:bg-muted">
                  <TableCell className="font-medium text-card-foreground/80">
                    <div className="flex gap-3 justify-start">
                      <Avatar className="rounded-full">
                        <AvatarImage src={product.image} />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-card-foreground">
                        {product.name}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    {product.stock === 0 ? (
                      <span className="text-destructive">Out of stock</span>
                    ) : (
                      product.stock
                    )}
                  </TableCell>

                  <TableCell>{product.discount}%</TableCell>
                  <TableCell className="font-medium">
                    {new Date(formatDate(product.expire)) < new Date() ? (
                      <span className="text-destructive">Expired</span>
                    ) : (
                      product.expire
                    )}
                  </TableCell>

                  <TableCell className="flex justify-end">
                    <div className="flex gap-3">
                      <Button
                        size="icon"
                        variant="outline"
                        color="secondary"
                        className="h-7 w-7"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-7 w-7"
                        color="secondary"
                      >
                        <Eye className="h-4 w-4" />
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
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {products?.pagination?.totalRecords > products?.pagination?.perPage && (
        <div>
          <Pagination
            currentPage={products?.pagination?.currentPage}
            totalPages={products?.pagination?.totalPages}
          />
        </div>
      )}
    </div>
  );
}
