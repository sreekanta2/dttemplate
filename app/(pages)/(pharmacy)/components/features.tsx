import { getProducts } from "@/app/api/products/products.config";
import Link from "next/link";
import PharmacyProductsCard from "../products/components/product-card";
export default async function Feature() {
  const products = await getProducts({ page: 1, limit: 8 });
  return (
    <div className=" container  py-14">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-bold text-primary my-8">
          Featured Products
        </h1>
        <Link href="/products" className="text-sky-400">
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
  );
}
