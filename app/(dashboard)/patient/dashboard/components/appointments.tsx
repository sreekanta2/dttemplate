import CustomImage from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import { getAppointments } from "@/config/appointments/appointments.config";
import { Clock, EyeIcon, MessageCircle, Trash } from "lucide-react";
import Link from "next/link";

export default async function Appointments() {
  const limit = 3;
  const page = 1;
  // Fetch doctors data based on page and limit
  const appointments = await getAppointments({ page, limit, completed: true });
  return (
    <div className="  space-y-4 mb-4">
      <div className="flex justify-between  border-b mb-4">
        <h1 className="p-4 text-lg lg:text-xl">Appointments</h1>
      </div>
      <div className="px-4 space-y-4">
        {appointments?.data?.length > 0 &&
          appointments?.data?.map((appointment: any) => (
            <div className=" w-full border flex  gap-4 p-3 rounded-md">
              <CustomImage
                src={appointment.image}
                alt={appointment.patientName || ""}
                aspectRatio="1/1"
                containerClass="w-32  "
                className="rounded-md"
              />

              <div className=" space-y-4">
                <Link
                  href={`/patient/${1}`}
                  className=" font-semibold hover:text-blue-400"
                >
                  {appointment.patientName}
                </Link>
                <div>
                  <div className="flex gap-x-2 text-sm">
                    <Clock size={15} />
                    <span className="text-gray-700 dark:text-gray-300 -mt-1">
                      02:00 PM - 03:00 PM
                    </span>
                  </div>
                  <h1 className="font-serif ml-6 text-sm">General visit</h1>
                </div>

                <div className="flex gap-x-2  ">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-7 w-7 rounded-full"
                    color="secondary"
                  >
                    <EyeIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-7 w-7 rounded-full"
                    color="info"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-7 w-7 rounded-full"
                    color="destructive"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
