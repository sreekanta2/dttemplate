"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import ResetButton from "@/components/reset-button";
import { DatePicker } from "@/components/single-date-picker";
import SubmitButton from "@/components/submit-button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SelectItem } from "@/components/ui/select";
import { doctorScheduleSchema } from "@/schemas/doctors-profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type FormData = z.infer<typeof doctorScheduleSchema>;

export function AddSlots() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<FormData>({
    resolver: zodResolver(doctorScheduleSchema),
    defaultValues: {
      startTime: "",
      endTime: "",
      date: new Date(),
      type: "",
      price: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);

    setTimeout(() => {
      toast.success("Form submitted successfully!");
      setLoading(false);
    }, 2000);
  };
  const employmentType = [
    { id: "1", label: "audio" },
    { id: "2", label: "video" },
    { id: "3", label: "clinic" },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className=" text-info cursor-pointer  ">Add Time Slot</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]" hiddenCloseIcon>
        <DialogHeader>
          <div className="border-b pb-4 relative">
            <DialogTitle>Add Time Slot</DialogTitle>
            <DialogClose asChild>
              <X
                className="absolute right-2 top-0 border bg-primary/20 text-default-500 rounded-full  cursor-pointer p-[2px] transition-all duration-300 ease-in-out hover:bg-destructive hover:text-primary-foreground"
                size={24}
              />
            </DialogClose>
          </div>

          <DialogDescription>
            Add Schedule slots to your profile here. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ScrollArea className=" h-[75vh] md:h-fit pr-4  ">
              <div className="space-y-4">
                <div className=" flex flex-col md:flex-row gap-4">
                  <DatePicker
                    name="date"
                    control={form.control}
                    label="Date"
                    isRequired={true}
                  />
                  <CustomFormField
                    fieldType={FormFieldType.SELECT}
                    name="type"
                    control={form.control}
                    label="Type"
                    placeholder="Select Type"
                  >
                    {employmentType.map((doctor, i) => (
                      <SelectItem key={i} value={doctor.label}>
                        <div className="flex cursor-pointer items-center gap-2">
                          {/* <Image
                          src={doctor.image}
                          width={32}
                          height={32}
                          alt="doctor"
                          className="rounded-full border border-dark-500"
                        /> */}
                          <p>{doctor.label}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </CustomFormField>
                </div>
                <div className=" flex flex-col md:flex-row gap-4">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="startTime"
                    label="Start Time"
                    placeholder="10.00 am"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="endTime"
                    label="End Time"
                    placeholder="12.00 am"
                  />
                </div>
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="price"
                  label="Price"
                />

                <DialogFooter>
                  <div className="flex gap-x-4">
                    <SubmitButton
                      variant="soft"
                      color="info"
                      isLoading={loading}
                    >
                      Submit
                    </SubmitButton>
                    <ResetButton
                      variant="soft"
                      color="destructive"
                      onClick={() => form.reset()}
                    >
                      Reset
                    </ResetButton>
                  </div>
                </DialogFooter>
              </div>
            </ScrollArea>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
