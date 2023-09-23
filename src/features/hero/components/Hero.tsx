import { SlideIn } from "@/features/base/components/SlideIn";
import HeroContent from "./HeroContent";
export const Hero = () => {
  return (
    <SlideIn
      delay={0}
      duration={1}
      startX="-100%"
      endX="0%"
      className="bg-primary"
    >
      <div className="h-screen pt-[64px] pb-[64px]  text-white flex items-center justify-center">
        <HeroContent />
      </div>
    </SlideIn>
  );
};
