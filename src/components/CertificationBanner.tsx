import React from "react";
import { ShieldCheck, Award, Zap } from "lucide-react";

export default function CertificationBanner() {
  return (
    <section id="certifications" className="relative py-6 sm:py-7 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-lg overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* Main Badge & Title */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-inner flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                <h3 className="text-lg sm:text-2xl font-black tracking-wider uppercase drop-shadow-xs">
                  ATEX &amp; IECEx ZONE 0 CERTIFIED ROBOT
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 font-medium">
                Certified for continuous, safe operation inside active explosive atmospheres and volatile hydrocarbon environments.
              </p>
            </div>
          </div>

          {/* Quick Certification Seals */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="px-3.5 py-1.5 rounded-xl bg-white/15 border border-white/25 backdrop-blur-md text-xs font-bold tracking-wider uppercase">
              Ex d IIB T4 Ga
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-white/15 border border-white/25 backdrop-blur-md text-xs font-bold tracking-wider uppercase">
              Zone 0 / Class 1 Div 1
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
