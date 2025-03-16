import Footer from "@/components/landing-page/footer";
import Header from "../components/header";
 

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
