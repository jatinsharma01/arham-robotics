"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { clsx } from "clsx";
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight } from "lucide-react";
import { IMAGES } from "@/data/images";

const SERVICES = [
  {
    id: 1,
    number: "01",
    title: "Robotic Tank Cleaning",
    shortTitle: "Tank Cleaning",
    description:
      "Robotic Storage tank/drain cleaning — a complete non-man entry cleaning solution eliminating human exposure in confined spaces.",
    image: IMAGES.serviceTankCleaning,
    cardGradient: "from-[#1e3a6e] to-[#2a5298]", // deep blue
    tags: ["Non-Man Entry", "Zero Confined Space Risk", "ATEX Certified"],
  },
  {
    id: 2,
    number: "02",
    title: "Hazardous Pit Cleaning",
    shortTitle: "Pit & Lagoon",
    description:
      "Hazardous pit/lagoon/sump (OWS/CRWS) cleaning with online robots — no human exposure required at any stage of operations.",
    image: IMAGES.serviceHazardous,
    cardGradient: "from-[#5a8f3c] to-[#7ab854]", // light green
    tags: ["OWS/CRWS", "Online Robots", "Zero Exposure"],
  },
  {
    id: 3,
    number: "03",
    title: "Industrial Separation",
    shortTitle: "Separation",
    description:
      "Processing of any industrial feed for solid-liquid and liquid-liquid separation with advanced robotic systems.",
    image: IMAGES.serviceSeparation,
    cardGradient: "from-[#1e3a6e] to-[#2a5298]", // deep blue
    tags: ["Solid-Liquid", "Liquid-Liquid", "Industrial Feed"],
  },
  {
    id: 4,
    number: "04",
    title: "Oil Recovery",
    shortTitle: "Oil Recovery",
    description:
      "Recovering oil by re-processing of oily sludge/slop/tar — maximizing resource recovery while minimizing waste.",
    image: IMAGES.serviceOilRecovery,
    cardGradient: "from-[#5a8f3c] to-[#7ab854]", // light green
    tags: ["Sludge Processing", "Slop & Tar", "Resource Recovery"],
  },
  {
    id: 5,
    number: "05",
    title: "Oil Skimming Services",
    shortTitle: "Oil Skimming",
    description:
      "Floating oil removal services using Trailer Mounted Oil Skimming technology for efficient surface oil recovery.",
    image: IMAGES.serviceOilSkimming,
    cardGradient: "from-[#1e3a6e] to-[#2a5298]", // deep blue
    tags: ["Trailer Mounted", "Surface Recovery", "Floating Oil"],
  },
];

export default function ApplicationsSection() {
  const [hoveredId, setHoveredId] = useState<number>(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 480;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#e8f0f8] via-[#eef6f0] to-[#e2ecf5] py-12 sm:py-20"
    >
      <div className="w-[90%] mx-auto">
        {/* Section Header — matches N-MER / other website headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900">
              Our Services
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              End-to-end robotic solutions for the world&apos;s most hazardous industrial environments.
            </p>
          </div>

          {/* Scroll Navigation Controls */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span>5 Core Services</span>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={() => handleScroll("left")}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={() => handleScroll("right")}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Horizontal Expanding Cards Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {SERVICES.map((service) => {
            const isHovered = hoveredId === service.id;
            return (
              <motion.div
                key={service.id}
                layout
                onMouseEnter={() => setHoveredId(service.id)}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={clsx(
                  "group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between shrink-0 h-[420px] sm:h-[500px] border shadow-md hover:shadow-2xl transition-all duration-500",
                  isHovered
                    ? "w-[82vw] sm:w-[560px] min-w-[82vw] sm:min-w-[560px] border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                    : "w-[68vw] sm:w-[280px] min-w-[68vw] sm:min-w-[280px] border-white/30 hover:border-white/50"
                )}
              >
                {/* Background Image with Dark Vignette */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={clsx(
                      "object-cover transition-transform duration-700",
                      isHovered
                        ? "scale-105"
                        : "scale-100 group-hover:scale-105"
                    )}
                    sizes="600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 group-hover:from-black/95 group-hover:via-black/50 transition-all duration-500" />
                </div>

                {/* Large Watermark Number */}
                <div className="absolute inset-0 z-[1] flex items-start justify-center pointer-events-none overflow-hidden">
                  <span
                    className="font-black text-white/[0.07] select-none leading-none"
                    style={{
                      fontSize: isHovered ? "clamp(9rem, 18vw, 20rem)" : "clamp(7rem, 14vw, 14rem)",
                      marginTop: "-1rem",
                      transition:
                        "font-size 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Top Bar: Service Number Badge & Link Icon */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span
                    className={clsx(
                      "px-3 py-1 rounded-full backdrop-blur-md border border-white/20 text-white/90 text-[10px] font-mono font-semibold uppercase tracking-wider shadow-sm bg-gradient-to-r",
                      service.cardGradient
                    )}
                  >
                    Service {service.number}
                  </span>

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div
                      className={clsx(
                        "w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black border border-white/30 backdrop-blur-md flex items-center justify-center shadow-md transition-all",
                        isHovered
                          ? "opacity-100 scale-100"
                          : "opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                      )}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Content Area */}
                {isHovered ? (
                  /* --- EXPANDED CARD (HOVERED) --- */
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-semibold block mb-1">
                        Service Focus
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight drop-shadow-sm">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-200 line-clamp-3 mb-4 font-normal leading-relaxed">
                        {service.description}
                      </p>

                      {/* Tag pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/25 text-white/95 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-fit"
                    >
                      <div
                        className={clsx(
                          "inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-lg transition-all cursor-pointer text-white bg-gradient-to-r",
                          service.cardGradient
                        )}
                      >
                        <span>LEARN MORE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  /* --- COMPACT CARD (UNHOVERED) --- */
                  <div className="relative z-10 p-5 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    {/* Colored accent card overlay with light gradient */}
                    <div
                      className={clsx(
                        "rounded-2xl p-5 mb-2 border border-white/15 bg-gradient-to-br",
                        service.cardGradient
                      )}
                    >
                      <h3 className="text-lg font-bold text-white leading-tight drop-shadow-sm">
                        {service.shortTitle}
                      </h3>
                      <p className="text-xs text-white/80 font-normal line-clamp-2 mt-1.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 pt-2">
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
