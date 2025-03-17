"use client";

import { useState } from "react";

import CustomImage from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import { avatar } from "@/config/user/user.config";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

// Define the prop types
interface PastAppointmentSlideProps {
  onDateSelect?: (date: Date) => void;
  events?: string[]; // Array of dates in string format
}

const PastAppointmentSlide: React.FC<PastAppointmentSlideProps> = ({
  onDateSelect,
  events = [],
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className=" border rounded-md   ">
      <div className="flex justify-between    p-4">
        <h1 className="text-lg lg:text-xl"> Past Appointments</h1>
        <div className="flex items-center justify-between  ">
          <button onClick={() => swiperInstance?.slidePrev()}>
            <ChevronLeft />
          </button>
          <button onClick={() => swiperInstance?.slideNext()}>
            <ChevronRight />
          </button>
        </div>
      </div>
      <hr />
      <div className="mx-4 my-4">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          centeredSlides
          loop
          onSwiper={(swiper) => {
            if (!swiperInstance) {
              setSwiperInstance(swiper);
            }
          }}
          className="border rounded-md"
        >
          {[1, 2, 3].map(() => (
            <SwiperSlide>
              {/* design this card  */}
              <div className="w-full p-4  space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <CustomImage
                      src={avatar}
                      alt=""
                      aspectRatio="1/1"
                      containerClass="w-12 h-12 "
                      className="rounded-md"
                    />
                    <div>
                      <h1 className="text-lg font-medium">Dr.Edalin Hendry</h1>
                      <p>Dental Specialist</p>
                    </div>
                  </div>
                  <Button color="warning">30 min</Button>
                </div>

                <div className=" space-y-1">
                  <h1 className="text-lg lg:text-xl font-semibold">
                    {" "}
                    Sunday ,March 2025
                  </h1>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>Time:</span>
                    <span>04:00 PM</span>
                    <span>04:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <p>Newyork ,United states</p>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  <Button variant="outline" color="primary" className="w-full">
                    Reschedule
                  </Button>
                  <Button color="primary" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PastAppointmentSlide;
