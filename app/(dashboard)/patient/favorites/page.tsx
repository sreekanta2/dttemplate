import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import LimitSelect from "@/components/limit-select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDoctors } from "@/config/doctors/doctors.config";
import FavouritesDoctorCard from "./components/favourite-doctor-card";

export default async function FavouriteDoctors({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const page = parseInt(searchParams?.page || "1", 10);
  const limit = parseInt(searchParams?.limit || "8", 10);

  // Fetch doctors data based on page and limit
  const doctors = await getDoctors({ page, limit });

  return (
    <>
      <Card>
        <CardHeader className="border-none  pb-0">
          <div className="flex flex-col md:flex-row items-center flex-wrap justify-between gap-4">
            <CardTitle>Favourite Doctors</CardTitle>
            <div className="flex w-full flex-wrap md:flex-nowrap lg:w-fit gap-4">
              <SearchInput searchParamKey="q" className="w-full max-w-2xl" />
              <LimitSelect />
            </div>
          </div>
        </CardHeader>
        <hr className="my-2" />

        <CardContent className="p-4 space-y-4 ">
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {doctors?.data?.length > 0 ? (
              doctors?.data?.map((doctor: any) => (
                <FavouritesDoctorCard doctor={doctor} />
              ))
            ) : (
              <h1>No Completed doctor found!</h1>
            )}
          </div>
          {doctors?.pagination?.totalRecords > doctors?.pagination?.perPage && (
            <div className="mt-4">
              <Pagination
                currentPage={doctors?.pagination?.currentPage}
                totalPages={doctors?.pagination?.totalPages}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
