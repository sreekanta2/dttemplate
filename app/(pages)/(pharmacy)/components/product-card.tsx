import { avatar } from "@/config/user/user.config";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="  bg-white p-4 flex flex-col shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg   ">
      <div className="border rounded-lg mb-4">
        <Image src={avatar} className="p-4" layout="responsive" alt="product" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className=" font-medium text-sky-400">Home and Health</h2>
        <Link href="" className="font-semibold hover:text-sky-500">
          Echinacea
        </Link>
        <p className="">100ml</p>
      </div>
      <div>
        <div className=" flex  justify-between mt-4 font-medium text-gray-600">
          <div className="">
            <h1>$150</h1>
            <del className="text-gray-400">$200</del>
          </div>
          <span>Icon</span>
        </div>
      </div>
    </div>
  );
}
