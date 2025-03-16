"use client";

import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Rating } from "@/components/ui/rating";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  availability: z.string().optional(),
  gender: z.string().optional(),
  rating: z.string().min(1).max(1).optional(),
  language: z.string().optional(),
  experience: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function DoctorFilteringPageForm() {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      availability: undefined,
      gender: undefined,
      rating: undefined,
      language: undefined,
      experience: undefined,
    },
  });

  const updateSearchParams = (data: FormData) => {
    const searchParams = new URLSearchParams();

    if (data.availability) {
      const availabilityDates: Record<string, number> = {
        today: 0,
        nextDay: 1,
        next7Days: 7,
        next30Days: 30,
      };
      const daysToAdd = availabilityDates[data.availability];
      const date = new Date(Date.now() + daysToAdd * 86400000);
      searchParams.set("availability", date.toISOString().split("T")[0]);
    }

    ["rating", "gender", "language", "experience"].forEach((key) => {
      const value = data[key as keyof FormData];
      if (value) searchParams.set(key, value);
    });

    router.push(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    const subscription = form.watch(updateSearchParams);
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <Accordion
      type="multiple"
      defaultValue={[
        "availability",
        "rating",
        "languages",
        "experience",
        "gender",
      ]}
    >
      <Form {...form}>
        <form>
          {[
            {
              label: "Gender",
              name: "gender",
              options: ["male", "female", "other"],
            },
            {
              label: "Availability",
              name: "availability",
              options: ["today", "nextDay", "next7Days", "next30Days"],
            },
            {
              label: "Rating",
              name: "rating",
              options: ["1", "2", "3", "4", "5"],
              isRating: true,
            },
            {
              label: "Languages",
              name: "languages",
              options: ["bangla", "english", "spanish", "hindi"],
            },
            {
              label: "Experience",
              name: "experience",
              options: ["1", "2", "3", "5+"],
            },
          ].map(({ label, name, options, isRating }) => (
            <AccordionItem
              key={name}
              value={name}
              className="dark:bg-card dark:text-white  shadow-none border-t rounded-none"
            >
              <AccordionTrigger>{label}</AccordionTrigger>
              <AccordionContent>
                <CustomFormField
                  fieldType={FormFieldType.RADIO}
                  control={form.control}
                  name={name}
                >
                  <RadioGroup
                    value={form.getValues(name as keyof FormData)}
                    onValueChange={(value: string) =>
                      form.setValue(name as keyof FormData, value)
                    }
                    className="space-y-1 flex flex-col"
                  >
                    {options.map((value) => (
                      <div className="flex items-center space-x-2" key={value}>
                        <RadioGroupItem value={value} id={`${name}-${value}`} />
                        {isRating ? (
                          <Rating
                            value={parseInt(value)}
                            readOnly
                            className="gap-x-1.5 max-w-[125px]"
                          />
                        ) : (
                          <Label
                            htmlFor={`${name}-${value}`}
                            className="capitalize text-default-700"
                          >
                            {value} {name === "experience" ? "Years" : ""}
                          </Label>
                        )}
                      </div>
                    ))}
                  </RadioGroup>
                </CustomFormField>
              </AccordionContent>
            </AccordionItem>
          ))}
        </form>
      </Form>
    </Accordion>
  );
}
