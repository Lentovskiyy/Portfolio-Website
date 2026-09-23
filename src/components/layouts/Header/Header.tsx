"use client"
import { useState, useEffect } from "react";
import {personalName} from "@/src/constants/general";
import {navItems} from "@/src/constants/navItemsContent";
import NavItems from "@/src/components/ui/NavItems/NavItems";
import Link from "next/link";
import MobileNavLink from "@/src/components/ui/MobileNavLink/MobileNavLink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py- md:px-6 py-4 ${
        scrolled
          ? "bg-[#140f1d]/40 backdrop-blur-md border-b border-purple-500/10 shadow-lg shadow-purple-950/20 py-3"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className=" text-lg md:text-xl font-light text-purple-50 tracking-tight hover:opacity-80 "
        >
          {personalName} <span className="text-lg md:text-xl font-serif italic text-purple-300">.dev</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({href, label}) => (
            <NavItems
              key={href}
              href={href}
              label={label}
            />
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="px-5 py-2 rounded-lg font-medium text-purple-50 bg-purple-900/70 hover:bg-purple-950/90 border border-purple-400/20 hover:border-purple-600/40 backdrop-blur-md  tracking-wide"
          >
            Let's Talk
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-purple-200/80 hover:text-purple-50 p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-6 rounded-xl bg-[#1c1528]/95 border border-purple-500/20 backdrop-blur-xl space-y-4 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                label={item.label}
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full py-2.5 text-center rounded-lg font-medium text-purple-50 bg-gradient-to-r from-purple-900 to-violet-900 border border-purple-400/30 tracking-wide mt-2"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}