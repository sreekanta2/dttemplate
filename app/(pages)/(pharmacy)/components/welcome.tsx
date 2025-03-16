"use client";

import { Button } from "@/components/ui/button";
import welcomeImage2 from "@/public/images/pharmacy/products/product-17.jpg";
import welcomeImage3 from "@/public/images/pharmacy/products/product-20.jpg";
import welcomeImage from "@/public/images/pharmacy/products/product-33.jpg";
import shapeImage from "@/public/images/pharmacy/shape-9.png";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import PromoCard from "./offerd-card";

interface PromoCardProps {
  id: number;
  title: string;
  highlight: string;
  description: string;
  code?: string;
  color: "primary" | "info" | "warning";

  handleRouting: () => void;
  image: StaticImageData;
}

// Promo Cards Data
const promoCards: PromoCardProps[] = [
  {
    id: 1,
    title: "10% Cashback on Dietary",
    highlight: "Supplements",
    description: "Code:",
    code: "CARE12",
    color: "warning",
    handleRouting: () => {},
    image: welcomeImage,
  },
  {
    id: 2,
    title: "Say yes",
    highlight: "to New Throat Freshener",
    description: "Refresh your day the fruity way",
    color: "info",
    handleRouting: () => {},
    image: welcomeImage2,
  },
  {
    id: 3,
    title: "Get a Product Worth",
    highlight: "1000",
    description: "Code:",
    code: "CARE12",
    color: "primary",

    handleRouting: () => {},
    image: welcomeImage3,
  },
];

export default function Welcome() {
  const router = useRouter();

  const handleRouting = (): void => {
    router.push("/products");
  };

  return (
    <div className="container py-10 bg-background ">
      {/* Welcome Banner */}
      <div className="  bg-primary-800 rounded-lg relative overflow-hidden p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <strong className="text-7xl text-primary">D</strong>
            <div className="space-y-1">
              <h1 className=" text-xl md:text-2xl font-semibold text-white">
                Welcome to Doccure
              </h1>
              <p className="text-white font-semibold">
                Download the app to get free medicine & 50% off on your first
                order
              </p>
            </div>
          </div>
          <Button variant="soft" className="h-12 w-32 border" color="info">
            Download App
          </Button>
        </div>
        <Image
          src={shapeImage}
          width={200}
          alt="banner"
          className="absolute right-1/4 -top-4 hidden md:block"
        />
      </div>

      {/* Animated Promotional Cards */}
      <div className="  mt-20  ">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {promoCards.map((card) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <PromoCard {...card} handleRouting={handleRouting} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
