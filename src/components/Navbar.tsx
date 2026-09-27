"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/data/images";
import {
  X,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to adapt top bar slightly when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when sidebar is open and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };

    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sidebarOpen]);

  const navLinks = [
    { name: "About System", href: "#about" },
    { name: "Robotic Solutions", href: "#products" },
    { name: "Applications", href: "#applications" },
    { name: "Jetting Technology", href: "#technology" },
    { name: "Certifications", href: "#certifications" },
    { name: "Telemetry & Control", href: "#telemetry" },
    { name: "Technical FAQ", href: "#faq" },
    { name: "Contact & Consultation", href: "#contact" },
  ];

  return (
    <>
      {/* Top Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-[#060c18]/95 via-[#0b162a]/95 to-[#060c18]/95 backdrop-blur-md border-b border-white/10 py-3 sm:py-4 shadow-xl shadow-black/30"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 sm:py-7"
        }`}
      >
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo (Top Left) */}
            <Link
              href="/"
              className="flex items-center group transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Arham Oil Home"
            >
              <div className="relative h-10 w-36 xs:h-12 xs:w-44 sm:h-14 sm:w-54 lg:h-16 lg:w-64 flex items-center">
                <Image
                  src={IMAGES.logo}
                  alt="Arham Oil Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Top Right: GET IN TOUCH + 3x3 Grid Dots Icon */}
            <div className="flex items-center space-x-3 xs:space-x-5 sm:space-x-8">
              {/* "GET IN TOUCH" with underline */}
              <Link
                href="#contact"
                className="text-[11px] xs:text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest text-white/95 hover:text-white uppercase transition-all duration-200 border-b border-white hover:border-emerald-400 pb-0.5 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              >
                GET IN TOUCH
              </Link>

              {/* 3x3 Grid Dots Menu Trigger Button */}
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open Navigation Sidebar"
                className="group p-1.5 rounded-lg text-white hover:text-emerald-400 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
              >
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7 transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Row 1 */}
                  <rect x="2" y="2" width="4.5" height="4.5" rx="1.2" />
                  <rect x="9.75" y="2" width="4.5" height="4.5" rx="1.2" />
                  <rect x="17.5" y="2" width="4.5" height="4.5" rx="1.2" />
                  {/* Row 2 */}
                  <rect x="2" y="9.75" width="4.5" height="4.5" rx="1.2" />
                  <rect x="9.75" y="9.75" width="4.5" height="4.5" rx="1.2" />
                  <rect x="17.5" y="9.75" width="4.5" height="4.5" rx="1.2" />
                  {/* Row 3 */}
                  <rect x="2" y="17.5" width="4.5" height="4.5" rx="1.2" />
                  <rect x="9.75" y="17.5" width="4.5" height="4.5" rx="1.2" />
                  <rect x="17.5" y="17.5" width="4.5" height="4.5" rx="1.2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation Drawer Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 animate-in fade-in"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Sidebar Navigation Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[440px] max-w-full sm:max-w-[440px] bg-gradient-to-b from-[#091222] via-[#070d18] to-[#040810] backdrop-blur-2xl border-l border-white/10 shadow-2xl z-50 flex flex-col justify-between transition-transform duration-300 ease-out overflow-hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Site Navigation"
      >
        {/* Ambient subtle glow gradients */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header of Sidebar */}
        <div className="relative z-10 p-6 sm:p-8 border-b border-white/10 flex items-center justify-between">
          <div className="relative h-11 w-44 sm:h-12 sm:w-48 flex items-center">
            <Image
              src={IMAGES.logo}
              alt="Arham Oil Logo"
              fill
              className="object-contain object-left"
            />
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Navigation Menu"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Navigation Links List */}
        <div className="relative z-10 px-6 sm:px-8 py-6 flex-1 overflow-y-auto space-y-1">
          <div className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase mb-4">
            Navigation Menu
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className="group flex items-center justify-between py-3 px-3.5 rounded-xl hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 transition-all duration-200 border border-transparent hover:border-white/10"
            >
              <span className="text-base sm:text-lg font-medium text-slate-200 group-hover:text-white group-hover:translate-x-1.5 transition-all">
                {item.name}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        {/* Sidebar Footer & Quick Contact */}
        <div className="relative z-10 p-6 sm:p-8 border-t border-white/10 bg-gradient-to-t from-black/60 via-slate-950/40 to-transparent">
          {/* Quick Consultation Button with rich gradient */}
          <Link
            href="#contact"
            onClick={() => setSidebarOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Request Technical Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </aside>
    </>
  );
}
