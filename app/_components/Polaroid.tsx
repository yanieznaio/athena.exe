import React from "react";
import Image from "next/image";

type PolaroidSize = "small" | "medium" | "large" | "square";
type PolaroidBackground = "yellow" | "white";

interface PolaroidProps {
  imageSrc: string;
  imageAlt: string;
  overlayText?: string;
  captionText: string | React.ReactNode;
  size?: PolaroidSize;
  background?: PolaroidBackground;
  imagePosition?: "center" | "left" | "right" | "top" | "bottom";
}

const sizeClasses = {
  small: "w-[300px] h-[350px]",
  medium: "w-[400px] h-[450px]",
  large: "w-[500px] h-[550px]",
  square: "w-[400px] h-[400px]",
};

const imageSizeClasses = {
  small: "h-[200px]",
  medium: "h-[280px]",
  large: "h-[350px]",
  square: "h-[280px]",
};

const Polaroid: React.FC<PolaroidProps> = ({
  imageSrc,
  imageAlt,
  overlayText,
  captionText,
  size = "medium",
  background = "yellow",
  imagePosition = "center",
}) => {
  const bgClass = background === "yellow" ? "bg-yellow" : "bg-white";
  const objectPositionClass = `object-${imagePosition}`;

  return (
    <div
      className={`${bgClass} ${sizeClasses[size]} flex flex-col p-2 shadow-lg`}
    >
      <div className={`w-full relative ${imageSizeClasses[size]}`}>
        <Image
          src={imageSrc}
          fill
          alt={imageAlt}
          className={`object-cover object-center ${objectPositionClass}`}
        />
        {overlayText && (
          <p className="w-full text-white absolute top-10 left-1/2 -translate-x-1/2 font-extrabold  text-4xl  text-center ">
            {overlayText}
          </p>
        )}
      </div>

      <div className="flex-1 flex items-center justify-center px-2">
        <p className="text-black font-bold text-2xl text-center font-[family-name:var(--font-caveat)]">
          {captionText}
        </p>
      </div>
    </div>
  );
};
export default Polaroid;
