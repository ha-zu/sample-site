import { motion } from "framer-motion";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  startY?: string;
  endY?: string;
}

export const DropIn: FunctionComponent<Props> = ({
  children,
  className = "",
  delay = 0,
  duration = 0,
  startY = "0%",
  endY = "0%",
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: startY,
    },
    visible: {
      opacity: 1,
      y: endY,
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
