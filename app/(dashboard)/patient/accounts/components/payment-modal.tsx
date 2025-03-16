"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
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
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define form validation schema using Zod
const formSchema = z.object({
  amount: z.number().min(2, "Amount must be at least 2 characters."),
  desctiption: z.string().min(2, "Description must be at least 2 characters."),
});

export function PaymentRequestModal() {
  // Use react-hook-form with Zod validation schema
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      desctiption: "",
    },
  });

  // Form submit function
  const onSubmit = (data: z.infer<typeof formSchema>) => {};

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="soft" className="bg-foreground text-white">
          Request Payment
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full">
        <ScrollArea className="h- pr-4">
          <AlertDialogHeader className="space-y-4">
            <AlertDialogTitle>
              Payment Request{" "}
              <span className="text-red-700"> Request ID : #RQ-1323</span>
            </AlertDialogTitle>
            <hr />
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Amount Input Field */}
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="amount"
                control={form.control}
                label="Amount"
                placeholder="Enter amount"
              />

              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="description"
                control={form.control}
                label="Description"
                placeholder="Enter description"
              />

              {/* Description Input Field */}

              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction type="submit" className="bg-success">
                  Request
                </AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </Form>
        </ScrollArea>
      </AlertDialogContent>
    </AlertDialog>
  );
}
