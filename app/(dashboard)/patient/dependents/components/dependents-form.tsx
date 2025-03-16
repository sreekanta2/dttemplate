"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import ImageComponent from "@/components/ImageComponent";
import ResetButton from "@/components/reset-button";
import FileInput from "@/components/shared/FileInput";
import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SelectItem } from "@/components/ui/select";
import { avatar } from "@/config/user.config";
import { Edit } from "lucide-react";
import { useState, useTransition } from "react";

// Define schema using zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  relationship: z
    .string()
    .min(2, "Relationship must be at least 2 characters."),
  dob: z.string().min(1, "Date of birth is required."),

  gender: z.string().min(2, "Gender is required."),
});

type DependentsFormProps = {
  edit?: boolean;
};

export function DependentsForm({ edit = false }: DependentsFormProps) {
  // State to hold the image preview URL
  const [images, setImages] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  // Initialize form with react-hook-form and zod
  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Jhon",
      relationship: "sibling",
      dob: "2024-11-20",
      gender: "Female",
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
        {!edit ? (
          <Button variant="soft">Add Dependents</Button>
        ) : (
          <Edit
            className="border dark:border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
            size={32}
          />
        )}
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-6  ">
        <ScrollArea className="h-[75vh] pr-4">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <div className="border w-full p-2 rounded-md flex gap-4 bg-primary/10">
                <div className="w-24 h-24 rounded-md overflow-hidden">
                  <ImageComponent
                    src={images[0] || avatar}
                    alt="Profile Image"
                  />
                </div>
                <FileInput
                  images={images}
                  setImages={setImages}
                  label="Profile Image"
                  maxFiles={1}
                />
              </div>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              name="name"
              label="Name"
              control={form.control}
              placeholder="Enter Name"
            />
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              name="relationship"
              label="Relationship"
              control={form.control}
              placeholder="Enter relationship"
            />

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="dob"
              label="Date of Birth"
              placeholder="mm/dd/yyyy"
            />
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              name="type"
              control={form.control}
              label="Type"
              placeholder="Select Type"
            >
              {gender.map((g) => (
                <SelectItem key={g.id} value={g.label}>
                  <div className="flex cursor-pointer items-center gap-2">
                    {/* <Image
                          src={doctor.image}
                          width={32}
                          height={32}
                          alt="doctor"
                          className="rounded-full border border-dark-500"
                        /> */}
                    <p>{g.label}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
