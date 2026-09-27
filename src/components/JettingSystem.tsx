"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "@/data/images";
import {
  Gauge,
  Droplet,
  Compass,
  CheckCircle2,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  Eye,
  Layers,
} from "lucide-react";

export default function JettingSystem() {
  const [activeView, setActiveView] = useState<"field" | "cad">("field");

  const specs = [
    {
      label: "Operating Pressure",
      val: "Up to 300 Bar",
      sub: "Pulverizes dense asphaltic sludge",
      icon: Gauge,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      label: "Volumetric Flow Rate",
      val: "180 Liters / min",
      sub: "Rapid closed-loop fluidization",
      icon: Droplet,
      color: "text-blue-600 bg-blue-50",
    },
    {
      label: "Nozzle Articulation",
      val: "360° Pan / 120° Tilt",
      sub: "Reaches beneath roof legs & sumps",
      icon: Compass,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      label: "Intrinsically Safe Drive",
      val: "Electro-Hydraulic",
      sub: "100% spark-free Zone 0 powertrain",
      icon: CheckCircle2,
      color: "text-amber-600 bg-amber-50",
    },
  ];

  return (
    <section
      id="technology"
      className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f6f5]/50 to-white border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="w-[90%] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-tight">
            High-Pressure Sludge Fluidization &amp; Jetting Cannon
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Equipped with heavy-duty multi-axis hydraulic jetting nozzles delivering targeted high-pressure water or diluent oil to pulverize compacted paraffin, hardened asphaltic deposits, and heavy sediments without damaging internal tank epoxy liners or tank floor plates.
          </p>
        </motion.div>

        {/* Main Content Grid: Visual Showcase & Specs/Certification */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Visual Showcase (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            {/* View Mode Switcher Tabs */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between bg-white p-1.5 rounded-2xl border border-slate-200/80 shadow-xs gap-1.5 xs:gap-0">
              <div className="flex items-center gap-1.5 w-full xs:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveView("field")}
                  className={`flex-1 xs:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeView === "field"
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Field Operation</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView("cad")}
                  className={`flex-1 xs:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeView === "cad"
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>CAD Schematic</span>
                </button>
              </div>

              <span className="hidden sm:inline-block text-[11px] text-slate-400 font-medium pr-3">
                {activeView === "field" ? "Tracked Field Unit" : "3D CAD Blueprint"}
              </span>
            </div>

            {/* Display Window */}
            <div className="relative w-full h-[320px] xs:h-[380px] sm:h-[480px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg bg-slate-900 group">
              <AnimatePresence mode="wait">
                {activeView === "field" ? (
                  <motion.div
                    key="field-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={IMAGES.atexCertificate}
                      alt="Tracked Crawler High Pressure Jetting Cannon in Active Operation"
                      fill
                      priority
                      className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle dark gradient overlay on bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Top Live Pill */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-semibold shadow-md flex items-center gap-1.5 sm:gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Active Fluidization</span>
                    </div>

                    {/* Top Right Spec Tag */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold shadow-md">
                      ATEX Zone 0
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 py-2.5 px-3 sm:py-3 sm:px-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-xs text-slate-800">
                      <div>
                        <div className="font-bold text-slate-900 text-xs sm:text-sm">
                          Continuous Hydraulic Jetting Cannon
                        </div>
                        <div className="text-slate-500 text-[10px] sm:text-[11px] mt-0.5">
                          High-volume fluidizing nozzles clearing heavy tank deposits
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-emerald-50 text-emerald-700 font-bold text-[10px] sm:text-[11px] border border-emerald-200">
                          300 BAR MAX
                        </span>
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-100 text-slate-700 font-semibold text-[10px] sm:text-[11px]">
                          180 L/MIN
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="cad-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full bg-white flex flex-col items-center justify-center p-4 sm:p-6 relative"
                  >
                    <div className="relative w-full h-[240px] xs:h-[280px] sm:h-[400px]">
                      <Image
                        src={IMAGES.jettingNozzle}
                        alt="Multi-Axis Jetting Nozzle & Hydraulic Assembly CAD Schematic"
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Top CAD Pill */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-[10px] sm:text-xs font-semibold shadow-xs flex items-center gap-1.5 sm:gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      <span>Assembly Model</span>
                    </div>

                    {/* Bottom Description Pill */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl sm:rounded-2xl bg-slate-900/90 backdrop-blur-md text-white shadow-lg flex items-center justify-between text-[11px] sm:text-xs">
                      <span className="font-medium">Hydraulic Nozzle Head</span>
                      <span className="text-emerald-400 font-semibold">360° Pan / 120° Tilt</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: Key Specifications & Certification Seal (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* 4 Performance Metric Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {specs.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${s.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        {s.label}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 tracking-tight">
                        {s.val}
                      </div>
                    </div>
                    <p className="mt-2 text-[11px] text-slate-500 leading-snug">
                      {s.sub}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* ATEX Zone 0 Compliance & Safety Card */}
            <motion.div
              id="certifications"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="scroll-mt-24 p-5 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 border border-emerald-200/80 shadow-xs hover:border-emerald-300 transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">
                      ATEX &amp; IECEx Zone 0 Certified
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Compliant with EU Directive 2014/34/EU and EN IEC 60079 series for explosive atmospheres. Engineered with non-sparking beryllium copper nozzles and antistatic hydraulic lines.
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-emerald-100/80 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-white/90 border border-emerald-200/60 px-2.5 py-1 rounded-lg">
                      <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                      Directive 2014/34/EU
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-white/90 border border-emerald-200/60 px-2.5 py-1 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Beryllium Copper Nozzles
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Action */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-col sm:flex-row items-center gap-3"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-colors"
                >
                  <span>Request Tooling Technical Sheet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-colors"
                >
                  <span>Book Feasibility Consultation</span>
                </Link>
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

