import DashboardSelect from "@/components/dashboard-select";
import DatePickerWithRange from "@/components/date-picker-with-range";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import AdminStats from "./components/admin-state";
import AppointmentList from "./components/appointments-list";
import DoctorList from "./components/doctor-list";
import SplineArea from "./components/line-chart";
import PatientsList from "./components/patients-list";
import RevinueChart from "./components/revinue-chart";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="text-2xl font-medium text-default-800">
          <h1> Welcome Admin!</h1>
          <p className="text-base text-default-600">Dashboard</p>
        </div>
        <DatePickerWithRange />
      </div>
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <AdminStats />
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
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border p-4 bg-card rounded-md space-y-2">
          <h1 className="text-lg md:text-xl font-medium  bg-card  ">
            Recent Doctors
          </h1>
          <hr className="pb-4" />
          <ScrollArea className="pb-4">
            <DoctorList />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <Link
            href="/admin/doctors"
            className=" text-default-600 hover:text-primary flex justify-center w-full"
          >
            View All
          </Link>
        </div>
        <div className="border p-4 bg-card rounded-md space-y-2">
          <h1 className="text-lg md:text-xl font-medium  bg-card  ">
            Recent Patients
          </h1>
          <hr className="pb-4" />
          <ScrollArea className="pb-4">
            <PatientsList />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <Link
            href="/admin/patients"
            className=" text-default-600 hover:text-primary flex justify-center w-full"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="border p-6 bg-card rounded-md space-y-4">
        <h1 className="text-lg md:text-xl font-medium  bg-card  ">
          Recants Appointments
        </h1>
        <hr />
        <ScrollArea className=" pb-4 lg:pb-0  ">
          <AppointmentList />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Link
          href="/admin/appointments"
          className=" text-default-600 hover:text-primary flex justify-center w-full"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
