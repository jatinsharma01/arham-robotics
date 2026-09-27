"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ClientsBar() {
  const trustedClients = [
    {
      name: "Hindustan Petroleum (HPCL)",
      logo: "/images/trusted/Hindustan_Petroleum-Logo.png",
    },
    {
      name: "Numaligarh Refinery Limited (NRL)",
      logo: "/images/trusted/NRL.png",
    },
    {
      name: "Oil India Limited",
      logo: "/images/trusted/Oil_India_Logo.png",
    },
    {
      name: "Petrofac",
      logo: "/images/trusted/Petrofac.png",
    },
    {
      name: "Vedanta Resources",
      logo: "/images/trusted/Vedanta-Logo-PNG.png",
    },
    {
      name: "Bumi Armada",
      logo: "/images/trusted/bhumiarmada.png",
    },
  ];

  // Repeat items so each track is long enough to fill ultra-wide screens seamlessly
  const clientList = [...trustedClients, ...trustedClients, ...trustedClients];

  return (
    <section
      id="clients"
      className="w-full py-8 sm:py-16 bg-[#f5f6f9] overflow-hidden relative"
    >
      {/* 90% width header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[90%] mx-auto mb-4 sm:mb-8"
      >
        <h2 className="text-xl sm:text-3xl font-normal text-slate-800 tracking-tight">
          Trusted By
        </h2>
      </motion.div>

      {/* Infinite Horizontal Sliding Ticker (100% full width) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full relative overflow-hidden marquee-container select-none"
      >
        {/* Left Fade Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-r from-[#f5f6f9] to-transparent z-10 pointer-events-none" />

        {/* Right Fade Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-l from-[#f5f6f9] to-transparent z-10 pointer-events-none" />

        {/* Moving Marquee Track */}
        <div className="flex w-max">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-6 sm:gap-14 animate-marquee py-2 pr-6 sm:pr-14">
            {clientList.map((client, idx) => (
              <div
                key={`track1-${idx}`}
                className="w-36 sm:w-56 h-16 sm:h-24 bg-transparent p-2 sm:p-3 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110 cursor-default"
                title={client.name}
              >
                <div className="relative w-28 sm:w-48 h-10 sm:h-16 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 (Clone for infinite seamless loop) */}
          <div
            className="flex shrink-0 items-center gap-6 sm:gap-14 animate-marquee py-2 pr-6 sm:pr-14"
            aria-hidden="true"
          >
            {clientList.map((client, idx) => (
              <div
                key={`track2-${idx}`}
                className="w-36 sm:w-56 h-16 sm:h-24 bg-transparent p-2 sm:p-3 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110 cursor-default"
                title={client.name}
              >
                <div className="relative w-28 sm:w-48 h-10 sm:h-16 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
