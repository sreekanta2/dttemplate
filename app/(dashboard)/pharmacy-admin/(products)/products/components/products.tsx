"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@iconify/react";
import { productsData, ProductsRows } from "../../../data";

export default function PharmacyAdminProducts() {
  return (
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
        {productsData.map((product: ProductsRows) => (
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
            <TableCell>{product.quantity}</TableCell>

            <TableCell>{product.discount}%</TableCell>
            <TableCell className="text-destructive">
              {!product.expire ? "THIS PRODUCT EXPIRE" : ""}
            </TableCell>

            <TableCell className="flex justify-end">
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
