"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

/* ── Hotspot data: each dot on the robot image ─────────────────── */
const HOTSPOTS = [
  {
    id: "camera",
    label: "HD Inspection Camera",
    description:
      "Ultra-low-light explosion-proof camera system providing real-time visual feedback in zero-visibility sludge environments.",
    specs: ["4K Resolution", "ATEX Zone 0", "Night Vision"],
    image: "/images/WhatsApp Image 2026-09-26 at 15.16.28.jpeg",
    top: "22%",
    left: "42%",
  },
  {
    id: "arm",
    label: "Articulated Jetting Arm",
    description:
      "Multi-axis robotic arm delivering 180 L/min high-pressure jetting at up to 500 bar for precision sludge removal.",
    specs: ["500 Bar Pressure", "180 L/min", "360° Rotation"],
    image: "/images/WhatsApp Image 2026-09-26 at 15.16.36 (1).jpeg",
    top: "30%",
    left: "58%",
  },
  {
    id: "tracks",
    label: "Heavy-Duty Track System",
    description:
      "Submersible track drive providing stable robotic mobility with high traction on slippery tank floors and through dense sludge.",
    specs: ["Submersible", "High Traction", "Sludge-Proof"],
    image: "/images/WhatsApp Image 2026-09-26 at 15.16.33 (1).jpeg",
    top: "68%",
    left: "35%",
  },
  {
    id: "body",
    label: "ATEX Certified Chassis",
    description:
      "Full stainless-steel explosion-proof enclosure rated Ex d IIB+H2 T4 Ga for safe continuous operation inside active hydrocarbon atmospheres.",
    specs: ["Zone 0 Rated", "Stainless Steel", "IP68"],
    image: "/images/WhatsApp Image 2026-09-26 at 15.16.30.jpeg",
    top: "52%",
    left: "52%",
  },
  {
    id: "nozzle",
    label: "Sludge Extraction Pump",
    description:
      "Integrated pneumatic diaphragm pump system for simultaneous sludge extraction during cleaning — recovering up to 95% of hydrocarbons.",
    specs: ["95% Recovery", "Pneumatic", "Self-Priming"],
    image: "/images/WhatsApp Image 2026-09-26 at 15.16.35.jpeg",
    top: "60%",
    left: "22%",
  },
];

export default function TelemetryDarkSection() {
  const [activeSpot, setActiveSpot] = useState<string | null>(null);

  const activeData = HOTSPOTS.find((h) => h.id === activeSpot);

  return (
    <section
      id="telemetry"
      className="relative overflow-hidden border-t border-slate-800 py-12 sm:py-20"
      style={{
        background:
          "linear-gradient(180deg, #0a0f1c 0%, #0d1526 30%, #1a2540 55%, #3a4a60 75%, #7a6b58 90%, #c49060 100%)",
      }}
    >
      {/* Ambient glow spots */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-cyan-600/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/3 w-[400px] h-[300px] bg-amber-500/6 blur-[140px] pointer-events-none" />

      <div className="w-[90%] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            N-MER Technology
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Explore each component of the N-MER robotic crawler. Click on the interactive hotspots to discover the engineering behind every system.
          </p>
        </div>

        {/* Interactive Robot Image Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Robot Image */}
          <div className="relative w-full aspect-[4/3] xs:aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/images/Nmer-product-4.avif"
              alt="N-MER Robotic Crawler — Interactive Component Explorer"
              fill
              className="object-contain"
              priority
            />

            {/* Pulsing Hotspot Dots */}
            {HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() =>
                  setActiveSpot(activeSpot === spot.id ? null : spot.id)
                }
                className="absolute z-20 group"
                style={{ top: spot.top, left: spot.left }}
                aria-label={`View details about ${spot.label}`}
              >
                {/* Outer pulse ring */}
                <span className="absolute inset-0 w-7 h-7 sm:w-8 sm:h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9ec63b]/30 animate-ping" />
                {/* Middle glow ring */}
                <span className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9ec63b]/40 animate-pulse" />
                {/* Core dot */}
                <span
                  className={`relative block w-3.5 h-3.5 sm:w-4 sm:h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-lg shadow-[#9ec63b]/50 transition-all duration-300 cursor-pointer ${
                    activeSpot === spot.id
                      ? "bg-white scale-125"
                      : "bg-[#9ec63b] group-hover:scale-125"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Info Card Overlay — appears on dot click */}
          <AnimatePresence mode="wait">
            {activeData && (
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-x-2 bottom-2 sm:inset-x-auto sm:bottom-10 sm:right-10 w-auto sm:w-[400px] max-w-full z-30 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between p-4 sm:p-5 pb-0">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#9ec63b] shadow-sm shadow-[#9ec63b]/50" />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                      Component Detail
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveSpot(null)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Image */}
                <div className="relative w-full h-[130px] sm:h-[180px] overflow-hidden">
                  <Image
                    src={activeData.image}
                    alt={activeData.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 pt-2 sm:pt-3">
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {activeData.label}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeData.description}
                  </p>

                  {/* Spec pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    {activeData.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] sm:text-[11px] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Hint */}
        <p className="text-center text-xs text-slate-500 mt-8 tracking-wide">
          Click on the{" "}
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#9ec63b] align-middle mx-1 shadow-sm shadow-[#9ec63b]/50" />{" "}
          hotspots to explore each component
        </p>
      </div>
    </section>
  );
}
