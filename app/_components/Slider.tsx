"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SliderImage {
  src: string;
  alt: string;
}

interface DualRowSliderProps {
  purpleImages: SliderImage[];
  yellowImages: SliderImage[];
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}

const DualRowSlider: React.FC<DualRowSliderProps> = ({
  purpleImages,
  yellowImages,
  imageWidth = 300,
  imageHeight = 200,
  className = "",
}) => {
  const purpleRowRef = useRef<HTMLDivElement>(null);
  const yellowRowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const purpleRow = purpleRowRef.current;
    const yellowRow = yellowRowRef.current;
    const container = containerRef.current;

    if (!purpleRow || !yellowRow || !container) return;

    // Reduced horizontal movement
    gsap.to(purpleRow, {
      x: 100, // smaller movement
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(yellowRow, {
      x: -100, // smaller movement
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden cream py-90 ${className}`}
    >
      {/* Purple Row - slightly rotated */}
      <div
        ref={purpleRowRef}
        className="flex will-change-transform p-4 bg-purple-600"
        style={{
          width: "100%",
          transform: "rotate(-3deg)", // reduced rotation
        }}
      >
        {purpleImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: imageWidth, height: imageHeight }}
          >
            <div className="relative w-full h-full">
              {image.src && (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Yellow Row - crossed effect */}
      <div
        ref={yellowRowRef}
        className="flex will-change-transform p-4 bg-yellow"
        style={{
          width: "100%",
          marginTop: `-${imageHeight * 0.3}px`, // slight vertical overlap
          transform: "rotate(3deg)", // reduced rotation
        }}
      >
        {yellowImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: imageWidth,
              height: imageHeight,
              marginLeft: index % 2 === 0 ? imageWidth * 0.3 : 0, // smaller horizontal stagger
            }}
          >
            <div className="relative w-full h-full">
              {image.src && (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DualRowSlider;
