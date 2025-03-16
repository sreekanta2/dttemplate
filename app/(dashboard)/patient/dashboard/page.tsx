import Appointments from "./components/appointments";
import DependentsCard from "./components/dependents-card";
import HealthRecords from "./components/health-records";
import PastAppointmentSlide from "./components/past-appointments-slide";
import PatientDetails from "./components/patient/patient-reports";

const PatientDashboardPage = () => {
  return (
    <div className="space-y-6  bg-card p-6 rounded-md">
      <div className="text-2xl font-medium text-default-800 ">
        Analytics .dashboard
      </div>

      {/* heath records */}
      <HealthRecords />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="  border  rounded-md">
          <Appointments />
        </div>

        <div className="space-y-4">
          <PastAppointmentSlide />
          <DependentsCard />
        </div>
      </div>

      <div>
        <PatientDetails />
      </div>
    </div>
  );
};

export default PatientDashboardPage;
