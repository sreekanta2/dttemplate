"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import ResetButton from "@/components/reset-button";
import SubmitButton from "@/components/submit-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit } from "lucide-react";
import { useState, useTransition } from "react";

// Define schema using zod
const formSchema = z.object({
  bmi: z.string().min(2, "Title must be at least 2 characters."),
  heartRate: z.string().min(2, "Heart Rate  required."),
  weight: z.string().min(2, "weight required."),
  fbc: z.string().min(2, "fbc required."),
  endDate: z.string().min(1, "Date  is required."),
});

type MedicalDetailsUpdateFormProps = {
  edit?: boolean;
};

export function MedicalDetailsUpdateForm({
  edit = false,
}: MedicalDetailsUpdateFormProps) {
  // State to hold the image preview URL
  const [images, setImages] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  // Initialize form with react-hook-form and zod
  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bmi: "",
      heartRate: "",
      weight: "",
      fbc: "",
      endDate: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Edit
          className="border dark:border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
          size={32}
        />
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-6  ">
        <ScrollArea className="h-[75vh] pr-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <DialogHeader>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="bmi"
                label="BMI"
                control={form.control}
                placeholder="Enter BMI"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="heartRate"
                label="Heart Rate"
                control={form.control}
                placeholder="Enter heart rate"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="weight"
                label="Weight"
                control={form.control}
                placeholder="Enter width "
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="fbc"
                label="FBC"
                control={form.control}
                placeholder="Enter width "
              />

              <CustomFormField
                fieldType={FormFieldType.DATE_PICKER}
                control={form.control}
                name="endDate"
                label="End Date"
                placeholder="mm/dd/yyyy"
              />

              <div className="flex gap-x-4">
                <SubmitButton variant="soft" color="info" isLoading={isPending}>
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
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
