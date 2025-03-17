"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import FileUploaderRestrictions from "@/components/file-upload-reactions";
import LanguageForm from "@/components/language-form";
import ResetButton from "@/components/reset-button";
import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";
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
import { useState, useTransition } from "react";
import toast from "react-hot-toast";

// Define schema using zod
const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  patient: z.number().min(2, "Select patient."),
  startDate: z.string().min(1, "Date  is required."),

  hospitalName: z.string().min(2, "hospitalName is required."),
  symptoms: z.array(z.string()).min(1, "Symptoms are required."),
});

type MedicalRecordsFormProps = {
  edit?: boolean;
};

export function MedicalRecordsForm({ edit = false }: MedicalRecordsFormProps) {
  // State to hold the image preview URL
  const [images, setImages] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  // Initialize form with react-hook-form and zod
  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      patient: 0,
      startDate: "",
      hospitalName: "Female",
      symptoms: [],
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    startTransition(async () => {
      try {
        // const response = await createOrUpdateExperience(data);
        // if (response.success) {
        //   toast.success(response.success || "Update successful");
        //   form.reset();
        // } else if (response?.error) {
        //   toast.error(response?.error || "Something went wrong");
        // }
      } catch (error) {
        console.error("Error during update:", error);
        toast.error("Unexpected error occurred");
      }
    });
  };
  const gender = [
    { id: "1", label: "Male" },
    { id: "2", label: "Female" },
    { id: "3", label: "Other" },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="soft">Add MedicalRecords</Button>
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
