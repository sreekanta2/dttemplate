"use client";
import LandingMobileSidebar from "@/components/landing-page/header/landing-mobile-sidebar";
import MobileMenuHandler from "@/components/partials/header/mobile-menu-handler";
import ThemeButton from "@/components/partials/header/theme-button";
import { SiteLogo } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useSidebar } from "@/store";
import { Heart, ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import MainMenu from "./menu";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { mobileMenu } = useSidebar();
  const session = useSession();
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  if (isDesktop) {
    return (
      <div className="bg-primary/10 z-[9999]">
        <MainMenu />
      </div>
    );
  } else {
    return (
      <div
        className={
          scroll
            ? "bg-card/50 backdrop-blur-lg shadow-xl z-[9999] dark:bg-card/70 fixed top-0 left-0   py-4 w-full"
            : "w-full z-30 fixed top-0 left-0   py-3"
        }
      >
        <div className="flex w-full items-center justify-between   ">
          <div className=" w-full flex items-center   justify-between px-2">
            <div className="flex items-center  ">
              <SiteLogo className="h-6 w-6  text-primary" />
              <span className="text-primary-500 font-medium text-xl">
                Decure
              </span>
            </div>

            <div className="flex items-center  md:gap-4 lg:gap-6  ">
              <Button
                variant="ghost"
                size="icon"
                className=" h-9 w-9 hover:bg-primary-100 dark:hover:bg-default-300 hover:text-primary text-default-500 dark:text-default-800  rounded-full "
              >
                <div className="relative">
                  <Heart size={18} className="text-default-500  " />
                  <span className="absolute -top-2 -right-2 text-primary">
                    0
                  </span>
                </div>
              </Button>
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

              <ThemeButton />

              <MobileMenuHandler />
            </div>
            {mobileMenu && <LandingMobileSidebar type="pharmacy" />}
          </div>
        </div>
      </div>
    );
  }
}
