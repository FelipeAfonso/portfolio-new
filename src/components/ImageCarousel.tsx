import { FC, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const ImageCarousel: FC<{
  images: string[];
}> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <div
      className="w-full h-full relative"
      style={{
        userSelect: "none",
      }}
    >
      <img
        className="w-full h-screen object-contain bg-black my-4"
        style={{
          userSelect: "none",
          MozUserSelect: "none",
          WebkitUserSelect: "none",
        }}
        src={images[selectedImageIndex]}
      />
      <MdChevronLeft
        className="text-gray-50 cursor-pointer rounded-full p-1 hover:bg-gray-50 hover:bg-opacity-20 hover:animate-pulse absolute left-2 top-1/2"
        onClick={() =>
          setSelectedImageIndex((si) => (si === 0 ? images.length - 1 : si - 1))
        }
        size={48}
      />
      <MdChevronRight
        className="text-gray-50 cursor-pointer rounded-full p-1 hover:bg-gray-50 hover:bg-opacity-20 hover:animate-pulse absolute right-2 top-1/2"
        onClick={() =>
          setSelectedImageIndex((si) => (si >= images.length - 1 ? 0 : si + 1))
        }
        size={48}
      />
    </div>
  );
};
