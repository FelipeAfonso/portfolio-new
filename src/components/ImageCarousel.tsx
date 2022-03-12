import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: "left" | "right") => {
    return {
      x: direction === "right" ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: "left" | "right") => {
    return {
      zIndex: 0,
      x: direction === "left" ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const ImageCarousel: FC<{
  images: string[];
}> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const previous = () => {
    setDirection("left");
    setSelectedImageIndex((si) => (si === 0 ? images.length - 1 : si - 1));
  };
  const next = () => {
    setDirection("right");
    setSelectedImageIndex((si) => (si >= images.length - 1 ? 0 : si + 1));
  };
  return (
    <div
      className="w-full h-screen relative"
      style={{
        userSelect: "none",
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={selectedImageIndex}
          className="w-full h-screen object-contain bg-black my-4 absolute"
          style={{
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          custom={direction}
          variants={variants}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              next();
            } else if (swipe > swipeConfidenceThreshold) {
              previous();
            }
          }}
          src={images[selectedImageIndex]}
        />
      </AnimatePresence>
      <MdChevronLeft
        className="text-gray-50 cursor-pointer rounded-full p-1 hover:bg-gray-50 hover:bg-opacity-20 hover:animate-pulse absolute left-2 top-1/2 z-50"
        onClick={() => previous()}
        size={48}
      />
      <MdChevronRight
        className="text-gray-50 cursor-pointer rounded-full p-1 hover:bg-gray-50 hover:bg-opacity-20 hover:animate-pulse absolute right-2 top-1/2 z-50"
        onClick={() => next()}
        size={48}
      />
    </div>
  );
};
