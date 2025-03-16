import { getProducts } from "@/config/products/products.config";
import Link from "next/link";
import PharmacyProductsCard from "../products/components/product-card";

export default async function BestSellingProducts() {
  const products = await getProducts({ page: 1, limit: 8 });

  return (
    <div className=" container py-10">
      <div className="bg-background     rounded-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl lg:text-2xl font-bold text-default-700   ">
            Weekly best sales
          </h1>
          <Link href="" className="text-blue-600">
            View all {"->"}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.data?.length > 0 &&
            products.data.map((product: any) => (
              <PharmacyProductsCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
