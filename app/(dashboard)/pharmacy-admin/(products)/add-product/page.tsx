"use client";

import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import ResetButton from "@/components/reset-button";
import SubmitButton from "@/components/submit-button";
import { Form } from "@/components/ui/form";
import { SelectItem } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { productCategories } from "../../data";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);
  const productSchema = z.object({
    name: z.string().nonempty("Name is required"),
    category: z.string().nonempty("Category is required"),
    description: z.string().nonempty("Description is required"),
    price: z.number().min(0, "Price must be at least 0"),
    quantity: z.number().min(0, "Quantity must be at least 0"),
    discount: z.number().min(0, "Discount must be at least 0"),
    image: z.string().optional(),
    isActive: z.boolean().default(false), // Defaults to false if not provided
  });

  type FormData = z.infer<typeof productSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
      price: 0,
      quantity: 0,
      discount: 0,
      image: "",
      isActive: false,
    },
  });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      toast.success("Form submitted successfully!");
      setLoading(false);
    }, 2000);
  };
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="text-lg py-2">Add Product</h1>
        <div className="bg-primary/10 p-4 rounded-md space-y-4">
          <div className="w-full flex flex-col md:flex-row gap-4 items-start">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Product name"
              iconAlt="user"
            />
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              name="category"
              control={form.control}
              label="Select language"
              placeholder="Select language"
            >
              {productCategories.map(
                (category: { label: string; value: string }) => (
                  <SelectItem key={category.value} value={category.value}>
                    <div className="flex cursor-pointer items-center gap-2">
                      {/* <Image
                          src={doctor.image}
                          width={32}
                          height={32}
                          alt="doctor"
                          className="rounded-full border border-dark-500"
                        /> */}
                      <p>{category.label}</p>
                    </div>
                  </SelectItem>
                )
              )}
            </CustomFormField>
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="price"
              type="number"
              label="Price"
              iconAlt="Email"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 items-start">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              name="quantity"
              control={form.control}
              label="Quantity"
            />
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="discount"
              label="Discount"
            />
          </div>
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="description"
            label="Description"
            placeholder="Write details about product"
          />
        </div>

        {/* Submit and Reset Buttons */}
        <div className="flex  gap-4">
          <SubmitButton variant="soft" color="info" isLoading={loading}>
            Add Product
          </SubmitButton>
          <ResetButton
            variant="soft"
            color="warning"
            onClick={() => form.reset()}
          >
            Reset
          </ResetButton>
        </div>
      </form>
    </Form>
  );
}
