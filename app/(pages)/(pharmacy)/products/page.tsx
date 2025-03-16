import Pagination from "@/components/PaginationComponents";
import { getProducts } from "@/config/products/products.config";
import ProductsHero from "./components/hero";
import PharmacyProductsCard from "./components/product-card";
import ProductFilterForm from "./components/product-filter-form";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 8;
  const products = await getProducts({ page, limit });

  return (
    <div>
      <ProductsHero />
      <div className="bg-background my-8">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4  ">
            <ProductFilterForm />
            <div className="col-span-3  mt-8 md:mt-0 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 justify-center md:justify-start">
                {products?.data?.length > 0 &&
                  products?.data?.map((product: any) => (
                    <PharmacyProductsCard key={product.id} product={product} />
                  ))}
              </div>

              <div className=" flex justify-center mt-8">
                {products?.pagination?.totalRecords >
                  products?.pagination?.perPage && (
                  <Pagination
                    currentPage={products?.pagination?.currentPage}
                    totalPages={products?.pagination?.totalPages}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
