import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralSlotContent from "./components/slots/general/general-slot";

const AvailablePageView = () => {
  return (
    <div className="space-y-6  bg-card p-6 rounded-md">
      <h1 className="text-xl">Available Timings</h1>
      <hr className="my-4 " />
      <div className=" w-full">
        <Tabs defaultValue="general">
          <TabsList className=" space-x-4   bg-transparent">
            <TabsTrigger
              value="general"
              className="h-10 px-4 bg-primary/10  hover:text-blue-500    data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground "
            >
              General Availability
            </TabsTrigger>
            <TabsTrigger
              value="clinic"
              className="h-10 px-4 bg-primary/10       data-[state=active]:bg-primary   data-[state=active]:text-primary-foreground "
            >
              Clinic Availability
            </TabsTrigger>
          </TabsList>

          {/* general slot  */}

          <TabsContent value="general" className="mt-4">
            <GeneralSlotContent />
          </TabsContent>
          <TabsContent value="clinic" className="mt-4">
            <div>Upcoming ....</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AvailablePageView;
