"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { IMAGES } from "@/data/images";

const FEATURES = [
  {
    title: "Onboard Pump Robot",
    description:
      "World's first ATEX Zone-0 certified Robot with autonomous pumping capability — 10-12 m³/hr.",
    image: IMAGES.techDrive,
    span: "col-span-1 md:col-span-2 row-span-1", // large left card
  },
  {
    title: "Revolutionary Two-Line Hydraulic Architecture",
    description:
      "Eliminates heavy manual handling and hose-entanglement around roof legs — common with competitors' 10–16 hose setups.",
    image: IMAGES.techChassis,
    span: "col-span-1 row-span-1", // right card
  },
  {
    title: "ATEX Zone-0 Vision System",
    description:
      "ATEX Zone-0 low-light cameras with certified LED lighting and PAN-TILT deliver 360° tank visibility, giving operators real-time control for smooth robot operation.",
    image: IMAGES.telemetryCrawler,
    span: "col-span-1 row-span-1", // bottom-left
  },
  {
    title: "Exclusive Fail Safe Mode",
    description:
      "First of its kind Emergency Evacuation system ensures robot retrieval even during complete power or communication failure.",
    image: IMAGES.techTrack,
    span: "col-span-1 row-span-1", // bottom-center
  },
  {
    title: "Advanced Automated Handling",
    description:
      "Effortless hydraulic and vacuum hose winder eliminates manual labor in managing the heavy hoses.",
    image: IMAGES.techNozzle,
    span: "col-span-1 row-span-1", // bottom-right
  },
];

export default function ModularTechGrid() {
  return (
    <section className="bg-[#060a14] text-white border-b border-slate-800 relative overflow-hidden py-12 sm:py-20">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[400px] bg-cyan-600/5 blur-[160px] pointer-events-none" />

      <div className="w-[90%] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Precision Engineering
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Every subsystem is precision crafted to withstand the harshest volatile chemical and mechanical environments inside active oil storage vessels.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-2xl overflow-hidden border border-slate-800/80 hover:border-slate-600/60 transition-all duration-500 min-h-[260px] sm:min-h-[300px] ${feature.span}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes={idx === 0 ? "900px" : "500px"}
                />
                {/* Dark overlay gradient — text at top, image at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#060a14]/90 via-[#060a14]/50 to-[#060a14]/30" />
                {/* Bottom subtle fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a14]/60 to-transparent" />
              </div>

              {/* Text Content — positioned top-left */}
              <div className="relative z-10 p-5 sm:p-8 flex flex-col justify-start h-full">
                <h3 className="text-base sm:text-xl font-semibold text-white leading-snug max-w-xs">
                  {feature.title}
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
