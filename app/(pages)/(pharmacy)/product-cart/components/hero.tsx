"use client";

import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";
import Link from "next/link";

const ProductCartHero = () => {
  return (
    <section
      className="bg-[url(https://dashboi-one.vercel.app/images/home/hero-bg.png)]  bg-cover bg-no-repeat relative"
      id="home"
    >
      <div className="bg-gradient-to-b from-primary/30 to-[#fff] dark:from-primary/20 dark:to-[#0F172A] ">
        <div className="container">
          <div className=" relative z-10">
            <div className=" w-full pt-32 md:pt-64 pb-10  flex items-center justify-center   ">
              <div className=" flex justify-center flex-col items-center">
                <h1 className="max-w-[600px] text-xl md:text-2xl xl:text-4xl xl:leading-[52px] font-semibold text-default-900 ">
                  <span className="text-primary"> Cart</span>
                </h1>
                <Breadcrumbs>
                  <BreadcrumbItem>
                    <Link href="/">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link href="/products">All Product</Link>
                  </BreadcrumbItem>

                  <BreadcrumbItem>Product cart</BreadcrumbItem>
                </Breadcrumbs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCartHero;
