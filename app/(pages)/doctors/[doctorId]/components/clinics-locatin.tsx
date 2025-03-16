import BasicMap from "@/components/maps-google/basic-map";
import { avatar } from "@/config/user.config";
import { IClinic } from "@/types/doctor";
import Image from "next/image";

interface ClinicProps {
  clinics: IClinic[];
}
export default function ClinicLocation({ clinics }: ClinicProps) {
  return (
    <div id="clinics" className="  w-full space-y-4">
      <h1 className="text-lg">Clinics & Locations</h1>
      {clinics.map((clinic) => (
        <div
          className=" flex flex-col lg:flex-row  border   rounded-md justify-between gap-8 p-4 bg-card"
          key={clinic.id}
        >
          <div className=" w-full space-y-4 ">
            <div className="flex flex-col md:flex-row  items-start gap-4   ">
              <div className="w-full h-80 md:w-44   md:h-36 rounded-lg border-2 p-2 relative overflow-hidden">
                <Image
                  src={avatar}
                  alt={""}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="w-full space-y-4">
                <div className="space-y-1 p-0">
                  <h1 className="text-lg text-default-800">{clinic.name}</h1>

                  <p className="text-info">${clinic.price} / Appointment</p>
                  <p>{clinic.address}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4  ">
              <div className="border  w-full py-4 text-center rounded-md">
                <h1 className="text-lg ">Monday</h1>
                <p> 9.00am - 3.00pm</p>
              </div>
              <div className="border py-4 w-full text-center rounded-md">
                <h1 className="text-lg">Saturday </h1>
                <p> 9.00am - 6.00pm</p>
              </div>
            </div>
          </div>

          <BasicMap height={250} />
        </div>
      ))}
    </div>
  );
}
