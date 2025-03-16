"use client";

import DateSlider from "@/components/date-slider";
import { IAvailability } from "@/types/doctor";
import "swiper/css";

interface AvailabilityProps {
  id: string;
  availability: IAvailability[];
}

const Availability = ({ availability, id }: AvailabilityProps) => {
  return <DateSlider id={id} availability={availability} disabled />;
};

export default Availability;
