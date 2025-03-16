import Image from "next/image";
import "swiper/css";

import partnerImage4 from "@/public/images/pharmacy/partner/partners-10.svg";
import partnerImage5 from "@/public/images/pharmacy/partner/partners-11.svg";
import partnerImage6 from "@/public/images/pharmacy/partner/partners-12.svg";
import partnerImage1 from "@/public/images/pharmacy/partner/partners-7.svg";
import partnerImage2 from "@/public/images/pharmacy/partner/partners-8.svg";
import partnerImage3 from "@/public/images/pharmacy/partner/partners-9.svg";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PharmacyPartner() {
  const card = [
    partnerImage1,
    partnerImage1,
    partnerImage2,
    partnerImage3,
    partnerImage4,
    partnerImage5,
    partnerImage6,
  ];
  return (
    <div className="max-w-[1200px] py-14 mx-auto ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className="mySwiper"
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
        }}
      >
        {card.map((item) => (
          <SwiperSlide key={item} className=" p-4   ">
            <Link href="" className="w-4">
              <Image src={item} width={150} alt="partner" className="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
