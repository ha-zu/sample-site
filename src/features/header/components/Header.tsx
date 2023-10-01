import { FadeIn } from "@/features/base/components/FadeIn";
import { useScrollPosition } from "@/features/base/hooks/useScroolPosition";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Navigation from "./Navigation";

const variants = {
  init: {
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderButtom: "1.5px solid rgba(0, 0, 0, 0)",
  },
  beyond: {
    color: "rgb(0, 0, 0)",
    backgroundColor: "white",
    borderButtom: "1.5px solid #eaeaea",
  },
};

export const Header = () => {
  const { scrollY } = useScrollPosition();
  const controls = useAnimation();

  useEffect(() => {
    if (scrollY > window?.innerHeight) {
      controls.start("beyond");
    } else {
      controls.start("init");
    }
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed w-full h-16 z-50 px-6 text-white`}
      initial="init"
      variants={variants}
      animate={controls}
    >
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
        <Navigation />
      </div>
    </motion.header>
  );
};
