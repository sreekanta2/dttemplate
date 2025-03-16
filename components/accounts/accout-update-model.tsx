"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField, { FormFieldType } from "../custom-form-field";
import { Form } from "../ui/form";

const formSchema = z.object({
  bankname: z.string().min(2, "Bank Name must be at least 2 characters."),
  branchname: z.string().min(2, "Branch Name must be at least 2 characters."),
  accountnumner: z
    .string()
    .min(2, "Account number must be at least 2 characters."),
  accountname: z.string().min(2, "Account Name must be at least 2 characters."),
});

export function AccountUpdateModel() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bankname: "",
      branchname: "",
      accountnumner: "",
      accountname: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {};

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="soft" className="bg-foreground text-white">
          Edit Details
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full">
        <ScrollArea className="h-[75vh] pr-4">
          <AlertDialogHeader className="space-y-4">
            <AlertDialogTitle>Account Details</AlertDialogTitle>
            <hr />
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="bankname"
                control={form.control}
                label="Bank Name"
                placeholder="Enter Bank Name"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="branchname"
                control={form.control}
                label="Branch Name"
                placeholder="Enter Branch Name"
              />

              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="accountnumner"
                control={form.control}
                label="Account Number"
                placeholder="Enter Account Number"
              />

              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="accountname"
                control={form.control}
                label="Account Name"
                placeholder=" Enter Account Name"
              />

              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction type="submit" className="bg-success">
                  Update
                </AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </Form>
        </ScrollArea>
      </AlertDialogContent>
    </AlertDialog>
  );
}
