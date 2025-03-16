import PricingCard from "./pricing-card";

interface Plan {
  title: string;
  price: string;
  status: string; // Status: Basic, Premium, or Enterprise
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  ctaLink: string;
  isPopular?: boolean;
}

const PricingPlan = () => {
  const plans: Plan[] = [
    {
      title: "For Individuals",
      price: "99",
      status: "Basic", // Added status
      description:
        "Perfect for individuals looking for essential features to manage their health and appointments.",
      features: [
        { text: "Profile Creation", included: true },
        { text: "Appointment Booking", included: true },
        { text: "Notification Alerts", included: true },
        { text: "Limited Telemedicine Access", included: true },
      ],
      ctaLink: "#",
    },
    {
      title: "For Startups",
      price: "199",
      status: "Premium", // Added status
      description:
        "Ideal for startups needing advanced features to manage multiple users and extended telemedicine access.",
      features: [
        { text: "Profile Creation", included: true },
        { text: "Appointment Booking", included: true },
        { text: "Notification Alerts", included: true },
        { text: "Extended Telemedicine Access", included: true },
        { text: "Exclusive Discounts", included: true },
        { text: "Appointment History", included: true },
        { text: "Priority Customer Support", included: true },
      ],
      ctaLink: "#",
      isPopular: true,
    },
    {
      title: "For Big Companies",
      price: "399",
      status: "Enterprise", // Added status
      description:
        "Designed for large organizations requiring comprehensive health management solutions.",
      features: [
        { text: "All Basic Plan Features", included: true },
        { text: "All Premium Plan Features", included: true },
        { text: "Personalized Health Insights", included: true },
        { text: "Family Account Management", included: true },
      ],
      ctaLink: "#",
    },
  ];

  return (
    <section className="2xl:py-[120px]" id="pricing">
      <div className="container py-10">
        <div className="max-w-[670px] mx-auto">
          <h2 className="text-center text-xl xl:text-3xl xl:leading-[46px] font-semibold text-default-900 mb-3">
            Pricing <span className="text-primary">Plan</span>
          </h2>
          <p className="text-base xl:leading-7 text-center text-default-700">
            DCare stands as a prudent investment, safeguarding you against
            thousands in potential expenses. With every update, amplify its
            value even further.
          </p>
        </div>

        <div className="mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-12">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} isPopular={plan.isPopular} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
