"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ShieldAlert,
  Clock,
  Recycle,
  Sparkles,
  Radio,
  FileCheck2,
  Leaf,
  Flame,
  SearchCheck,
} from "lucide-react";

export default function AdvantagesGrid() {
  const advantages = [
    {
      title: "100% Zero Man Entry",
      desc: "Completely eliminates toxic confined-space human entry, preventing life-threatening asphyxiation and vapor exposure.",
      icon: ShieldAlert,
    },
    {
      title: "70-80% Reduced Downtime",
      desc: "Cleans massive 80-meter diameter crude storage tanks in days rather than months, slashing lost refinery storage revenue.",
      icon: Clock,
    },
    {
      title: "Up to 95% Oil Recovery",
      desc: "High-efficiency fluidization breaks down heavy asphaltic waxy bottom sludge and recovers valuable crude into refinery slop.",
      icon: Recycle,
    },
    {
      title: "High-Pressure Jetting Cannon",
      desc: "Up to 300 bar dual nozzles break up the densest sediments without scouring or damaging underlying tank bottom coatings.",
      icon: Sparkles,
    },
    {
      title: "Safe Remote Tele-Operation",
      desc: "Fully controlled from an explosion-proof mobile command center up to 300 meters away outside the secondary bund wall.",
      icon: Radio,
    },
    {
      title: "ATEX & IECEx Zone 0 Certified",
      desc: "Fully certified for continuous submerged and explosive atmosphere operation in active volatile hydrocarbon zones.",
      icon: Flame,
    },
    {
      title: "Eco-Friendly Closed Loop",
      desc: "Drastically minimizes vapor emission release into the atmosphere and reduces water consumption via closed-loop slurry recovery.",
      icon: Leaf,
    },
    {
      title: "Passes 24\" Standard Manways",
      desc: "Engineered with a compact modular profile to seamlessly enter standard 600mm side shell manholes without tank cutting.",
      icon: FileCheck2,
    },
    {
      title: "Real-Time NDT & HD Inspection",
      desc: "High-definition ATEX inspection cameras combined with ultrasonic plate thickness measurement provide instant condition reports.",
      icon: SearchCheck,
    },
  ];

  return (
    <section className="py-12 sm:py-24 bg-slate-50">
      <div className="w-[90%] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <h2 className="mt-2 text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900">
            Key Advantages of Robotic Tank Cleaning
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-500 leading-relaxed">
            Engineered to replace slow, hazardous manual cleaning methods with certified robotic efficiency, superior safety, and maximum crude recovery.
          </p>
        </motion.div>

        {/* 3x3 Grid (9 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="group p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex items-start gap-3.5 sm:gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-50 group-hover:bg-emerald-50 border border-slate-200 group-hover:border-emerald-200 text-slate-700 group-hover:text-emerald-600 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
