import { siteConfig } from "@/config/site";

import ThemeCustomize from "@/components/partials/customizer/theme-customizer";
import Providers from "@/provider/providers";
import TanstackProvider from "@/provider/providers.client";
 

import AuthProvider from "@/provider/auth.provider";
import { Inter } from "next/font/google";
 
import "./assets/scss/globals.scss";
import "./assets/scss/theme.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <AuthProvider>
        <TanstackProvider>
          <Providers>
            {children}

            <ThemeCustomize />
          </Providers>
        </TanstackProvider>
      </AuthProvider>
    </html>
  );
}
