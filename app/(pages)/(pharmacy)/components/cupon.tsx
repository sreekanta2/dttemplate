import Link from "next/link";

export default function Coupon({}) {
  const prices = [
    {
      id: 1,
      regular: 200,
      price: 2000,
    },
    {
      id: 2,
      regular: 250,
      price: 25000,
    },
    {
      id: 3,
      regular: 300,
      price: 3000,
    },
    {
      id: 4,
      regular: 350,
      price: 3500,
    },
  ];
  return (
    <div className=" container   ">
      <div className="bg-primary-900 dark:bg-background  py-14 px-4 dark:px-0  rounded-md  ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl lg:text-2xl font-bold text-white  ">
            Save more with coupons
          </h1>
          <Link href="" className="text-blue-600">
            View all {"->"}
          </Link>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-6">
          {prices.map((price) => (
            <div
              key={price.id}
              className="  bg-white dark:bg-card p-4 flex  justify-between items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg   "
            >
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-base lg:text-xl ">
                  Flat ${price.regular} Off{" "}
                </p>
                <h2 className=" font-medium text-sky-400">
                  On above ${price.price}
                </h2>
              </div>
              <div className=" border border-dotted py-1 px-2 rounded-full  text-white   bg-primary">
                <span>code{price.regular}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
