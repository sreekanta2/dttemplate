import { SiteLogo } from "@/components/svg";
import Link from "next/link";

import FullScreenToggle from "@/components/partials/header/full-screen";
import ProfileInfo from "@/components/partials/header/profile-info";
import ThemeButton from "@/components/partials/header/theme-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";
const categories = [
  {
    title: "Fashion & Apparel",
    items: [
      { value: "mens-clothing", label: "Men’s Clothing" },
      { value: "womens-clothing", label: "Women’s Clothing" },
      { value: "footwear", label: "Footwear" },
      { value: "accessories", label: "Accessories & Jewelry" },
    ],
  },
  {
    title: "Electronics & Gadgets",
    items: [
      { value: "smartphones", label: "Smartphones & Accessories" },
      { value: "laptops", label: "Laptops & Computers" },
      { value: "gaming", label: "Gaming & VR" },
      { value: "home-appliances", label: "Home Appliances" },
    ],
  },
  {
    title: "Health & Beauty",
    items: [
      { value: "skincare", label: "Skincare" },
      { value: "haircare", label: "Haircare" },
      { value: "makeup", label: "Makeup & Cosmetics" },
      { value: "nutrition", label: "Nutrition & Supplements" },
    ],
  },
  {
    title: "Home & Living",
    items: [
      { value: "furniture", label: "Furniture" },
      { value: "decor", label: "Home Decor" },
      { value: "kitchen", label: "Kitchenware" },
    ],
  },
  {
    title: "Other",
    items: [
      { value: "baby", label: "Baby" },
      { value: "sports", label: "Sports & Outdoors" },
      { value: "automotive", label: "Automotive & Tools" },
      { value: "pets", label: "Pet Supplies" },
    ],
  },
];
export default function SearchBar() {
  const session = useSession();
  return (
    <div className="space-y-3">
      <div className="w-full text-center p-4  text-white bg-primary/40">
        <p>
          Special offer! Get -20% off for first order with minimum $200.00 in
          cart.
        </p>
      </div>
      <div className=" container    w-full">
        <div className="w-full  h-14  grid  grid-cols-3 items-center ">
          <Link href="/" className="flex items-center gap-1 w-fit">
            <SiteLogo className="h-8 w-8  text-primary" />
            <span className="text-primary-500 font-medium text-xl">Care</span>
          </Link>
          <div className=" w-full max-w-2xl h-11 rounded-full bg-background flex items-center pl-2 p-1 min-w-[240px] ">
            <Select>
              <SelectTrigger className="w-fit border-none border-r-2">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="w-fit">
                {categories.map((category) => (
                  <React.Fragment key={category.title}>
                    <SelectItem
                      value=""
                      disabled
                      className="text-lg font-bold text-primary-600"
                    >
                      {category.title}
                    </SelectItem>
                    {category.items.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </React.Fragment>
                ))}
              </SelectContent>
            </Select>

            <Input
              className="border-0 bg-transparent"
              placeholder="Search for medicine"
            />
            <Button
              className="rounded-full h-8 flex gap-2 items-center"
              color="primary"
              size="sm"
            >
              <Search size={16} className="  text-white" /> <span>Search</span>
            </Button>
          </div>
          <div className="flex w-full  justify-end gap-6">
            <Button
              variant="ghost"
              size="icon"
              className=" h-9 w-9 hover:bg-primary-100 dark:hover:bg-default-300 hover:text-primary text-default-500 dark:text-default-800  rounded-full "
            >
              <div className="relative">
                <Heart size={18} className="text-default-500  " />
                <span className="absolute -top-2 -right-2 text-primary">0</span>
              </div>
            </Button>
            <Link href="/product-cart">
              <Button
                variant="ghost"
                size="icon"
                className=" h-9 w-9 hover:bg-primary-100 dark:hover:bg-default-300 hover:text-primary text-default-500 dark:text-default-800  rounded-full "
              >
                <div className="relative">
                  <ShoppingCart size={18} className="text-default-500  " />
                  <span className="absolute -top-2 -right-2 text-primary">
                    0
                  </span>
                </div>
              </Button>
            </Link>
            <FullScreenToggle />
            <ThemeButton />
            {!session?.data ? (
              <Button size="sm">
                <Link href="/auth/login" className="text-sm font-semibold ">
                  Login
                </Link>
              </Button>
            ) : (
              <ProfileInfo />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
