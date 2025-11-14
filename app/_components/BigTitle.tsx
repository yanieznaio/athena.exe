import React from "react";

type TitleSize = "small" | "medium" | "large" | "xlarge";

interface BigTitleProps {
  lines: Array<string | { text: string; highlight?: boolean }>;
  size?: TitleSize;
  highlightColor?: string;
  align?: "left" | "center" | "right";
  uppercase?: boolean;
  className?: string;
}

const sizeClasses = {
  small: "md:text-[6rem] text-6xl",
  medium: "md:text-[8rem] text-6xl",
  large: "md:text-[10rem] text-6xl",
  xlarge: "md:text-[12rem] text-6xl",
};

const BigTitle: React.FC<BigTitleProps> = ({
  lines,
  size = "xlarge",
  highlightColor = "purple",
  align = "center",
  uppercase = true,
  className = "",
}) => {
  const alignClass = `text-${align}`;
  const uppercaseClass = uppercase ? "uppercase" : "";

  return (
    <p
      className={`${sizeClasses[size]} ${uppercaseClass} ${alignClass} leading-[0.85] tracking-[-0.08em] font-extrabold max-w-8xl flex flex-col ${className}`}
    >
      {lines.map((line, index) => {
        // If line is a string, render it as plain text
        if (typeof line === "string") {
          return <span key={index}>{line}</span>;
        }

        // If line is an object, check for highlight
        return (
          <span key={index}>
            {line.highlight ? (
              <strong className={highlightColor}>{line.text}</strong>
            ) : (
              line.text
            )}
          </span>
        );
      })}
    </p>
  );
};
export default BigTitle;
