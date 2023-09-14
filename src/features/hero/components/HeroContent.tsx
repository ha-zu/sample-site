import { Button } from "@/features/base/components/Button";
import { FadeIn } from "@/features/base/components/FadeIn";
import { HeroCaption } from "@/features/hero/components/HeroCaption";
import { HeroTitle } from "@/features/hero/components/HeroTitle";
import Image from "next/image";

export default function HeroContent() {
  return (
    <FadeIn delay={1} duration={1.5}>
      <div className="w-1/2">
        <HeroCaption label="アプリ" />
        <HeroTitle className="mt-6" label="テストタイトル" />
        <Button className="mt-6">あいうえお</Button>
      </div>
      <div className="w-1/2">
        <Image
          src="https://via.placeholder.com/400"
          width={400}
          height={400}
          alt="img"
        />
      </div>
    </FadeIn>
  );
}
