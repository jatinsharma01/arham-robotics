"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    company: "Indian Oil Corporation Ltd",
    short: "IOCL",
    logoColor: "#f37021",
    badge: "Mathura Refinery",
    author: "Rajesh V. Sharma",
    role: "Chief General Manager (Inspection & Safety)",
    quote:
      "Arham's Zone 0 robotic crawler cleaned our 60-meter crude oil storage tank with complete zero-man-entry safety. The turnaround was achieved in just 12 days versus our usual 60-day manual schedule, with exceptional hydrocarbon recovery.",
    rating: 5,
  },
  {
    company: "Bharat Petroleum Corp Ltd",
    short: "BPCL",
    logoColor: "#005baa",
    badge: "Mumbai Refinery",
    author: "Anil K. Deshmukh",
    role: "Head of Terminal Maintenance",
    quote:
      "The ATEX Zone 0 compliance and ultrasonic NDT reporting gave our inspection engineers total confidence. Over 94% of the compacted bottom sludge was reclaimed directly into our slop oil headers.",
    rating: 5,
  },
  {
    company: "Hindustan Petroleum Corp Ltd",
    short: "HPCL",
    logoColor: "#d71920",
    badge: "Visakh Refinery",
    author: "Siddharth Menon",
    role: "DGM (Tank Farm Operations)",
    quote:
      "Deploying Arham Robotics eliminated every hazardous risk associated with confined space entry. Their mobile team mobilized rapidly and executed flawless operations under nitrogen inerting.",
    rating: 5,
  },
  {
    company: "Oil & Natural Gas Corporation",
    short: "ONGC",
    logoColor: "#0e4c92",
    badge: "Hazira Plant",
    author: "Dr. Pradeep Nair",
    role: "VP (Process & Safety Engineering)",
    quote:
      "We were impressed by the live telemetry feed and the fail-safe evacuation system. The entire 45,000 KL tank was cleaned in under 15 days — a process that previously took our team nearly 3 months with manual methods.",
    rating: 5,
  },
  {
    company: "Mangalore Refinery & Petrochemicals",
    short: "MRPL",
    logoColor: "#1a7a3a",
    badge: "Mangalore Terminal",
    author: "K. Subramaniam",
    role: "Senior Manager (Mechanical Maintenance)",
    quote:
      "The robotic system navigated through our tight 24-inch manways effortlessly. Sludge recovery exceeded 92%, and the entire operation was completed without a single confined space entry permit.",
    rating: 5,
  },
  {
    company: "Chennai Petroleum Corp Ltd",
    short: "CPCL",
    logoColor: "#8b1a1a",
    badge: "Manali Refinery",
    author: "V. Ramachandran",
    role: "Chief Engineer (Projects & Turnaround)",
    quote:
      "Arham's crawler delivered exceptional results cleaning our high-wax crude storage tanks. The real-time camera feeds allowed our engineers to monitor the entire process remotely from the control room.",
    rating: 5,
  },
  {
    company: "Numaligarh Refinery Ltd",
    short: "NRL",
    logoColor: "#2e7d32",
    badge: "Numaligarh Plant",
    author: "Bikash Hazarika",
    role: "Manager (Tank Farm & Utilities)",
    quote:
      "The zero-emission closed-loop system aligned perfectly with our environmental targets. We saw a 40% reduction in waste disposal costs and achieved full API 653 compliance during the post-cleaning inspection.",
    rating: 5,
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="w-[280px] xs:w-[320px] sm:w-[420px] p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group shrink-0"
    >
      <div>
        {/* Client Company Pill */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-white font-extrabold text-[11px] sm:text-xs flex items-center justify-center"
              style={{ backgroundColor: t.logoColor }}
            >
              {t.short[0]}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">{t.short}</div>
              <div className="text-[10px] text-slate-400">{t.badge}</div>
            </div>
          </div>
          <div className="flex items-center text-amber-400">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            ))}
          </div>
        </div>

        {/* Quote Icon */}
        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-slate-300 mb-2.5 sm:mb-3 group-hover:text-emerald-500 transition-colors" />

        {/* Quote Text */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-200/80 flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-slate-900">{t.author}</div>
          <div className="text-[10px] text-slate-500">{t.role}</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Verified</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  // Duplicate for seamless infinite loop
  const cardList = [...testimonials, ...testimonials];

  return (
    <section className="py-12 sm:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[90%] mx-auto mb-6 sm:mb-10"
      >
        {/* Section Header */}
        <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900">
          Trusted by Foremost Refinery Leaders
        </h2>
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-500 max-w-2xl">
          Real feedback from refinery safety directors, terminal superintendents, and inspection managers across India.
        </p>
      </motion.div>

      {/* Infinite Smooth Sliding Ticker — full width like Trusted By */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full relative overflow-hidden testimonial-marquee-container select-none"
      >
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <div className="flex w-max">
          {/* Track 1 */}
          <div className="flex shrink-0 items-stretch gap-6 animate-testimonial-marquee pr-6">
            {cardList.map((t, idx) => (
              <TestimonialCard key={`t1-${idx}`} t={t} />
            ))}
          </div>
          {/* Track 2 (clone for seamless loop) */}
          <div
            className="flex shrink-0 items-stretch gap-6 animate-testimonial-marquee pr-6"
            aria-hidden="true"
          >
            {cardList.map((t, idx) => (
              <TestimonialCard key={`t2-${idx}`} t={t} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
