"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { debounce } from "lodash"; // For debouncing URL updates
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function ProductFilterForm() {
  const router = useRouter();

  // Categories array
  const categories = [
    { name: "family", label: "Family Care" },
    { name: "skin", label: "Skin Care" },
    { name: "hair", label: "Hair Care" },
    { name: "lip", label: "Lip Care" },
    { name: "mens", label: "Men's Care" },
    { name: "women", label: "Women's Care" },
    { name: "baby", label: "Baby Care" },
  ];

  // Dynamic schema generation
  const formSchema = z.object(
    Object.fromEntries(
      categories.map((cat) => [cat.name, z.string().optional()])
    )
  );

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: Object.fromEntries(categories.map((cat) => [cat.name, ""])),
  });

  // Debounced function to update search params
  const updateSearchParams = debounce((data: FormData) => {
    const searchParams = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (value) searchParams.set(key, value);
    });
    router.push(`?${searchParams.toString()}`);
  }, 300); // Debounce delay of 300ms

  // Watch form changes and trigger URL update
  useEffect(() => {
    const subscription = form.watch((data) => {
      updateSearchParams(data);
    });
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <div className="col-span-1 border rounded-md h-fit bg-card">
      <h2 className="text-xl font-semibold text-vnet-blue mb-2 h-14 p-4 border-b">
        Search Filter
      </h2>
      <Form {...form}>
        <div className="space-y-2 p-4">
          {categories.map((cat) => (
            <CustomFormField
              key={cat.name}
              fieldType={FormFieldType.CHECKBOX}
              name={cat.name}
              control={form.control}
              label={cat.label}
            />
          ))}
        </div>
      </Form>
    </div>
  );
}
