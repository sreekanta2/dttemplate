import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import CanceledAnointmentContent from "./components/canclled-appointments";
import CompletedAnointmentContent from "./components/completed-appointments";
import TabsNavigation from "./components/tabs-navigation";

const AppointmentsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: "completed" | "canceled" };
}) => {
  const activeTab = searchParams.tab || "completed";

  return (
    <>
      <Card>
        <CardHeader className="border-none pb-0">
          <div className="flex items-center flex-wrap justify-between gap-4">
            <div className="text-2xl font-medium text-default-800 ">
              <CardTitle>Appointments</CardTitle>
            </div>
          </div>
        </CardHeader>
        <hr className="my-2" />

        <CardContent className="px-4 space-y-4 ">
          <Tabs defaultValue={activeTab} className="w-full h-full">
            {/* Client component for handling tab navigation */}
            <TabsNavigation activeTab={activeTab} />

            {/* Appointments Content */}
            {activeTab === "completed" ? (
              <CompletedAnointmentContent searchParams={searchParams} />
            ) : (
              <CanceledAnointmentContent searchParams={searchParams} />
            )}
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default AppointmentsPage;
