import { motion } from "framer-motion";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FadeIn: FunctionComponent<Props> = ({
  children,
  className = "",
  delay = 0,
  duration = 0,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      //   animate="visible"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-row gap-3 max-w-[1000px] mx-auto p-6"
    >
      {children}
    </motion.div>
  );
};
