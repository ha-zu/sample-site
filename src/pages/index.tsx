import { Company } from "@/features/company/components/Company";
import { Footer } from "@/features/footer/components/Footer";
import { Header } from "@/features/header/components/Header";
import { Hero } from "@/features/hero/components/Hero";
import { Inquiry } from "@/features/inquiry/components/Inquiry";
import { MemberSection } from "@/features/member/components/MemberSection";
import { News } from "@/features/news/components/News";
import { Service } from "@/features/service/components/Service";
import { Vision } from "@/features/vision/components/Vision";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Vision />
      <News />
      <Service />
      <MemberSection />
      <div className="h-screen"></div>
      <Company />
      <Inquiry />
      <Footer />
    </>
  );
}
