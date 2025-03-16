"use client";

import { availability } from "@/app/(pages)/doctors/[doctorId]/booking/components/data";
import DateSlider from "@/components/date-slider";
import "swiper/css";
import { AddSlots } from "../add-slots-dialog";
import { DeleteSlots } from "../delete-slots-dialg";

export default function GeneralSlotContent({}) {
  return (
    <div className="bg-card p-4 rounded-md">
      <div className="flex justify-between mb-4">
        <h1 className="text-lg font-medium">Select Time Slots</h1>
        <div className="flex gap-4 items-center">
          <div className=" flex justify-end">
            <AddSlots />
          </div>
          <DeleteSlots />
        </div>
      </div>

      <DateSlider availability={availability} />
    </div>
  );
}
