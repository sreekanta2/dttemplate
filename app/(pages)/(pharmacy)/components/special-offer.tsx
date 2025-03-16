"use client";
import shapeImage from "@/public/images/pharmacy/shape-11.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SpecialOffer() {
  const router = useRouter();
  const handleRouting = () => {
    // Navigate to the products page of the selected category
    router.push(`/products`);
  };

  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-fit">
        <div className="flex flex-col  md:flex-row  lg:justify-between gap-4 items-center p-4 bg-info md:h-32 dark:bg-card relative   text-white rounded-lg">
          <div className="  flex justify-between gap-4 ">
            <div className="">
              <h1 className="text-xl md:text-2xl font-bold   md:w-64  ">
                Cash On delivery Available
              </h1>
              <p>Order Now, Pay Later</p>
            </div>
          </div>
          <button
            onClick={handleRouting}
            className="bg-white text-[#004fff] py-2 px-4 dark:bg-background rounded-md  w-full md:w-44  h-12 border-[#004fff] hover:text-white hover:bg-[#004fff]  transition  delay-20 duration-200 ease-in-out "
          >
            Shop Now
          </button>
          <Image
            src={shapeImage}
            className="absolute top-0 right-1/3 hidden md:block"
            width={100}
            height={100}
            alt="shape"
          />
        </div>
        <div className="flex flex-col  md:flex-row  lg:justify-between gap-4 items-center p-4 bg-info md:h-32 dark:bg-card relative   text-white rounded-lg">
          <div className="  flex justify-between gap-4 ">
            <div className="">
              <h1 className="text-2xl font-bold     ">Sale of the Month</h1>
              <p>Offer Prices in all medicines</p>
            </div>
          </div>
          <button
            onClick={handleRouting}
            className="bg-white text-[#004fff] py-2 px-4 dark:bg-background rounded-md  w-full md:w-44  h-12 border-[#004fff] hover:text-white hover:bg-[#004fff]  transition  delay-20 duration-200 ease-in-out "
          >
            Shop Now
          </button>
          <Image
            src={shapeImage}
            className="absolute top-0 right-1/3 hidden md:block"
            width={100}
            height={100}
            alt="shape"
          />
        </div>
      </div>
    </div>
  );
}
