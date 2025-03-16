"use client";
import CustomImage from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import trustedImage from "@/public/images/pharmacy/trusted-img.png";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function MedicalStore() {
  return (
    <div className="   container py-14   ">
      <div className="bg-background  grid grid-cols-1 md:grid-cols-2 gap-8   ">
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
          <CustomImage
            src={trustedImage}
            alt={""}
            aspectRatio="16/9"
            containerClass="w-full  "
            className="rounded-lg  "
          />
        </motion.div>
        <div className="flex flex-col gap-2">
          <h1 className=" text-3xl lg:text-4xl font-bold text-default-800 w-4/5">
            100% Trusted Medical Store
          </h1>
          <div className="flex gap-4 mt-2">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM15.7127 10.7197C16.0055 10.4268 16.0055 9.95192 15.7127 9.65903C15.4198 9.36614 14.9449 9.36614 14.652 9.65903L10.9397 13.3713L9.34869 11.7804C9.0558 11.4875 8.58092 11.4875 8.28803 11.7804C7.99514 12.0732 7.99514 12.5481 8.28803 12.841L10.4093 14.9623C10.7022 15.2552 11.1771 15.2552 11.47 14.9623L15.7127 10.7197Z"
                  fill="#4338ca"
                ></path>{" "}
              </g>
            </svg>
            <h1 className="font-semibold text-default-700">Healthy Life</h1>
          </div>
          <p className=" text-sm text-sky-500">
            At Doccure, we believe that true well-being extends beyond the
            prescription counter. Our commitment to your health goes beyond
            medications, a dedicated space designed to empower you on your
            journey to a healthier and happier life.
          </p>
          <div className="flex gap-4 mt-4">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM15.7127 10.7197C16.0055 10.4268 16.0055 9.95192 15.7127 9.65903C15.4198 9.36614 14.9449 9.36614 14.652 9.65903L10.9397 13.3713L9.34869 11.7804C9.0558 11.4875 8.58092 11.4875 8.28803 11.7804C7.99514 12.0732 7.99514 12.5481 8.28803 12.841L10.4093 14.9623C10.7022 15.2552 11.1771 15.2552 11.47 14.9623L15.7127 10.7197Z"
                  fill="#4338ca"
                ></path>{" "}
              </g>
            </svg>
            <h1 className="font-semibold text-default-700">
              Every day quality products for you.
            </h1>
          </div>
          <p className="  text-sm text-sky-500">
            At Doccure, we believe that true well-being extends beyond the
            prescription counter. Our commitment to your health goes beyond
            medications, a dedicated space designed to empower you on your
            journey to a healthier and happier life.
          </p>

          <Button variant="outline" className="w-fit mt-8" color="info">
            Shop Now <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
