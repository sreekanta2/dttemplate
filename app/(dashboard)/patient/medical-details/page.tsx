import MedicalDetailsPageView from "./page-view";

interface MedicalDetailsPageProps {
  params: {
    lang: any;
  };
}
const MedicalDetailPage = async ({
  params: { lang },
}: MedicalDetailsPageProps) => {
  return <MedicalDetailsPageView   />;
};

export default MedicalDetailPage;
