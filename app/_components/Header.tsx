"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
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
            className="hidden md:block px-6 py-2 rounded-full font-semibold tracking-[-0.02em]"
          >
            Bac A Sable
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-transparent px-6 py-4 mix-blend-difference text-white z-[998]">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block font-extrabold tracking-[-0.03em]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <Link
              href="/contact-check"
              className="mt-4 px-6 py-2 rounded-full w-full font-extrabold tracking-[-0.03em] cursor-pointer"
            >
              Bac a Sable
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
