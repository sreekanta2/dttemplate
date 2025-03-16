"use client";

import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import ResetButton from "@/components/reset-button";
import SubmitButton from "@/components/submit-button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Settings, X } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function EditForm() {
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {};
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex gap-2 items-center bg-slate-200 border rounded-full px-2 py-1 cursor-pointer">
          <Settings size={18} className="text-slate-500" />
          <p className="text-sm text-slate-500">Configure</p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="top-[50%] md:top-[30%]  bg-card  ">
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <AlertDialogCancel className="absolute top-2 right-6 cursor-pointer hover:bg-red-600 hover:text-white rounded-full p-1 w-8 h-8 flex items-center justify-center transition-all duration-300">
              <X size={20} />
            </AlertDialogCancel>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-start">
                Configuration
              </AlertDialogTitle>
              <hr className="my-2 w-full  " />
              <AlertDialogDescription className="text-start">
                Enter your email address to receive payout
              </AlertDialogDescription>

              <div
                className="flex flex-col gap-2"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  name="email"
                  control={form.control}
                  label="Email"
                  placeholder="Enter your email"
                />
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <div className="flex gap-x-4">
                <SubmitButton variant="soft" color="info" isLoading={false}>
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
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
