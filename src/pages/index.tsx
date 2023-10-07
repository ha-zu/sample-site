import { CorporateSection } from "@/features/company/components/CorporateSection";
import { FooterSection } from "@/features/footer/components/FooterSection";
import { Header } from "@/features/header/components/Header";
import { HeroSection } from "@/features/hero/components/HeroSection";
import { InquirySection } from "@/features/inquiry/components/InquirySection";
import { MemberSection } from "@/features/member/components/MemberSection";
import { NewsSection } from "@/features/news/components/NewsSection";
import { ServiceSection } from "@/features/service/components/ServiceSection";
import { VisionSection } from "@/features/vision/components/VisionSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <VisionSection />
      <NewsSection />
      <ServiceSection />
      <MemberSection />
      {/* <div className="h-screen"></div> */}
      <CorporateSection />
      <InquirySection />
      <FooterSection />
    </>
  );
}
