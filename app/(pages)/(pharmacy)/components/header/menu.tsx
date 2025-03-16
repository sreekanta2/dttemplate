"use client";

import { mainMenu } from "@/components/landing-page/header/config";
import FullScreenToggle from "@/components/partials/header/full-screen";
import ProfileInfo from "@/components/partials/header/profile-info";
import ThemeButton from "@/components/partials/header/theme-button";
import { SiteLogo } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchBar from "./search-bar";

export default function MainMenu() {
  const session = useSession();
  const [showExtraMenu, setShowExtraMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowExtraMenu(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        showExtraMenu
          ? " bg-card/50 backdrop-blur-lg shadow-xl  z-50   fixed top-0 left-0 w-full py-8"
          : "fixed top-30 left-0 w-full space-y-6  z-50"
      }
    >
      {!showExtraMenu && <SearchBar />}
      <nav className="container flex justify-center items-center relative">
        {/* Navigation Menu (Always Centered) */}
        <ul className="flex gap-6 absolute left-1/2 transform -translate-x-1/2">
          {mainMenu?.map((item, i) => (
            <li
              key={`main-item-${i}`}
              className="block text-base font-medium text-default-600 hover:text-primary"
            >
              <Link href={item.href}>{item.title} </Link>
            </li>
          ))}
        </ul>

        {/* Logo & User Menu (Initially Hidden, Shows After Scroll) */}
        <motion.div
          className="flex items-center gap-6 absolute left-0"
          initial={{ opacity: 0, y: -20 }}
          animate={
            showExtraMenu ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.2 }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <SiteLogo className="h-8 w-8 text-primary" />
            <span className="text-primary-500 font-medium text-xl">Care</span>
          </Link>
        </motion.div>

        <motion.div
          className="flex items-center gap-6 absolute right-0"
          initial={{ opacity: 0, y: -20 }}
          animate={
            showExtraMenu ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.2 }}
        >
          {/* User Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 hover:bg-primary-100 dark:hover:bg-default-300 hover:text-primary text-default-500 dark:text-default-800 rounded-full"
          >
            <div className="relative">
              <Heart size={18} className="text-default-500" />
              <span className="absolute -top-2 -right-2 text-primary">0</span>
            </div>
          </Button>
          <Link href="/products/product-cart">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 hover:bg-primary-100 dark:hover:bg-default-300 hover:text-primary text-default-500 dark:text-default-800 rounded-full"
            >
              <div className="relative">
                <ShoppingCart size={18} className="text-default-500" />
                <span className="absolute -top-2 -right-2 text-primary">0</span>
              </div>
            </Button>
          </Link>
          <FullScreenToggle />
          <ThemeButton />
          {!session.data?.user ? (
            <Button size="sm">
              <Link href="/auth/login" className="text-sm font-semibold">
                Login
              </Link>
            </Button>
          ) : (
            <ProfileInfo />
          )}
        </motion.div>
      </nav>
    </div>
  );
}
