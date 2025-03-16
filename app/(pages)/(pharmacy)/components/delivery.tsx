import {
  ProductIcon1,
  ProductIcon2,
  ProductIcon3,
  ProductIcon4,
} from "@/components/svg";

export default function Delivery() {
  return (
    <div className="container py-14">
      {" "}
      <div className="    grid grid-flow-col-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className=" bg-card  p-4 flex  flex-col gap-2 rounded-md  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="w-20 h-20 bg-[#e8f1ff] rounded-full border p-4">
            <ProductIcon1 />
          </div>
          <h1 className="  font-semibold text-default-700">Free Shipping</h1>
          <p className="font-medium text-default-600">
            Free shipping with discount
          </p>
        </div>
        <div className="bg-card  p-4 flex  flex-col gap-2 rounded-md  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="w-20 h-20 bg-[#e8f1ff] rounded-full border p-4 flex justify-center items-center">
            <ProductIcon2 />
          </div>
          <h1 className="font-semibold text-default-700">Great Support 24/7</h1>
          <p className="font-medium text-default-600">
            Instant access to Contact
          </p>
        </div>
        <div className=" bg-card p-4 flex  flex-col gap-2 rounded-md  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="w-20 h-20 bg-[#e8f1ff] rounded-full border p-4 flex justify-center items-center">
            <ProductIcon3 />
          </div>
          <h1 className="font-semibold text-default-700">100% Sucre Payment</h1>
          <p className="font-medium text-default-600">
            We ensure your money is save
          </p>
        </div>
        <div className=" bg-card p-4 flex  flex-col gap-2 rounded-md  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="w-20 h-20 bg-[#e8f1ff] rounded-full border p-4 flex justify-center items-center">
            <ProductIcon4 />
          </div>
          <h1 className="font-semibold text-default-700">
            Money-Back Guarantee
          </h1>
          <p className="font-medium text-default-600">
            30 days money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
