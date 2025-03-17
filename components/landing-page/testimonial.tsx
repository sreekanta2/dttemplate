"use client";
import { avatar } from "@/config/user/user.config";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "../ui/rating";

const testimonials = [
  {
    id: 1,
    name: "Deny Hendrawan",
    country: "United States",
    review:
      "I had a wonderful experience, the staff was friendly and attentive, and Dr. Smith took the time to explain everything clearly.",
    title: "Nice Treatment",
    avatar: "/avatars/avatar1.jpg",
  },
  {
    id: 2,
    name: "Johnson DWayne",
    country: "United States",
    review:
      "Genuinely cares about his patients. He helped me understand my condition and worked with me to create a plan.",
    title: "Good Hospitality",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    id: 3,
    name: "Rayan Smith",
    country: "United States",
    review:
      "I had a great experience with Dr. Chen. She was not only professional but also made me feel comfortable discussing.",
    title: "Nice Treatment",
    avatar: "/avatars/avatar3.jpg",
  },
  {
    id: 4,
    name: "Rayan Smith",
    country: "United States",
    review:
      "I had a great experience with Dr. Chen. She was not only professional but also made me feel comfortable discussing.",
    title: "Nice Treatment",
    avatar: "/avatars/avatar3.jpg",
  },
];

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container py-16"
    >
      <div className="bg-primary/10 py-8 rounded-lg">
        <div className="p-2 w-full text-center">
          <h1 className="text-xl lg:text-2xl font-medium text-primary">
            Testimonial
          </h1>
          <p className="text-base lg:text-xl font-bold">
            15k Users Trust Doccure Worldwide
          </p>
        </div>

        <div className="flex items-center justify-end mb-4">
          <button className="swiper-button-prev">
            <ChevronLeft size={30} className="text-primary" />
          </button>
          <button className="swiper-button-next">
            <ChevronRight size={30} className="text-primary" />
          </button>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          speed={1500}
          loop={true}
          modules={[Navigation]}
          grabCursor={true}
          autoplay={{
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            delay: 5000,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 15 },
            0: { slidesPerView: 1, spaceBetween: 15 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={t.id} className="p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-background shadow-lg rounded-lg p-6 text-left border dark:border-0"
              >
                <div className="flex gap-1 mb-2">
                  <Rating
                    value={2}
                    readOnly
                    className="gap-x-0.5 max-w-[100px]"
                  />
                </div>
                <h4 className="font-semibold text-lg">{t.title}</h4>
                <p className="text-default-600 text-sm my-2">{t.review}</p>
                <div className="flex items-center gap-3 mt-4">
                  <Image
                    src={avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-default-500 text-sm">{t.country}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Testimonial;
