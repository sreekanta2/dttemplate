"use client";
import bannerImage from "@/public/images/doctors/doctor-banner.webp";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Locate, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Hero = () => {
  const formSchema = z.object({
    location: z.string().optional(),
    category: z.string().nonempty("Employment type is required"),
  });
  type FormData = z.infer<typeof formSchema>;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      category: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // handle form submission
    // make API request to search for doctors
  };
  const employmentType = [
    { id: 1, label: "Full Time" },
    { id: 2, label: "Part Time" },
  ];

  return (
    <section
      className="bg-[url(https://dashboi-one.vercel.app/images/home/hero-bg.png)] bg-cover bg-no-repeat relative"
      id="home"
    >
      <div className="bg-gradient-to-b from-primary/30 to-[#fff] dark:from-primary/20 dark:to-[#0F172A] ">
        <div className="container  ">
          <div className="  h-[550px]  relative">
            <div className=" w-full  absolute bottom-6 left-0   max-w-[650px]  ">
              <div className="space-y-4">
                <h1 className="max-w-[600px]   text-xl md:text-2xl xl:text-[40px] xl:leading-[52px] font-semibold text-default-900 ">
                  <span className="text-primary"> Search Doctor</span>,
                  <br />
                  Make an Appointment
                </h1>
                <p className="text-base   md:text-lg   text-default-700   mt-5 max-w-[800px] mx-auto">
                  Access to expert physicians and surgeons, advanced
                  technologies and top-quality surgery facilities right here
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className=" p-4   lg:rounded-full grid my-8  grid-cols-1 lg:grid-cols-5 gap-4   items-center justify-evenly  bg-primary/10 shadow-sm    ">
                    <div className="col-span-2 w-full flex items-center bg-background    px-2 rounded-md">
                      <Locate className="text-default-600  " size={18} />
                      <Input
                        name="search"
                        className="w-full border-none bg-transparent"
                        placeholder="Location"
                        color="primary"
                      />
                    </div>

                    <div className="col-span-2 flex items-center  bg-background  px-2 rounded-md ">
                      {/* Department icon */}

                      <Select>
                        <SelectTrigger className="w-full border-none pr-0 ">
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent className="border-none  ">
                          <SelectGroup>
                            <SelectItem value="cardiology">
                              Cardiology
                            </SelectItem>
                            <SelectItem value="neurology">Neurology</SelectItem>
                            <SelectItem value="pediatrics">
                              Pediatrics
                            </SelectItem>
                            <SelectItem value="orthopedics">
                              Orthopedics
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <Link href={"/doctors"}>
                      <Button
                        variant="soft"
                        className="col-span-1 justify-self-end w-full rounded-full px-4    "
                      >
                        <Search className="mr-2" size={18} />
                        Search
                      </Button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full max-w-xl hidden lg:block   absolute top-0 right-0  ">
              <motion.div
                whileInView={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex justify-end mt-20"
              >
                <Image src={bannerImage} alt="" width={400} height={300} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
