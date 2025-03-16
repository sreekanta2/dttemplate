"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fragment } from "react";
import InvoiceTableList from "./invoice-list-table";
import InvoiceStats from "./invoice-stats";
const InvoiceListPage = () => {
  return (
    <Fragment>
      <Card className="mt-6">
        <CardHeader className="flex-row items-center border-none mb-0">
          <CardTitle className="flex-1 text-xl font-medium text-default-900">
            Invoice Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            <InvoiceStats />
          </div>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardContent className="p-6">
          <InvoiceTableList />
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default InvoiceListPage;
