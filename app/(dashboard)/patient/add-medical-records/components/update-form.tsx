"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import FileUploaderRestrictions from "@/components/file-upload-reactions";
import LanguageForm from "@/components/language-form";
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
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SelectItem } from "@/components/ui/select";
import { Edit } from "lucide-react";
import { useState, useTransition } from "react";

// Define schema using zod
const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  patient: z.number().min(2, "Select patient."),
  startDate: z.string().min(1, "Date  is required."),

  hospitalName: z.string().min(2, "hospitalName is required."),
  symptoms: z.array(z.string()).min(1, "Symptoms are required."),
});

type MedicalRecordsUpdateFormProps = {
  edit?: boolean;
};

export function MedicalRecordsUpdateForm({
  edit = false,
}: MedicalRecordsUpdateFormProps) {
  // State to hold the image preview URL
  const [images, setImages] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  // Initialize form with react-hook-form and zod
  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Title",
      patient: 1,
      startDate: "2011/12/01",
      hospitalName: "Female",
      symptoms: ["Female", "dd"],
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {};
  const gender = [
    { id: "1", label: "Male" },
    { id: "2", label: "Female" },
    { id: "3", label: "Other" },
  ];
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
                name="title"
                label="Title"
                control={form.control}
                placeholder="Enter Title"
              />

              <CustomFormField
                fieldType={FormFieldType.SELECT}
                name="type"
                control={form.control}
                label="Type"
                placeholder="Select Type"
              >
                {gender.map((gende, i) => (
                  <SelectItem key={gende.id} value={gende.label}>
                    <div className="flex cursor-pointer items-center gap-2">
                      {/* <Image
                          src={doctor.image}
                          width={32}
                          height={32}
                          alt="doctor"
                          className="rounded-full border border-dark-500"
                        /> */}
                      <p>{gende.label}</p>
                    </div>
                  </SelectItem>
                ))}
              </CustomFormField>
              <CustomFormField
                fieldType={FormFieldType.DATE_PICKER}
                control={form.control}
                name="startDate"
                label="Start Date"
                placeholder="mm/dd/yyyy"
              />

              <Controller
                control={form.control}
                name="symptoms"
                render={({ field: { value, onChange } }) => (
                  <LanguageForm
                    languages={value}
                    placeholder="Type new"
                    setLanguages={(newLanguages) => {
                      onChange(newLanguages);
                    }}
                  />
                )}
              />
              <div>
                <Label>Reports</Label>
                <FileUploaderRestrictions />
              </div>
              {/* Submit Button */}
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
