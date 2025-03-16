import PartnersPage from "@/components/landing-page/partners";
import BestSellingProducts from "../components/best-sellings-product";
import Category from "../components/category";
import Coupon from "../components/cupon";
import Delivery from "../components/delivery";
import Feature from "../components/features";
import GreatDeals from "../components/great-deals";
import Hero from "../components/hero";
import HotDeals from "../components/hot-deals";
import MedicalStore from "../components/medical-store";
import ReviewPage from "../components/review-page";
import SpecialOffer from "../components/special-offer";
import Welcome from "../components/welcome";

export default function Pharmacy() {
  return (
    <div className="bg-background">
      <Hero />
      <Welcome />
      <GreatDeals />
      <Category />
      <SpecialOffer />
      <HotDeals />
      <Feature />
      <Coupon />
      <BestSellingProducts />
      <Delivery />
      <MedicalStore />
      <PartnersPage />
      <ReviewPage />
    </div>
  );
}
