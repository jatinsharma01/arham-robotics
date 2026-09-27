"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function RobotShowcase() {
  return (
    <section
      id="products"
      className="w-full bg-white overflow-hidden min-h-screen lg:min-h-[100dvh]"
    >
      {/* 2-Column Full Bleed Grid covering one full screen height */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen lg:min-h-[100dvh]">
        
        {/* Left Half: N-MER (Light Blue Gradient, Full Bleed to Left Edge) */}
        <div className="relative w-full min-h-[520px] xs:min-h-[580px] sm:min-h-[700px] lg:min-h-[100dvh] bg-gradient-to-b from-[#dff1fa] via-[#eaf5fc] to-[#d6ebf7] flex flex-col justify-between pt-12 sm:pt-20 lg:pt-24 px-5 sm:px-12 pb-0 overflow-hidden">
          
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-lg mx-auto z-10"
          >
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900">
              N-MER
            </h3>
            
            <p className="text-[11px] sm:text-sm font-semibold tracking-widest text-slate-600 uppercase mt-1.5 sm:mt-2">
              (NO MAN ENTRY ROBOT)
            </p>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Asia&apos;s 1st Robot to achieve EU ATEX Zone-0 (IIC) Certification – the Global Benchmark for Safe Industrial Tank Cleaning in Confined, Hazardous Spaces
            </p>

            {/* Discover Pill Button */}
            <div className="mt-5 sm:mt-6 flex justify-center">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-2 sm:py-2.5 rounded-full bg-white text-slate-900 font-medium text-xs sm:text-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200/60"
              >
                <span>Discover</span>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Left End Image: Enlarged size starting from the bottom-left corner with motion reveal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex-1 min-h-[240px] xs:min-h-[280px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px] flex items-end justify-start pointer-events-none mt-4 sm:mt-6"
          >
            <div className="relative w-[300px] xs:w-[360px] sm:w-[580px] md:w-[680px] lg:w-[780px] xl:w-[880px] h-[240px] xs:h-[280px] sm:h-[460px] md:h-[540px] lg:h-[600px] xl:h-[660px] -ml-4 sm:-ml-10 lg:-ml-14">
              <Image
                src="/images/robot-nmer-transparent.png"
                alt="N-MER No Man Entry Robot"
                fill
                className="object-contain object-left-bottom mix-blend-multiply transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Right Half: RaaS (Light Green Gradient, Full Bleed to Right Edge) */}
        <div className="relative w-full min-h-[520px] xs:min-h-[580px] sm:min-h-[700px] lg:min-h-[100dvh] bg-gradient-to-b from-[#e2f5ea] via-[#ebf7f0] to-[#daf1e4] flex flex-col justify-between pt-12 sm:pt-20 lg:pt-24 px-5 sm:px-12 pb-0 overflow-hidden border-t lg:border-t-0 lg:border-l border-emerald-100/40">
          
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-lg mx-auto z-10"
          >
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900">
              RaaS
            </h3>
            
            <p className="text-[11px] sm:text-sm font-semibold tracking-widest text-slate-600 uppercase mt-1.5 sm:mt-2">
              (ROBOTICS-AS-A-SERVICE)
            </p>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              An integrated OEM (Original Equipment Manufacturer) + RaaS model that gives industries ATEX Zone-0 robotics without capital barriers.
            </p>

            {/* Discover Pill Button */}
            <div className="mt-5 sm:mt-6 flex justify-center">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-2 sm:py-2.5 rounded-full bg-white text-slate-900 font-medium text-xs sm:text-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200/60"
              >
                <span>Discover</span>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right End Image: Enlarged size starting from the bottom-right corner with motion reveal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex-1 min-h-[240px] xs:min-h-[280px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px] flex items-end justify-end pointer-events-none mt-4 sm:mt-6"
          >
            <div className="relative w-[300px] xs:w-[360px] sm:w-[580px] md:w-[680px] lg:w-[780px] xl:w-[880px] h-[240px] xs:h-[280px] sm:h-[460px] md:h-[540px] lg:h-[600px] xl:h-[660px] -mr-4 sm:-mr-10 lg:-mr-14 translate-y-4 sm:translate-y-12 lg:translate-y-16">
              <Image
                src="/images/robot-raas-transparent.png"
                alt="RaaS Robotics As A Service Crawler"
                fill
                className="object-contain object-right-bottom mix-blend-multiply transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
