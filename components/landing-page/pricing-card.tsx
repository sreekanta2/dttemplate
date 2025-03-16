import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Feature {
  text: string;
  included: boolean;
}

interface Plan {
  title: string;
  price: string;
  status: string; // Status: Basic, Premium, or Enterprise
  description: string;
  features: Feature[];
  ctaLink: string;
  isPopular?: boolean;
}

interface PricingCardProps {
  plan: Plan;
  isPopular?: boolean;
}

const PricingCard = ({ plan, isPopular = false }: PricingCardProps) => {
  const { title, price, status, description, features, ctaLink } = plan;

  return (
    <div
      className={`bg-default-100 rounded-xl py-10 px-7 flex flex-col ${
        isPopular ? "border border-primary relative" : ""
      }`}
    >
      {isPopular && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary font-medium text-primary-foreground py-1 px-3 rounded text-base">
          Popular
        </span>
      )}
      <div className="flex-none">
        <div className="flex mb-3">
          <div className="flex-1">
            <h1 className="font-medium text-default-700">{title}</h1>
            <span className="text-xl lg:text-2xl font-semibold">{status}</span>
          </div>
          <span className="flex-none text-xl xl:text-2xl font-semibold text-primary">
            $<span>{price}</span>
            <sub className="text-base font-normal">/monthly</sub>
          </span>
        </div>
        <p className="text-sm xl:text-base text-default-600">{description}</p>
      </div>
      <div className="flex-1">
        <div className="text-base xl:text-xl font-semibold text-default-900 mt-5 mb-3 xl:mb-5">
          What’s Included
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <span
                className={`w-4 h-4 ${
                  feature.included ? "text-success" : "text-destructive"
                }`}
              >
                {feature.included ? "✓" : "✗"}
              </span>
              <span className="text-sm xl:text-base text-default-900">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Button asChild>
        <Link href={ctaLink} target="__blank" className="mt-8 xl:mt-12 w-full">
          Buy Now
        </Link>
      </Button>
    </div>
  );
};

export default PricingCard;
