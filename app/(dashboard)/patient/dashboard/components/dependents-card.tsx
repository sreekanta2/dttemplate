"use client";

import { Calendar, Eye } from "lucide-react";
import Link from "next/link";

import CustomImage from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import avatar from "@/public/images/avatar/avatar-1.jpg";
import AddDepants from "./add-depants-dialog";
const DependentsCard = () => {
  return (
    <div className="border rounded-md">
      <div className="flex  justify-between border-none pb-0 p-4">
        <h1 className="text-lg lg:text-xl"> Dependents </h1>
        <div className="flex items-center gap-4">
          <AddDepants />
          <Link href="/patient/dependents" className="text-sky-400">
            | View all
          </Link>
        </div>
      </div>
      <hr className="my-2" />
      <ScrollArea className="w-full h-full   whitespace-nowrap rounded-md ">
        <div className="px-4 space-y-4   min-w-[400px]   py-2 ">
          {[1, 2].map((i) => (
            <div
              className="w-full flex justify-between items-center p-3  border rounded-md hover:bg-default-200 dark:hover:bg-default-200 transition-all duration-500  "
              key={i}
            >
              <div className="flex gap-3 items-start">
                <CustomImage
                  aspectRatio="1/1"
                  alt=""
                  src={avatar}
                  containerClass="w-16 h-16 "
                  className="rounded-md"
                />
                <Link href={`#`} className="flex flex-col justify-between">
                  <h1 className="text-sm font-semibold">Jhon Doe</h1>
                  <p className="text-gray-500">Mother - 58 years 20 days</p>
                </Link>
              </div>

              <div className="flex gap-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-7 w-7 rounded-full"
                  color="info"
                >
                  <Calendar className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-7 w-7 rounded-full"
                  color="secondary"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default DependentsCard;
