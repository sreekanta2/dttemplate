"use client";

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
import { productCategories } from "../../data";

export default function PharmacyAdminProducts() {
  return (
    <Table className="w-[980px] lg:w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">Name</TableHead>
          <TableHead className="font-semibold"> Category</TableHead>
          <TableHead className="font-semibold"> Created date</TableHead>

          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {productCategories.map(
          (category: { value: string; label: string }, index) => (
            <TableRow key={category.label} className="hover:bg-muted">
              <TableCell>{category.label}</TableCell>

              <TableCell>
                {new Date(
                  Date.now() - index * 10 * 86400000
                ).toLocaleDateString()}
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
          )
        )}
      </TableBody>
    </Table>
  );
}
