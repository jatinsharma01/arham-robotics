"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { IMAGES } from "@/data/images";
import { ShieldCheck, Clock, Recycle, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutSystem() {
  const highlights = [
    {
      title: "Fully Automated Robotic Solutions",
      desc: "Complete non-man entry robotic crawlers engineered for hazardous confined spaces.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Zero Human Entry Into Hazardous Tanks",
      desc: "ATEX & IECEx Zone 0 spark-proof operation eliminating toxic atmosphere risks.",
      icon: Zap,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "High Recovery of Usable Hydrocarbons",
      desc: "Closed-loop fluidization & separation reclaiming up to 95% commercial crude.",
      icon: Recycle,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Reduced Turnaround Time & Downtime",
      desc: "80% faster turnaround cycles, returning storage assets to production in days.",
      icon: Clock,
      color: "text-indigo-600 bg-indigo-50",
    },
  ];

  return (
    <section id="about" className="w-full py-12 sm:py-20 bg-[#f5f6f9] border-b border-slate-200">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          
          {/* Left Column: Robot Showcase Card (60% Width - Full Cover Image) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[60%] shrink-0 relative"
          >
            <div className="relative w-full h-[280px] xs:h-[360px] sm:h-[500px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-900">
              
              {/* Full Bleed Cover Image */}
              <Image
                src={IMAGES.aboutRobot}
                alt="Arham Robotic Tank Cleaning System"
                fill
                priority
                className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Certification Badge */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-600 text-white text-[10px] sm:text-xs font-semibold shadow-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zone 0 Certified Platform</span>
              </div>

              {/* Floating Bottom Quick Spec Pill */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex flex-wrap sm:flex-nowrap items-center justify-between gap-1 text-[10px] xs:text-xs sm:text-sm text-slate-800 font-medium">
                <span>Passes 24&quot; (600mm) Manways</span>
                <span className="text-emerald-600 font-bold">180 L/min Jetting</span>
                <span>Submersible Crawler</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Copy & Highlights (40% Width) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full lg:w-[40%] flex-1 space-y-4 sm:space-y-5"
          >
          

            <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-tight">
              Advanced Robotic Sludge Recovery
            </h2>

            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              We are advancing precision robotic solutions for confined hazardous environments, creating safer and more sustainable operations by completely eliminating human presence from explosive tank atmospheres.
            </p>

            {/* Feature Highlights Grid (2x2 Compact) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-200"
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2.5 ${item.color}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-normal">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="#technology"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Technology</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
