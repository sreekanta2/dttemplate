import { getDoctor } from "@/app/api/doctors/doctors.config";
import Availability from "./components/availability";
import Awards from "./components/awards";
import ClinicLocation from "./components/clinics-locatin";
import Experience from "./components/experience";
import DoctorHero from "./components/hero";
import Insurances from "./components/insurances";
import ProfileHashTag from "./components/profile-hash-nav";
import ProfileHeader from "./components/profile-header";
import ReviewForm from "./components/review-form";
import ReviewPage from "./components/review-page";
import Treatment from "./components/treatment";

export default async function DoctorPage({
  params,
}: {
  params: { doctorId: string };
}) {
  const { doctorId } = params;
  const doctor = await getDoctor(doctorId);

  return (
    <>
      <DoctorHero doctorId={doctorId} />
      <div className="bg-background pt-8">
        <div className="container mx-auto space-y-8 pb-8    ">
          <ProfileHeader doctorId={doctorId} doctor={doctor} />
          <ProfileHashTag doctorId={doctorId} />
          <p> {doctor?.bio}</p>
          <Experience experience={doctor?.experience} />
          {doctor?.insurances?.length > 0 && (
            <Insurances insurances={doctor.insurances} />
          )}

          {doctor?.treatments?.length > 0 && (
            <Treatment treatments={doctor?.treatments} />
          )}
          {doctor?.availability?.length > 0 && (
            <Availability
              id="availability"
              availability={doctor?.availability}
            />
          )}
          {doctor?.clinics && <ClinicLocation clinics={doctor?.clinics} />}
          {doctor?.awards?.length > 0 && <Awards awards={doctor?.awards} />}

          {/* <BusinessOur /> */}
          <ReviewPage reviews={doctor?.reviews} />
          <ReviewForm doctorId={doctor?.id} />
        </div>
      </div>
    </>
  );
}
