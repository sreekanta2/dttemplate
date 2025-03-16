"use client";
import CustomImage from "@/components/ImageComponent";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { categories } from "./data";

export default function Category() {
  const router = useRouter();
  const handleRouting = () => {
    // Navigate to the products page of the selected category
    router.push(`/products `);
  };
  return (
    <div className=" container    ">
      <h1 className="text-xl lg:text-2xl font-bold text-primary my-6 lg:my-8">
        Shop Popular Categories
      </h1>
      <div className=" grid grid-cols-1 mb-10 md:grid-cols-3 lg:grid-cols-6  gap-4">
        {categories.map((category) => {
          return (
            <div
              key={category.name}
              className="border flex bg-card  flex-col items-center justify-center p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <CustomImage
                src={category?.src}
                alt={category?.name}
                aspectRatio="1/1"
                containerClass="w-24  "
                className="rounded-lg  "
              />
              <Link
                href="/products"
                className=" font-medium text-default-800 hover:text-info"
              >
                {category?.name}
              </Link>
              <p className="font-semibold text-default-600">
                {category?.products} Products
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
