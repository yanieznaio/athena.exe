import React from "react";

type TextSize = "small" | "medium" | "large" | "xlarge";

interface TextSegment {
  text: string;
  highlight?: boolean;
  italic?: boolean;
  color?: string;
}

interface HighlightedTextProps {
  header?: string;
  headerColor?: string;
  segments: TextSegment[];
  size?: TextSize;
  align?: "left" | "center" | "right";
  className?: string;
}

const sizeClasses = {
  small: "text-3xl",
  medium: "text-4xl",
  large: "text-5xl",
  xlarge: "text-6xl",
};

const headerSizeClasses = {
  small: "text-2xl",
  medium: "text-3xl",
  large: "text-4xl",
  xlarge: "text-5xl",
};

const HighlightedText: React.FC<HighlightedTextProps> = ({
  header,
  headerColor = "text-purple-600",
  segments,
  size = "large",
  align = "left",
  className = "",
}) => {
  const alignClass = `text-${align}`;
  const textSizeClass = sizeClasses[size];
  const headerSizeClass = headerSizeClasses[size];

  return (
    <div className={`${alignClass} ${className}`}>
      {header && (
        <h2 className={`${headerSizeClass} ${headerColor} font-bold mb-4`}>
          {header}
        </h2>
      )}
      <p className={`${textSizeClass} leading-tight`}>
        {segments.map((segment, index) => {
          const italicClass = segment.italic ? "italic" : "";
          const colorClass = segment.color || "text-black";
          const fontWeight = segment.highlight ? "font-bold" : "font-normal";

          return (
            <span
              key={index}
              className={`${italicClass} ${colorClass} ${fontWeight}`}
            >
              {segment.text}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default HighlightedText;
