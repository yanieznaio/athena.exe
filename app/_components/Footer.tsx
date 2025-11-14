"use client";
import React from "react";
import Image from "next/image";

interface FooterProps {
  backgroundImage: string;
}

const Footer: React.FC<FooterProps> = ({ backgroundImage }) => {
  return (
    <footer className="relative w-full h-64 flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={backgroundImage} // use the prop here
        fill
        alt="Footer Background"
        className="object-cover -z-10"
      />

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      {/* Footer Text */}
      <p className="yellow text-[5rem] md:text-[6rem] lg:text-[8rem] font-extrabold uppercase text-center leading-[1]">
        All Rights Reserved 2025
      </p>
    </footer>
  );
};

export default Footer;
