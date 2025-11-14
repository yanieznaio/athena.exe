import React from "react";
import Image from "next/image";

type BackgroundColor =
  | "yellow"
  | "white"
  | "purple"
  | "black"
  | "cream"
  | "blue"
  | "green";
type TextMode = "normal" | "blend";
type ContentAlign = "center" | "start" | "end";

interface BackgroundSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: BackgroundColor;
  textMode?: TextMode;
  height?: string;
  contentAlign?: ContentAlign;
  contentJustify?: ContentAlign;
  overlayOpacity?: number;
  imagePosition?: "center" | "top" | "bottom" | "left" | "right";
  className?: string;
}

const bgColorClasses: Record<BackgroundColor, string> = {
  yellow: "bg-yellow",
  white: "bg-white",
  purple: "bg-purple-600",
  black: "bg-black",
  cream: "bg-[#FFF8DC]",
  blue: "bg-blue-600",
  green: "bg-green-600",
};

const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  children,
  backgroundImage,
  backgroundColor = "white",
  textMode = "normal",
  height = "120vh",
  contentAlign = "center",
  contentJustify = "center",
  overlayOpacity = 0,
  imagePosition = "center",
  className = "",
}) => {
  const bgClass = bgColorClasses[backgroundColor];
  const blendClass =
    textMode === "blend" ? "mix-blend-difference text-white" : "";
  const alignClass = `items-${contentAlign}`;
  const justifyClass = `justify-${contentJustify}`;
  const objectPositionClass = `object-${imagePosition}`;

  return (
    <div
      className={`w-full relative flex flex-col ${alignClass} ${justifyClass} px-10 ${
        !backgroundImage ? bgClass : ""
      } ${className}`}
      style={{ height }}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            fill
            alt="Background"
            className={`object-cover ${objectPositionClass} -z-10`}
            priority
          />
          {overlayOpacity > 0 && (
            <div
              className="absolute inset-0 bg-black -z-10"
              style={{ opacity: overlayOpacity }}
            />
          )}
        </>
      )}
      <div className={`relative z-10 ${blendClass}`}>{children}</div>
    </div>
  );
};

type TitleSize = "small" | "medium" | "large" | "xlarge";
type TitleColor = "yellow" | "white" | "black";

interface BigTextTitleProps {
  lines: Array<string>;
  size?: TitleSize;
  color?: TitleColor;
  align?: "left" | "center" | "right";
  uppercase?: boolean;
  className?: string;
}

const sizeClasses = {
  small: "text-[6rem]",
  medium: "text-[8rem]",
  large: "text-[10rem]",
  xlarge: "text-[12rem]",
};

const colorClasses: Record<TitleColor, string> = {
  yellow: "yellow",
  white: "text-white",
  black: "text-black",
};

const BigTextTitle: React.FC<BigTextTitleProps> = ({
  lines,
  size = "xlarge",
  color = "white",
  align = "center",
  uppercase = true,
  className = "",
}) => {
  const alignClass = `text-${align}`;
  const uppercaseClass = uppercase ? "uppercase" : "";
  const colorClass = colorClasses[color];

  return (
    <p
      className={`${sizeClasses[size]} ${uppercaseClass} ${alignClass} ${colorClass} leading-[0.85] tracking-[-0.08em] font-extrabold max-w-8xl flex flex-col ${className}`}
    >
      {lines.map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </p>
  );
};

export { BackgroundSection, BigTextTitle };
export default BackgroundSection;
