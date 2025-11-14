"use client";
import React, { useState } from "react";
import { ArrowBigRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 right-0 z-[999] h-16 flex items-center px-6 mix-blend-difference text-white max-w-[1750px] mx-auto">
        {/* LEFT: Logo */}
        <div className="flex-1">
          <a
            href="/"
            className="text-2xl font-extrabold uppercase tracking-[-0.03em]"
          >
            ATHENA
          </a>
        </div>

        {/* RIGHT: Login + Mobile Button */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* Desktop Login */}
          <Link
            href="/contact-check"
            className=" block px-6 py-2 flex rounded-full font-semibold tracking-[-0.02em]"
          >
            Bac A Sable <ArrowBigRight />
          </Link>
        </div>
      </div>
    </>
  );
}
