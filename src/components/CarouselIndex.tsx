import { motion } from "framer-motion";
import { CSSProperties, FC } from "react";

interface CarouselIndexProps {
  amount: number;
  currentIndex: number;
  style?: CSSProperties;
  className?: string;
}

const variants = {
  start: {
    opacity: 0,
    width: "0.75rem",
    backgroundColor: "#fefefe",
  },
  visible: (active: boolean) => ({
    opacity: 1,
    backgroundColor: active ? "#F28705" : "#fefefe",
  }),
};

const CarouselIndex: FC<CarouselIndexProps> = ({
  amount,
  currentIndex,
  style,
  className,
}) => {
  return (
    <div style={style} className={`flex flex-row ${className}`}>
      {Array.from({ length: amount }, (_, i) => (
        <motion.div
          key={i}
          initial="start"
          animate="visible"
          custom={i === currentIndex}
          variants={variants}
          className="h-3 rounded-full mx-2"
        />
      ))}
    </div>
  );
};

export default CarouselIndex;
