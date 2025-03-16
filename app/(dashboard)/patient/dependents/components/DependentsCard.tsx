import CustomImage from "@/components/ImageComponent";
import { Dot } from "lucide-react";
import { DependentsForm } from "./dependents-form";

export default function DependantsCard({ depands }: { depands: any }) {
  return (
    <div className="  justify-between items-center    rounded-md hover:bg-default-200 dark:hover:bg-default-200 transition-all duration-500 w-full border grid grid-cols-1 md:grid-cols-2 p-3  gap-4    ">
      <div className="flex gap-4  items-center">
        <CustomImage
          src={depands.image}
          aspectRatio="1/1"
          alt=""
          containerClass="w-16 h-16"
          className="rounded-md"
        />
        <div className="">
          <h1 className="text-lg">{depands?.name}</h1>
          <p className="text-sm  flex flex-wrap items-center">
            <span className="flex items-center">
              <Dot className="text-blue-400 -ml-4 -mr-3" size={40} />
              Mother
            </span>
            <span className="flex items-center">
              <Dot className="text-blue-400 -ml-2 -mr-3" size={40} />
              Female
            </span>
            <span className="flex items-center">
              <Dot className="text-blue-400 -ml-4 md:-ml-2 -mr-3" size={40} />
              58 years 20 days
            </span>
          </p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-between">
        <div className=" ">
          <h1 className="">Blood Group</h1>
          <p className="  flex items-center stext-lg mt-1">A+ ve</p>
        </div>
        <div className="flex items-center space-x-8">
          <DependentsForm edit />
        </div>
      </div>
    </div>
  );
}
