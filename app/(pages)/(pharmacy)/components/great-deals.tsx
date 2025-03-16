"use client";
import CustomImage from "@/components/ImageComponent";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { delas } from "./data";
export default function GreatDeals() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleResize = () => {
      swiperInstance?.update();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperInstance]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Ensures animation only happens once
      className="container py-16"
    >
      <div className=" space-y-8  ">
        <h1 className=" text-xl lg:text-2xl font-bold text-primary my-8">
          Great deals on top picks
        </h1>

        <div className=" ">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            speed={1500}
            loop={true}
            grabCursor={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              delay: 3000,
            }}
            breakpoints={{
              1024: { slidesPerView: 6, spaceBetween: 15 },
              768: { slidesPerView: 4, spaceBetween: 15 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              0: { slidesPerView: 1, spaceBetween: 15 },
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
          >
            {delas.map((deal, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="relative w-full h-full flex justify-center items-center"
                >
                  <div
                    key={deal.name}
                    className="  flex flex-col gap-4 w-full min-w-fit max-w-max  justify-center items-center  "
                  >
                    <CustomImage
                      src={deal?.src}
                      alt={deal?.name}
                      aspectRatio="1/1"
                      containerClass="w-48 border bg-primary/10 rounded-md "
                      className="rounded-lg  "
                    />
                    <Link
                      href="/products"
                      className="font-semibold text-default-700 hover:text-info"
                    >
                      {deal.name}
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
}
