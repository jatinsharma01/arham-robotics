"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the robot enter the tank without cutting openings?",
      a: "Our robotic crawlers feature a compact, modular profile specifically engineered to enter through standard 24-inch (600mm) shell manways. The system disassembles into lightweight sub-modules if necessary and is reassembled inside or drives directly through standard side manholes without requiring any hot work or structural cutting.",
    },
    {
      q: "Is the robot certified for Zone 0 explosive atmospheres?",
      a: "Yes. The entire crawler assembly holds full ATEX and IECEx Zone 0 (Ex d IIB T4 Ga / Ex ia) certification. It is certified for continuous, safe operation in atmospheres where explosive gases, vapors, or mists are continuously present or present for long periods.",
    },
    {
      q: "Can the robot operate while the tank is under nitrogen inerting?",
      a: "Absolutely. Operating under a positive nitrogen blanket (O2 < 5%) is our standard procedure. This allows cleaning and sludge extraction to proceed without extensive tank de-gassing, drastically reducing turnaround schedules and preventing VOC emissions from escaping into the environment.",
    },
    {
      q: "What types of sludges can the fluidization head handle?",
      a: "The crawler is equipped with a high-torque rotating fluidization drum and 300-bar hydraulic jetting nozzles capable of breaking down compacted asphaltic sludge, heavy paraffin wax cakes, tank bottom sediments, and viscous crude oil residues.",
    },
    {
      q: "How much turnaround time is saved compared to manual cleaning?",
      a: "Robotic cleaning typically achieves a 70% to 80% reduction in total out-of-service time. A large 80-meter crude oil storage tank that would normally take 4 to 6 months of dangerous manual shoveling can be cleaned and inspected in just 10 to 18 days.",
    },
    {
      q: "What inspection data and reports are provided post-cleaning?",
      a: "We deliver full high-definition video inspection footage, 360-degree pan-tilt-zoom optical records, and ultrasonic non-destructive testing (NDT) plate thickness measurements across the tank floor, sketch plates, and annular rings in an API 653 compliant digital inspection report.",
    },
    {
      q: "What utility and power requirements are needed on site?",
      a: "Arham Robotics provides fully containerized mobile units with self-contained diesel hydraulic power units (DHPU) and generators positioned in safe, non-hazardous zones outside the bund wall. We only require a local water source or diluent oil connection for jetting.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-24 bg-slate-50">
      <div className="w-[90%] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-3 sm:space-y-4"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>

            <p className="text-xs sm:text-base text-slate-500 leading-relaxed">
              Everything you need to know about our ATEX Zone 0 robotic fleet, zero-man-entry safety standards, mobilization process, and hydrocarbon recovery.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs mt-4 sm:mt-6">
              <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                Have a customized tank inquiry?
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                Our petroleum engineering and robotics specialists provide free site feasibility assessments.
              </p>
              <a
                href="#contact"
                className="mt-2.5 sm:mt-3 inline-block text-xs font-bold text-emerald-600 hover:text-emerald-700"
              >
                Contact Technical Support &rarr;
              </a>
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-xs hover:border-slate-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-4 sm:px-6 py-3.5 sm:py-4 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-base leading-snug">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden border-t border-slate-100"
                      >
                        <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2.5 sm:pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
