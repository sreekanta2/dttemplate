import Pagination from "@/components/PaginationComponents";
import { getAppointments } from "@/config/appointments/appointments.config";
import AppointmentCard from "./appointment-card";

export default async function CompletedAnointmentContent({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const page = parseInt(searchParams?.page || "1", 10);
  const limit = parseInt(searchParams?.limit || "6", 10);

  // Fetch doctors data based on page and limit
  const appointments = await getAppointments({ page, limit, completed: true });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {appointments?.data?.length > 0 ? (
          appointments?.data?.map((appointment: any) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))
        ) : (
          <h1>No Completed Appointment found!</h1>
        )}
      </div>
      {appointments?.pagination?.totalRecords >
        appointments?.pagination?.perPage && (
        <div className="mt-4">
          <Pagination
            currentPage={appointments?.pagination?.currentPage}
            totalPages={appointments?.pagination?.totalPages}
          />
        </div>
      )}
    </div>
  );
}
