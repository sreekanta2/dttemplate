import Pagination from "@/components/PaginationComponents";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDoctors } from "@/config/doctors/doctors.config";
import FavouritesDoctorCard from "./components/favourite-doctor-card";

export default async function FavouriteDoctors({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const page = parseInt(searchParams?.page || "1", 10);

  const limit = 8;
  // Fetch doctors data based on page and limit
  const doctors = await getDoctors({ page, limit });
  console.log(doctors);
  return (
    <>
      <Card>
        <CardHeader className="border-none  pb-0">
          <div className="flex items-center flex-wrap justify-between gap-4">
            <div className="text-2xl font-medium text-default-800 ">
              <CardTitle>Favourite Doctors</CardTitle>
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
