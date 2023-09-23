import { motion } from "framer-motion";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  startX?: string;
  endX?: string;
}

export const SlideIn: FunctionComponent<Props> = ({
  children,
  className = "",
  delay = 0,
  duration = 0,
  startX = "0%",
  endX = "0%",
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: startX,
    },
    visible: {
      opacity: 1,
      x: endX,
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
      whileInView="visible"
      viewport={{ once: true }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};
