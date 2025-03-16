"use client";
import { SonnToaster } from "@/components/ui/sonner";
import { Toaster as ReactToaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const Providers = ({ children }: { children: React.ReactNode }) => {
  const { theme, radius } = useThemeStore();

  return (
    <body
      className={cn("decure-app ", poppins.className, "theme-" + theme)}
      style={
        {
          "--radius": `${radius}rem`,
        } as React.CSSProperties
      }
    >
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
        <div className={cn("h-full  ")}>
          {children}
          <ReactToaster />
        </div>
        <Toaster />
        <SonnToaster />
      </ThemeProvider>
    </body>
  );
};

export default Providers;
