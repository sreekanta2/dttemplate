"use client";
import Header from "./header";

import LayoutLoader from "@/components/layout-loader";
import { useMounted } from "@/hooks/use-mounted";

import Articles from "./articles";
import BestDoctors from "./best-doctors";
import FeaturesSlide from "./clinic-features";
import Faq from "./faq";
import Footer from "./footer";
import Hero from "./hero";
import PartnersPage from "./partners";
import PricingPlan from "./pricing-plan";
import Specialites from "./Specialites";
import Summary from "./summary";
import Testimonial from "./testimonial";

const LandingPageView = () => {
  const mounted = useMounted();
  if (!mounted) {
    return <LayoutLoader />;
  }
  return (
    <div className="bg-background    ">
      <Header />
      {/* Your code here */}

      <Hero />
      {/* <ClinicsAndSpecialties /> */}
      <Specialites />
      <BestDoctors />
      <FeaturesSlide />
      <Summary />
      <Articles />
      <Faq />
      <PricingPlan />
      <Testimonial />
      <PartnersPage />

      <Footer />
    </div>
  );
};

export default LandingPageView;
