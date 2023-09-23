import { FadeIn } from "@/features/base/components/FadeIn";
import { useScrollPosition } from "@/features/base/hooks/useScroolPosition";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
export const Header = () => {
  const { scrollY } = useScrollPosition();
  const [headerStyle, setHeaderStyle] = useState("");

  useEffect(() => {
    if (scrollY > window?.innerHeight) {
      setHeaderStyle("bg-primary");
    } else {
      setHeaderStyle("bg-transparent");
    }
  }, [scrollY]);

  return (
    <header className={`fixed w-full h-16 px-6 ${headerStyle} text-white`}>
      <div
        className={`
        container
        flex flex-row justify-between
        items-center
        h-full
        mx-auto
      `}
      >
        <FadeIn delay={0.5} duration={1.5}>
          <div>LOGO</div>
        </FadeIn>
        <FadeIn delay={1} duration={1.5}>
          <Navigation />
        </FadeIn>
      </div>
    </header>
  );
};
