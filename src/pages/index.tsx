import { Company } from "@/features/company/components/Company";
import { Footer } from "@/features/footer/components/Footer";
import { Header } from "@/features/header/components/Header";
import { Hero } from "@/features/hero/components/Hero";
import { Inquiry } from "@/features/inquiry/components/Inquiry";
import { Member } from "@/features/member/components/Member";
import { News } from "@/features/news/components/News";
import { Service } from "@/features/service/components/Service";
import { Vision } from "@/features/vision/components/Vision";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Vision />
      <News />
      <Service />
      <Member />
      <Company />
      <Inquiry />
      <Footer />
    </>
  );
}
