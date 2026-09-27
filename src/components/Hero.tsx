"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { IMAGES } from "@/data/images";
import { Play, X, ShieldCheck, PhoneCall } from "lucide-react";

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVideoModalOpen(false);
        setContactModalOpen(false);
      }
    };
    if (videoModalOpen || contactModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoModalOpen, contactModalOpen]);

  return (
    <section className="relative w-full h-[100dvh] min-h-[560px] md:min-h-[720px] max-h-[1100px] flex flex-col justify-center md:justify-between overflow-hidden bg-black text-white select-none">
      {/* 1. Full Bleed Background Image (arham-hero.png) with gentle entrance zoom */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={IMAGES.heroBg}
          alt="Arham Oil Zone 0 Hazardous Space Robotic Tank Cleaning System"
          fill
          priority
          quality={100}
          className="object-cover object-center select-none"
        />

        {/* Ambient Top Vignette for Header Contrast */}
        <div className="absolute top-0 inset-x-0 h-36 sm:h-44 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none" />

        {/* Subtle Radial Vignette around center */}
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-black/10 to-black/50 pointer-events-none" />

        {/* Ambient Bottom Vignette for Headline & Subtext Crispness */}
        <div className="absolute bottom-0 inset-x-0 h-80 sm:h-96 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
      </motion.div>

      {/* Top Spacer to account for fixed header on desktop */}
      <div className="relative z-10 hidden md:block h-24 md:h-28" />

      {/* 2. Center Play Button with entrance animation and hover pulse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center justify-center md:flex-1 md:-mt-10"
      >
        <div className="relative group">
          {/* Subtle Outer Glowing Ripple Rings */}
          <div className="absolute -inset-3 rounded-full border border-white/30 animate-ping opacity-30 pointer-events-none" />
          <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-md group-hover:bg-emerald-400/40 transition-all duration-300 pointer-events-none" />

          {/* Circular Play Button matching the reference image */}
          <button
            type="button"
            onClick={() => setVideoModalOpen(true)}
            aria-label="Watch Robotic Tank Cleaning Operational Video"
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/90 bg-black/40 backdrop-blur-md flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:bg-emerald-600/90 active:scale-95 focus:outline-none"
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white ml-0.5 transition-transform duration-300 group-hover:scale-105" />
          </button>
        </div>

        {/* Subtle hover tooltip hint */}
        <span className="mt-2.5 sm:mt-3 text-[10px] sm:text-xs font-mono tracking-widest text-slate-300/80 uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Watch Field Operation
        </span>
      </motion.div>

      {/* 3. Text Section (Centered on mobile, positioned at bottom on desktop) */}
      <div className="relative z-10 mt-6 md:mt-0 pb-0 md:pb-14 text-center w-[92%] sm:w-[90%] max-w-5xl mx-auto flex flex-col items-center">
        {/* Image Content Tagline Badge */}
    

        {/* Main Headline (Clean, Light/Regular, Crisp White, Increased Size on Mobile) with staggered motion */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl xs:text-4xl sm:text-[44px] md:text-5xl lg:text-[68px] font-normal tracking-tight text-white leading-[1.16] md:leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
        >
          Indigenous Expertise in Robotic Recovery &amp; Management of Oil &amp; Gas Sludge
        </motion.h1>

        {/* Subtext: "Protected by 7 patents" */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 md:mt-4 text-xs xs:text-sm md:text-base font-light tracking-[0.2em] md:tracking-[0.24em] text-slate-300 uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          Protected by 7 patents · ATEX &amp; IECEx Zone 0 Certified
        </motion.p>
      </div>

      {/* 4. Bottom-Right Floating Action Button (Call/Chat Button) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30"
      >
        <button
          type="button"
          onClick={() => setContactModalOpen(true)}
          aria-label="Direct Engineering Call &amp; Consultation"
          className="group relative w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0c1524]/85 hover:bg-emerald-600 text-slate-200 hover:text-white border border-white/20 hover:border-emerald-400/60 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        >
          {/* Subtle pulse badge ring */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black" />
          
          {/* Phone / Speech icon matching screenshot */}
          <PhoneCall className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />

          {/* Floating Tooltip */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900/95 border border-white/10 text-white text-xs font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
            Direct Consultation Call
          </div>
        </button>
      </motion.div>

      {/* 5. Video Demonstration Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="absolute inset-0"
            onClick={() => setVideoModalOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl bg-[#090f1d] border border-cyan-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide">
                  Zone 0 Robotic Tank Cleaning · Live Field Demo
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close video modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Showcase Player */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <Image
                src={IMAGES.heroBg}
                alt="Arham Robotic Tank Cleaning System"
                fill
                className="object-cover opacity-60"
              />

              {/* High-Tech HUD Telemetry Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-transparent to-black/60 pointer-events-none" />

              <div className="relative z-10 text-center max-w-lg px-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ATEX Zone 0 IECEx Certified</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Zero-Man-Entry Sludge Fluidization
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                  Equipped with 360° ATEX cameras, high-pressure 250 bar rotating nozzles, and ultrasonic NDT hull thickness measurement.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="#contact"
                    onClick={() => setVideoModalOpen(false)}
                    className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all"
                  >
                    Schedule Live On-Site Demo
                  </Link>
                  <Link
                    href="#technology"
                    onClick={() => setVideoModalOpen(false)}
                    className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                  >
                    Inspect Jetting Specs
                  </Link>
                </div>
              </div>

              {/* Bottom HUD Stream Bar */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-cyan-300/90 z-20">
                <span>SYSTEM: ARHAM ALPHA 4.0</span>
                <span>STATUS: OPERATIONAL</span>
                <span>RECOVERY RATE: UP TO 95%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Quick Consultation / Contact Dialog */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="absolute inset-0"
            onClick={() => setContactModalOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-md bg-[#0b1322] border border-emerald-500/30 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Technical Line</h3>
                  <p className="text-xs text-slate-400">Arham Oil Engineering Team</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setContactModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect directly with our robotics deployment engineers for technical specifications, ATEX Zone 0 certifications, and turnkey tank cleaning deployment timelines.
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Contact Channels
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Technical Sales:</span>
                  <a
                    href="tel:+919820000000"
                    className="font-semibold text-emerald-400 hover:underline"
                  >
                    +91 98200 00000
                  </a>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Inquiry Email:</span>
                  <a
                    href="mailto:contact@arhamoil.com"
                    className="font-semibold text-emerald-400 hover:underline"
                  >
                    contact@arhamoil.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setContactModalOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all duration-200"
              >
                <span>Open Full RFQ Consultation Form</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
