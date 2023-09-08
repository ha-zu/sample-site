import { Button } from "@/features/base/components/Button";
import { HeroCaption } from "@/features/hero/components/HeroCaption";
import { HeroTitle } from "@/features/hero/components/HeroTitle";
import Image from "next/image";
export const Hero = () => {
  return (
    <div className="pt-[64px] pb-[64px] bg-primary text-white flex items-center justify-center">
      <div className="flex flex-row gap-3 max-w-[1000px] mx-auto p-6">
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
      </div>
    </div>
  );
};
