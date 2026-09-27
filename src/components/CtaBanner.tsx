"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { IMAGES } from "@/data/images";
import {
  ArrowRight,
  ShieldCheck,
  Download,
  PhoneCall,
  CheckCircle2,
  Clock,
  Gauge,
  Layers,
} from "lucide-react";

export default function CtaBanner() {
  const highlights = [
    {
      label: "Zero Confined Space Entry",
      val: "100%",
      sub: "No life loss guarantee",
      icon: ShieldCheck,
    },
    {
      label: "Turnaround Reduction",
      val: "80%",
      sub: "Faster return to service",
      icon: Clock,
    },
    {
      label: "Sludge Oil Reclaimed",
      val: "95%",
      sub: "Closed-loop separation",
      icon: Gauge,
    },
    {
      label: "Certification Standard",
      val: "Zone 0",
      sub: "ATEX & IECEx certified",
      icon: Layers,
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-28 overflow-hidden text-slate-900 bg-white"
    >
      {/* Full-width Background Image: README.jpeg clearly visible */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <Image
          src={IMAGES.ctaBg || "/images/README.jpeg"}
          alt="Arham Robotics Tank Cleaning Background"
          fill
          priority
          className="object-cover object-center w-full h-full opacity-45"
        />
        
        {/* Soft light wash to keep the image clearly visible while maintaining crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/75" />
      </div>

      {/* Foreground Content Container (90% width) */}
      <div className="w-[90%] max-w-5xl mx-auto relative z-10 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-tight">
            Ready to Revolutionize Your Tank Cleaning &amp; Safety Standards?
          </h2>

          {/* Description Paragraph */}
          <p className="mt-3 sm:mt-6 text-xs sm:text-sm md:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
            Eliminate confined space hazards, accelerate turnaround times by up to 80%, and reclaim valuable crude hydrocarbons with Arham&apos;s Zone 0 certified robotic systems.
          </p>
        </motion.div>

        {/* Key Value Metric Badges */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/90 hover:bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-md group"
              >
                <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                  <span className="text-sm sm:text-xl font-bold text-slate-900 tracking-tight">
                    {item.val}
                  </span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                  </div>
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-800 leading-tight">
                  {item.label}
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5">
                  {item.sub}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href="mailto:contact@arhamoil.com"
              className="w-full inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-colors cursor-pointer text-center"
            >
              <span>Request a Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href="#brochure"
              className="w-full inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-colors cursor-pointer text-center"
            >
              <Download className="w-4 h-4 text-emerald-600" />
              <span>Download Product Brochure</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Reassurance Footer Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 sm:mt-12 pt-6 border-t border-slate-300/60 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600 text-center"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Zero Commitment Feasibility Review</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Direct Engineering Team Support</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Compliant with API 653 &amp; EU Directive 2014/34/EU</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
