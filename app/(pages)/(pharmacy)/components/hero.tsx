"use client";

import { Button } from "@/components/ui/button";
import bannerImage from "@/public/images/pharmacy/pharmacy-img.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleRouting = () => {
    router.push("/products");
  };
  return (
    <section
      className="bg-[url(https://dashboi-one.vercel.app/images/home/hero-bg.png)] bg-cover bg-no-repeat relative"
      id="home"
    >
      <div className="bg-gradient-to-b from-primary/30 to-[#fff] dark:from-primary/20 dark:to-[#0F172A] ">
        <div className="container">
          <div className=" relative z-10">
            <div className=" w-full pt-32 md:pt-64 flex flex-col lg:flex-row justify-between  ">
              <div className=" w-full  max-w-[650px]">
                <h1 className="max-w-[600px]   text-xl md:text-2xl xl:text-4xl xl:leading-[52px] font-semibold text-default-900 ">
                  <span className="text-primary">
                    From the Leading Online Pharmacy
                  </span>
                  ,
                  <br />& Healthcare Platform Company
                </h1>
                <p className="text-base   md:text-lg   text-default-700   mt-5 max-w-[800px] mx-auto">
                  Essentials Nutrition & Supplements from all over the suppliers
                  around the World
                </p>
                <Button
                  color="info"
                  className="mt-4 mb-8"
                  onClick={handleRouting}
                >
                  Shop now
                </Button>
              </div>

              <div className="w-full max-w-lg  hidden lg:block     justify-center  ">
                <motion.div
                  whileInView={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex justify-end  "
                >
                  <Image src={bannerImage} alt="" width={500} height={400} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
