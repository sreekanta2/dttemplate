import CustomImage from "@/components/ImageComponent";
import { Separator } from "@/components/ui/separator";
import sellerImage from "@/public/images/pharmacy/seller-img.png";
import Image from "next/image";
import Link from "next/link";
import { products } from "./data";
export default function HotDeals() {
  return (
    <div className=" bg-default-50    mt-16  ">
      <div className=" container   ">
        <Separator />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-16  ">
          <div className="border  mx-auto  rounded-lg flex flex-col justify-between gap-4  md:col-span-1 bg-primary-700 dark:bg-card mr-0  w-full h-full ">
            <div className="flex flex-col justify-center items-center text-center gap-4    ">
              <p className=" bg-primary-700 w-32  text-white  font-semibold p-1 rounded-lg my-2">
                Medical Pack
              </p>
              <h1 className=" text-3xl lg:text-4xl text-white font-bold">
                Get offers upto 25%
              </h1>
              <button className="bg-background text-[#004fff] py-2 px-4 rounded-md   w-44  h-12 border-[#004fff] hover:text-white hover:bg-primary-900  transition  delay-20 duration-200 ease-in-out ">
                Shop Now
              </button>
              <div className="flex gap-1">
                <div className="px-2 py-1 w-14 border rounded-lg bg-background text-default-700 relative">
                  <div>
                    <h1 className="font-bold">06</h1>
                    <p className="text-xs">Days</p>
                  </div>
                  <p className="border-4  rounded-full border-primary-900 absolute -bottom-1 w-10"></p>
                </div>
                <div className="px-2 py-1 w-14 border rounded-lg bg-background text-default-700 relative">
                  <div>
                    <h1 className="font-bold">06</h1>
                    <p className="text-xs">Hour</p>
                  </div>
                  <p className="border-4  rounded-full border-primary-900 absolute -bottom-1 w-10"></p>
                </div>
                <div className="px-2 py-1 w-14 border rounded-lg bg-background text-default-700 relative">
                  <div>
                    <h1 className="font-bold">06</h1>
                    <p className="text-xs">Minutes</p>
                  </div>
                  <p className="border-4  rounded-full border-primary-900 absolute -bottom-1 w-10"></p>
                </div>
                <div className="px-2 py-1 w-14 border rounded-lg bg-background text-default-700 relative">
                  <div>
                    <h1 className="font-bold">06</h1>
                    <p className="text-xs">Second</p>
                  </div>
                  <p className="border-4  rounded-full border-primary-900 absolute -bottom-1 w-10"></p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Image
                className=" mx-0  hidden lg:block w-56"
                src={sellerImage}
                alt=""
              />
            </div>
          </div>
          <div className="md:col-span-3 pt-16 md:pt-0 space-y-2 ">
            <h1 className="text-xl lg:text-2xl font-bold text-primary ">
              Best Sells and Top Rated
            </h1>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="border  p-2  rounded-lg bg-card overflow-hidden flex gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  >
                    <div className=" bg-primary-50  p-1  rounded-lg">
                      <CustomImage
                        src={product?.sellerIcon}
                        alt={product?.name}
                        aspectRatio="1/1"
                        containerClass="w-24  "
                        className="rounded-lg  "
                      />
                    </div>
                    <div className="font-semibold text-default-800">
                      <h1 className="text-primary">{product.category}</h1>
                      <Link
                        href="/products"
                        className="hover:text-[#0d6efd] text-base font-medium"
                      >
                        {product.name}
                      </Link>
                      <h1>
                        ${product.price}{" "}
                        <del className="text-default-300">
                          {" "}
                          ${product.originalPrice}
                        </del>
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
