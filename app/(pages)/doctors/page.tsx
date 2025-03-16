import CustomImage from "@/components/ImageComponent";
import Pagination from "@/components/PaginationComponents";
import { CheckMark, User } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { getDoctors } from "@/config/doctors/doctors.config";
import { Award, Clock, DollarSign, MapPin, ThumbsUp } from "lucide-react";
import Link from "next/link";
import DoctorFilteringPageForm from "./components/doctors-filtering-form";
import DoctorsHero from "./components/hero";

export default async function DoctorsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // If searchParams is a plain object, get the page param
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 10;

  // Fetch doctors data based on page and limit
  const doctorsResponse = await getDoctors({ page, limit });
  // console.log(doctorsResponse?.data?.length);
  return (
    <div>
      <DoctorsHero />
      <div className="bg-background">
        <div className="container relative  lg:px-0 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filter */}
            <div className="w-full border bg-card lg:max-w-sm  rounded-md h-fit lg:sticky top-20 right-0 ">
              <h1 className="text-lg mb-4 px-4 pt-4">Filter</h1>
              <DoctorFilteringPageForm />
            </div>

            {/* Doctors List */}
            <div className="w-full">
              <h1 className="text-lg">
                Showing{" "}
                <span className="text-primary font-bold">
                  {doctorsResponse?.pagination?.totalRecords}
                </span>{" "}
                Doctors For You
              </h1>

              <div className="my-4 space-y-4  ">
                {doctorsResponse?.data?.map((doctor: any) => (
                  <div
                    key={doctor.id}
                    className="w-full h-fit flex flex-col md:flex-row justify-between   border bg-card rounded-md"
                  >
                    <div className="flex flex-col md:flex-row md:items-center   gap-4 p-4">
                      <div className="p-0 border-b-0 overflow-hidden">
                        {doctor?.user?.image ? (
                          <CustomImage
                            src={doctor?.user?.image}
                            alt={doctor?.user?.name || doctor?.displayName}
                            aspectRatio="1/1"
                            containerClass="w-full sm:w-48 border bg-primary/10 rounded-md "
                            className="rounded-lg  "
                          />
                        ) : (
                          <div className="w-32 h-32 p-2 m-1 rounded-md border">
                            <User />
                          </div>
                        )}
                      </div>

                      <div className="space-y-4 p-0">
                        <div>
                          <div className="flex items-center gap-x-4">
                            <CardTitle className="text-lg">
                              <Link href={`/doctors/${doctor.id}`}>
                                {doctor?.user?.name || doctor?.displayName}
                              </Link>
                            </CardTitle>
                            <span className="w-5 h-5">
                              <CheckMark />
                            </span>
                          </div>
                          <p className="text-xs text-default-600 -mt-1">
                            MBBS, Dentist
                          </p>
                        </div>

                        <div className="space-y-2 text-default-600">
                          <div className="flex gap-2">
                            <MapPin size={14} />
                            <span className="text-xs">
                              {doctor?.addresses?.address}, {doctor.country}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <Award size={16} />
                            <span className="text-xs">
                              10 Years of Experience
                            </span>
                          </div>
                        </div>

                        <div className="text-default-600 flex flex-col gap-1">
                          <Rating
                            value={4}
                            readOnly
                            className="gap-x-1.5 max-w-[125px]"
                          />
                          <span>(44) reviews</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-default-600 w-full md:w-fit flex flex-col items-start gap-4 p-4">
                      <div className="flex gap-2">
                        <Clock size={14} />
                        <span className="text-xs">0.9 mi - New York, USA</span>
                      </div>
                      <div className="flex gap-2">
                        <ThumbsUp size={14} />
                        <span className="text-xs">98% (252 Votes)</span>
                      </div>
                      <div className="flex gap-2">
                        <DollarSign size={14} />
                        <span className="text-xs">$400</span>
                      </div>
                      <Button
                        type="button"
                        variant="soft"
                        color="info"
                        className="w-full"
                      >
                        <Link href={`/doctors/${doctor.id}/booking`}>
                          Book Appointment
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Pagination Component */}
                {doctorsResponse?.pagination?.totalRecords >
                  doctorsResponse?.pagination?.perPage && (
                  <div className="mt-24">
                    <Pagination
                      currentPage={doctorsResponse?.pagination?.currentPage}
                      totalPages={doctorsResponse?.pagination?.totalPages}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
