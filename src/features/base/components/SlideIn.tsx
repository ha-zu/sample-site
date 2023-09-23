import { motion } from "framer-motion";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const SlideIn: FunctionComponent<Props> = ({
  children,
  className = "",
  delay = 0,
  duration = 0,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      width: "0%",
    },
    visible: {
      opacity: 1,
      width: "100%",
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
