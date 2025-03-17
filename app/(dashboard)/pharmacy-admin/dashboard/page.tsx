import DashboardSelect from "@/components/dashboard-select";
import DatePickerWithRange from "@/components/date-picker-with-range";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LatestCustomers from "./components/latest-customars";
import SplineArea from "./components/line-chart";
import PharmacyAdminStats from "./components/ph-admin-state";
import RevinueChart from "./components/revinue-chart";

export default function PharmacyAdminDashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="text-2xl font-medium text-default-800">
          <h1> Welcome Pharmacy Admin!</h1>
          <p className="text-base text-default-600">Dashboard</p>
        </div>
        <DatePickerWithRange />
      </div>
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <PharmacyAdminStats />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <Card>
            <CardHeader className="border-none pb-0 mb-0">
              <div className="flex flex-wrap items-center gap-3">
                <CardTitle className="flex-1 whitespace-nowrap">
                  Average Revenue
                </CardTitle>
                <div className="flex-none">
                  <DashboardSelect />
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <RevinueChart />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Card className="py-2.5">
            <CardHeader className="flex-row items-center justify-between gap-4 border-none">
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-8">
              <SplineArea />
            </CardContent>
          </Card>
        </div>
      </div>

      <LatestCustomers searchParams={searchParams} />
    </div>
  );
}
