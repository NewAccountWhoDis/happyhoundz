"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { business } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

const topNavPaletteByPath: Record<
  string,
  {
    primary: string;
    accent: string;
    active: string;
    menu: string;
  }
> = {
  "/": {
    primary: "#FFFFFF",
    accent: "#FFD23F",
    active: "#FFD23F",
    menu: "#FFFFFF",
  },
  "/about": {
    primary: "#FFFFFF",
    accent: "#FFD23F",
    active: "#FFD23F",
    menu: "#FFFFFF",
  },
  "/services": {
    primary: "#FFFFFF",
    accent: "#FFD23F",
    active: "#FFD23F",
    menu: "#FFFFFF",
  },
  "/book": {
    primary: "#FFFFFF",
    accent: "#FFD23F",
    active: "#FFD23F",
    menu: "#FFFFFF",
  },
  "/gallery": {
    primary: "#FFFFFF",
    accent: "#FFD23F",
    active: "#FFD23F",
    menu: "#FFFFFF",
  },
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const topPalette = topNavPaletteByPath[pathname] ?? topNavPaletteByPath["/"];
  const navPrimary = scrolled ? "#1A1A1A" : topPalette.primary;
  const navAccent = scrolled ? "#FF6B35" : topPalette.accent;
  const navActive = scrolled ? "#FF6B35" : topPalette.active;
  const menuColor = scrolled ? "#1A1A1A" : topPalette.menu;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,249,240,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🐾</span>
            <span
              className="font-grotesk font-bold text-lg leading-tight"
              style={{ color: navPrimary }}
            >
              <span style={{ color: navAccent }}>Happy</span>{" "}
              <span style={{ color: navPrimary }}>Houndz</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-nunito font-semibold text-sm transition-colors relative group"
                  style={{
                    color: pathname === href ? navActive : navPrimary,
                  }}
                >
                  {label}
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                    style={{
                      backgroundColor: "#FFD23F",
                      width: pathname === href ? "100%" : "0%",
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Book Now CTA */}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-grotesk font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: "#FFD23F", color: "#1A1A1A" }}
          >
            Book Now 🐾
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span
              className="w-6 h-0.5 transition-all duration-300 block"
              style={{
                backgroundColor: menuColor,
                transform: open ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="w-6 h-0.5 transition-all duration-300 block"
              style={{
                backgroundColor: menuColor,
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="w-6 h-0.5 transition-all duration-300 block"
              style={{
                backgroundColor: menuColor,
                transform: open ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            id="mobile-nav"
            style={{ backgroundColor: "#FF6B35" }}
          >
            <div className="flex justify-end p-5">
              <button
                onClick={() => setOpen(false)}
                className="text-white text-3xl font-bold"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="font-grotesk font-bold text-4xl text-white hover:text-yellow-300 transition-colors"
                    style={{ color: pathname === href ? "#FFD23F" : "white" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center pb-12">
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="px-8 py-4 rounded-full font-grotesk font-bold text-xl transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#FFD23F", color: "#1A1A1A" }}
              >
                Book Now 🐾
              </Link>
            </div>
            <div className="px-6 pb-8 text-center text-white/80 font-nunito text-sm">
              Fastest replies often come through Facebook Messenger at{" "}
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white underline underline-offset-4"
              >
                {business.facebookHandle}
              </a>
              .
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
