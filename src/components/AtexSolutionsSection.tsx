"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "@/data/images";
import { ChevronLeft, ChevronRight, Maximize2, X, Plus } from "lucide-react";

export default function AtexSolutionsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showExploreInfo, setShowExploreInfo] = useState(false);

  // 5 distinct certificate and technical inspection cards
  const certPages = [
    {
      id: 1,
      code: "NMER-TI23ATEX-1679-X",
      title: "Certified Robotic System for",
      subtitle: "Hazardous Tank Environments",
      src: IMAGES.atexCertDoc || "/images/WhatsApp Image 2026-09-26 at 15.16.29.jpeg",
      tag: "Zone 0 Certified",
      standard: "EU Directive 2014/34/EU — Intrinsic Zone 0",
    },
    {
      id: 2,
      code: "IECEx-TI23.0041X",
      title: "Intrinsic Safety Electrical Apparatus",
      subtitle: "Explosive Dust & Vapor Compliance",
      src: IMAGES.techDrive || "/images/WhatsApp Image 2026-09-26 at 15.16.31.jpeg",
      tag: "IECEx Global",
      standard: "EN IEC 60079-0:2018 General Requirements",
    },
    {
      id: 3,
      code: "EN IEC 60079-0:2018",
      title: "Spark-Free Fluidization Jet Cannon",
      subtitle: "Non-Sparking Fluidization Cannon",
      src: IMAGES.jettingNozzle || "/images/WhatsApp Image 2026-09-26 at 15.16.35.jpeg",
      tag: "Fluidization System",
      standard: "Beryllium Copper Spark-Proof Tooling",
    },
    {
      id: 4,
      code: "EN IEC 60079-11:2012",
      title: "Submersible Traction Powertrain",
      subtitle: "Zero Thermal & Electrical Arc Risk",
      src: IMAGES.techTrack || "/images/WhatsApp Image 2026-09-26 at 15.16.33 (1).jpeg",
      tag: "Submersible Track",
      standard: "Ex 'i' Intrinsic Protection Circuitry",
    },
    {
      id: 5,
      code: "ISO 9001 / ATEX QAN",
      title: "Live Optical Inspection Module",
      subtitle: "Continuous Hazardous Tank Auditing",
      src: IMAGES.telemetryCrawler || "/images/WhatsApp Image 2026-09-26 at 15.16.28.jpeg",
      tag: "Telemetry Audit",
      standard: "ATEX Quality Assurance Notification",
    },
  ];

  const currentCert = certPages[currentPage - 1];

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 via-[#d6e2eb] to-white overflow-hidden py-12 sm:py-20 lg:py-24">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none bg-radial-[circle_at_20%_20%] from-white/40 via-transparent to-transparent" />

      {/* Main 90% Section Container */}
      <div className="w-[90%] mx-auto relative z-10">
        
        {/* Top Header Section — Matches 'Our Services' Heading Style Exactly */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-tight">
            No-Man Entry Robotic Solutions - ATEX Zone-0 Certified
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl font-normal">
            Engineered for Zero Life Loss, Unibose&apos;s intrinsically safe systems are
            designed to replace human presence in confined spaces where explosive
            atmospheres, toxic gases, and oxygen instability make manual entry a
            life-threatening risk. By removing personnel from the hazard zone
            entirely, the system ensures safe, controlled operations
          </p>
        </motion.div>

        {/* Explore Pill Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-8 relative inline-block"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-2.5 sm:p-3 px-3.5 sm:px-4 shadow-sm border border-white/60 flex flex-col items-center gap-2 sm:gap-2.5 transition-transform hover:scale-105">
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
              EXPLORE
            </span>
            <button
              type="button"
              onClick={() => setShowExploreInfo(!showExploreInfo)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
              aria-label="Explore more specifications"
            >
              <Plus
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  showExploreInfo ? "rotate-45" : ""
                }`}
              />
            </button>
          </div>

          {/* Interactive Explore Popover */}
          <AnimatePresence>
            {showExploreInfo && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full mt-3 w-64 sm:w-72 p-3.5 sm:p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 z-30"
              >
                <h4 className="text-xs font-bold text-slate-900 mb-1">
                  ATEX Zone 0 Robotic Arm Specs
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                  Equipped with multi-axis electro-hydraulic servos, pan-tilt HD inspection optics, and continuous spark-neutralized fluidization jets.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="bg-slate-100 p-2 rounded-lg font-medium text-slate-700">
                    <span className="block text-slate-400 text-[9px]">Gas Group</span>
                    IIA / IIB / IIC
                  </div>
                  <div className="bg-slate-100 p-2 rounded-lg font-medium text-slate-700">
                    <span className="block text-slate-400 text-[9px]">Temp Class</span>
                    T4 (135°C Max)
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content Layout Area: Height container for spacing on desktop */}
        <div className="relative mt-8 sm:mt-12 min-h-[420px] xs:min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-end justify-end">
          
          {/* Right Side: ATEX Certificate Card with Pagination (Enlarged) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full sm:w-auto max-w-[340px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[490px] lg:max-w-[530px] flex flex-col items-center sm:items-end relative z-20 pb-4"
          >
            
            {/* Certificate White Card Container */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 p-4 sm:p-5 lg:p-6 w-full group">
              
              {/* Technical Drawing Corner Brackets */}
              <span className="absolute -top-3 -left-3 text-slate-400 font-mono text-base sm:text-lg leading-none select-none">
                ┌
              </span>
              <span className="absolute -bottom-3 -right-3 text-slate-400 font-mono text-base sm:text-lg leading-none select-none">
                ┘
              </span>

              {/* Fullscreen Expand Action Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-900/90 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 cursor-pointer"
                title="Expand Certificate"
                aria-label="View Full Certificate"
              >
                <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Certificate Document Preview with AnimatePresence */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative w-full aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 cursor-pointer shadow-inner"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCert.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentCert.src}
                      alt={currentCert.title}
                      fill
                      className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Info & Pagination Controls Bar */}
            <div className="mt-4 sm:mt-5 flex flex-col xs:flex-row items-start xs:items-center justify-between w-full gap-3 px-1 sm:px-2">
              {/* Certificate Identifier Text */}
              <div className="text-left leading-snug">
                <p className="font-bold text-slate-900 text-sm sm:text-base tracking-tight">
                  {currentCert.code}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 font-medium mt-0.5">
                  {currentCert.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-500">
                  {currentCert.subtitle}
                </p>
              </div>

              {/* Pager: < 1/5 > */}
              <div className="flex items-center gap-2 shrink-0 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-300/70 shadow-sm">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.88 }}
                  type="button"
                  onClick={handlePrev}
                  className="text-slate-600 hover:text-slate-950 p-1 transition-colors cursor-pointer"
                  aria-label="Previous Certificate Page"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
                <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wider px-1.5 select-none">
                  {currentPage}/{totalPages}
                </span>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.88 }}
                  type="button"
                  onClick={handleNext}
                  className="text-slate-600 hover:text-slate-950 p-1 transition-colors cursor-pointer"
                  aria-label="Next Certificate Page"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Main Robotic Arm Image (Crm-3.avif) — Starting Flush from the Left End with Subtle Floating Motion */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-0 bottom-0 pointer-events-none select-none z-10 w-[240px] xs:w-[320px] sm:w-[520px] md:w-[640px] lg:w-[760px] xl:w-[860px] h-[220px] xs:h-[280px] sm:h-[460px] md:h-[560px] lg:h-[660px] xl:h-[740px] opacity-40 sm:opacity-100"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={IMAGES.crmRobot}
            alt="ATEX Zone 0 Robotic System - No-Man Entry Arm"
            fill
            priority
            className="object-contain object-left-bottom drop-shadow-[0_25px_40px_rgba(15,23,42,0.22)]"
          />
        </motion.div>
      </motion.div>

      {/* Fullscreen Certificate Inspection Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                  Official Verification Document
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {currentCert.code}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Document Full View */}
            <div className="relative w-full h-[65vh] max-h-[600px] mt-4 rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
              <Image
                src={currentCert.src}
                alt="Full ATEX Certificate"
                fill
                className="object-contain p-2"
              />
            </div>

            {/* Modal Pager Footer */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>{currentCert.standard}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-semibold text-slate-800">
                  {currentPage} of {totalPages}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
