import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

interface AnimatedPageProps {
  direction: "left" | "right";
  children: React.ReactNode;
}

const variants = {
  initial: (direction: AnimatedPageProps["direction"]) => ({
    // left: direction === "left" ? "-100%" : "100%",
    opacity: 0.3,
  }),
  center: {
    // left: 0,
    opacity: 1,
  },
  exit: (direction: AnimatedPageProps["direction"]) => ({
    // left: direction === "left" ? "100%" : "-100%",
    opacity: 0.3,
  }),
};

const AnimatedPage: FC<AnimatedPageProps> = ({ children, direction }) => {
  return (
    <AnimatePresence custom={direction} initial={true}>
      <motion.div
        key={direction}
        initial="initial"
        animate="center"
        exit="exit"
        custom={direction}
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPage;
