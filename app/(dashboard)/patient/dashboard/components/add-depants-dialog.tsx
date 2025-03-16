"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import CustomImage from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { SelectItem } from "@/components/ui/select";
import { avatar } from "@/config/user.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

// Define the schema using zod
const formSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  relation: z.string().min(1, "Relation is required"),
  dob: z.date(),
  gender: z.string().min(1, "Type is required"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormData = z.infer<typeof formSchema>;

const AddDepants = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      relation: "",
      dob: undefined,
      gender: "",
      terms: false,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setLoading(true);

    setTimeout(() => {
      toast.success("Form submitted successfully!");
      setLoading(false);
    }, 2000);
  };

  const gender = [
    { id: "1", label: "Male" },
    { id: "2", label: "Female" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <h1 className="cursor-pointer text-sky-400 flex items-center gap-1">
          <PlusCircle size={16} />
          <span>Add New</span>
        </h1>
      </DialogTrigger>
      <DialogContent size="2xl" className=" w-full flex  flex-col items-center">
        <ScrollArea className=" max-h-[90hv] w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-3"
            >
              <DialogHeader className="p-0">
                <DialogTitle className="text-base font-medium text-default-700">
                  Create a New
                </DialogTitle>
              </DialogHeader>
              <div className="border p-4 rounded-md flex gap-4 bg-primary/10">
                <CustomImage
                  src={avatar}
                  alt=""
                  aspectRatio="1/1"
                  className="rounded-full"
                  containerClass="w-24 h-24 "
                />
                <CustomFormField
                  fieldType={FormFieldType.FILE_UPLOAD}
                  name="images"
                  control={form.control}
                  label="Full Name"
                  placeholder="Enter full name"
                />
                {/* <FileInput
            images={images}
            setImages={setImages}
            label="Profile Image"
            maxFiles={1}
          /> */}
              </div>

              <div className="w-full space-y-4 ">
                <div className="w-full grid grid-cols-2 gap-2">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="fullName"
                    control={form.control}
                    label="Full Name"
                    placeholder="Enter full name"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="relation"
                    control={form.control}
                    label="Relation"
                    placeholder="Enter relation"
                  />
                </div>
                <div className="flex justify-between gap-2">
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    name="dob"
                    control={form.control}
                    label="DOB"
                    placeholder="Enter date of birth"
                    type="date"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.SELECT}
                    name="type"
                    control={form.control}
                    label="gender"
                    placeholder="Select Type"
                  >
                    {gender.map((doctor, i) => (
                      <SelectItem key={i} value={doctor.label}>
                        <div className="flex cursor-pointer items-center gap-2">
                          <p>{doctor.label}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </CustomFormField>
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-4">
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Create "}
                </Button>
              </div>
            </form>
          </Form>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AddDepants;
