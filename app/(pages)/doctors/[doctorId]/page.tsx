import { getDoctor } from "@/config/doctors/doctors.config";
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
  const doctor = await getDoctor(doctorId, 1, 5);
  if (!doctor?.data) {
    return <div>Doctor not found</div>;
  }
  return (
    <>
      <DoctorHero doctorId={doctorId} />
      <div className="bg-background pt-8">
        <div className="container mx-auto space-y-8 pb-8    ">
          <ProfileHeader doctorId={doctorId} doctor={doctor} />
          <ProfileHashTag doctorId={doctorId} />
          <p> {doctor?.data?.bio}</p>
          <Experience experience={doctor?.data?.experience} />

          <Insurances insurances={doctor.data?.insurances} />

          <Treatment treatments={doctor?.data?.treatments} />

          <Availability
            id="availability"
            availability={doctor?.data?.availability}
          />

          <ClinicLocation clinics={doctor?.data?.clinics} />
          <Awards awards={doctor?.data?.awards} />

          {/* <BusinessOur /> */}
          <ReviewPage reviews={doctor?.data?.reviews} />
          <ReviewForm doctorId={doctor?.data?.id} />
        </div>
      </div>
    </>
  );
}
