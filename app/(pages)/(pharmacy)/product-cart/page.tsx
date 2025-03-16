"use client";
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
import { Icon } from "@iconify/react";

 
import RoutingButton from "../components/routing-button";
import ProductCartHero from "./components/hero";
import { productsData, productsRows } from "./data";

export default function Page() {
  return (
    <div className="bg-background">
      <ProductCartHero />

      <div className="container  py-4">
        <div className="grid  grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Main Table Section */}
          <data className="col-span-3">
            {" "}
            <ScrollArea className="pb-4">
              <Table className="w-[880px] border rounded-md lg:w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">
                      Product Name
                    </TableHead>

                    <TableHead>SKU </TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead> Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {productsData.map((product: productsRows) => (
                    <TableRow key={product.id} className="hover:bg-muted">
                      <TableCell className="font-medium text-card-foreground/80">
                        <div className="flex gap-3 products-center">
                          <Avatar className="rounded-full">
                            <AvatarImage src={product.doctor.avatar} />
                            <AvatarFallback>AB</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-card-foreground">
                            {product.doctor.name}
                          </span>
                        </div>
                      </TableCell>

                      <TableCell>{product.SKU}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>{product.total}</TableCell>
                      <TableCell className="flex justify-start">
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
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </data>
          {/* Sidebar Section */}
          <div className="w-full bg-card  lg:col-span-1 border rounded-md">
            <div className=" p-4 rounded-lg shadow-md w-full lg:max-w-sm">
              <h2 className="text-lg font-bold text-default-800 mb-4">
                Cart Total
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-default-600">Subtotal</span>
                <span className="text-default-800 font-medium">$5,877.00</span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-default-600">Shipping</span>
                <div>
                  <span className="text-default-800 font-medium">$25.00</span>
                  <button className="text-blue-500 text-sm ml-2 hover:underline">
                    Calculate Shipping
                  </button>
                </div>
              </div>

              {/* Tax */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-default-600">Tax</span>
                <span className="text-default-800 font-medium">$0.00</span>
              </div>

              {/* Divider */}
              <hr className="border-default-300 mb-4" />

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-default-800">
                  Total
                </span>
                <span className="text-blue-600 text-xl font-bold">$160</span>
              </div>

              {/* Checkout Button */}
              <RoutingButton
                route="/checkout/product-payment?productName=Phone&price=699&quantity=1&total=699"
                className="mt-4"
              >
                Proceed to Checkout
              </RoutingButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
