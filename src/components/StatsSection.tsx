import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/data/images";
import { ShieldCheck, Award, ArrowRight } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "10+",
      unit: "Years",
      label: "Robotic Engineering Excellence",
      desc: "Dedicated to hazardous confined space robotic R&D and field deployments.",
    },
    {
      value: "500+",
      unit: "Tanks",
      label: "Successfully Cleaned & Inspected",
      desc: "Covering external floating roofs, internal floating roofs, and spheres.",
    },
    {
      value: "0",
      unit: "LTI",
      label: "Lost Time Injury Safety Record",
      desc: "100% human safety track record with zero incidents in hazardous zones.",
    },
    {
      value: "95%",
      unit: "Recovery",
      label: "Valuable Hydrocarbon Sludge Reclaimed",
      desc: "Turning hazardous tank bottom waste into refined commercial crude.",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="w-[90%] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Robot Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-slate-100 to-slate-200/90 border border-slate-200 p-6 shadow-xl flex flex-col justify-between h-[420px]">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  Proven Field Track Record
                </span>
                <h3 className="mt-3 text-2xl font-black text-slate-900">
                  Global Industrial Deployments
                </h3>
              </div>

              <div className="relative w-full h-[240px] my-auto flex items-center justify-center">
                <Image
                  src={IMAGES.statsRobot}
                  alt="Proven Track Record Robot"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 font-semibold pt-3 border-t border-slate-200">
                <span>ISO 9001:2015 Quality</span>
                <span className="text-emerald-600">ATEX Zone 0 Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Stats Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                        {s.value}
                      </span>
                      <span className="text-base font-bold text-emerald-600 uppercase">
                        {s.unit}
                      </span>
                    </div>

                    <h4 className="mt-2 text-base font-bold text-slate-800">
                      {s.label}
                    </h4>

                    <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center text-xs text-emerald-600 font-semibold gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Industrial Metric</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout banner */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white">Need an urgent tank turnaround?</strong> Mobilization available within 48 hours worldwide.
                </div>
              </div>

              <Link
                href="#contact"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors flex-shrink-0 flex items-center gap-1.5"
              >
                <span>Request Deployment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
