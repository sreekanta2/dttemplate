"use client";
import doctor1 from "@/public/images/doctors/doctor1.webp";
import doctor2 from "@/public/images/doctors/doctor2.webp";
import doctor3 from "@/public/images/doctors/doctor3.webp";
import doctor4 from "@/public/images/doctors/doctor4.webp";
import doctor5 from "@/public/images/doctors/doctor5.webp";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import DoctorCard from "./doctor-card";

const doctors = [
  {
    id: 1,
    image: doctor1,
    name: "Dr. Ruby Perrin",
    rating: 3.0,
    qualification: "BDS, MDS - Oral & Maxillofacial",
    location: "Dallas, USA",
    consultations: 400,
  },
  {
    id: 2,
    image: doctor2,
    name: "Dr. John Doe",
    rating: 4.5,
    qualification: "MBBS, MD - Cardiology",
    location: "New York, USA",
    consultations: 550,
  },
  {
    id: 3,
    image: doctor3,
    name: "Dr. Emily Carter",
    rating: 4.2,
    qualification: "MS - Orthopedics",
    location: "Los Angeles, USA",
    consultations: 620,
  },
  {
    id: 4,
    image: doctor4,
    name: "Dr. Michael Smith",
    rating: 4.8,
    qualification: "MD - Neurology",
    location: "Houston, USA",
    consultations: 710,
  },
  {
    id: 5,
    image: doctor5,
    name: "Dr. Sarah Johnson",
    rating: 3.9,
    qualification: "MD - Dermatology",
    location: "Chicago, USA",
    consultations: 480,
  },
  {
    id: 6,
    image: doctor2,
    name: "Dr. William Brown",
    rating: 4.6,
    qualification: "MD - Urology",
    location: "San Francisco, USA",
    consultations: 530,
  },
  {
    id: 7,
    image: doctor4,
    name: "Dr. Olivia Wilson",
    rating: 4.7,
    qualification: "MS - Gynecology",
    location: "Boston, USA",
    consultations: 590,
  },
];

const BestDoctors = () => {
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
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container py-16"
    >
      <div className="  bg-background  ">
        <div className="space-y-1 ">
          <h1 className=" text-xl lg:text-2xl font-medium text-primary">
            Book Our Best Doctor
          </h1>
          <p>Meet our experts & book online.</p>
        </div>

        <div className="flex justify-self-end mb-2">
          <button onClick={() => swiperInstance?.slidePrev()}>
            <ChevronLeft size={30} className="text-primary" />
          </button>
          <button onClick={() => swiperInstance?.slideNext()}>
            <ChevronRight size={30} className="text-primary" />
          </button>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          centeredSlides={false}
          speed={400}
          loop={true}
          modules={[Navigation]}
          grabCursor={true}
          breakpoints={{
            1024: { slidesPerView: 4, spaceBetween: 15 },
            600: { slidesPerView: 2, spaceBetween: 15 },
            0: { slidesPerView: 1, spaceBetween: 15 },
          }}
          onSwiper={(swiper) => {
            if (!swiperInstance) {
              setSwiperInstance(swiper);
            }
          }}
        >
          <div className="">
            {doctors.map((doctor, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <DoctorCard doctor={doctor} />
                </motion.div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </motion.div>
  );
};
export default BestDoctors;
