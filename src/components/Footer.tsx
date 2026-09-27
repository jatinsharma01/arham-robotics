import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/data/images";
import { Mail, Phone, MapPin, ShieldCheck, Globe, Share2, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#060c18] via-[#0b162a] to-[#060c18] text-slate-400 text-xs sm:text-sm border-t border-white/10">
      <div className="w-[90%] mx-auto py-12 sm:py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Brand & Summary Column */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="relative h-12 w-48 sm:h-16 sm:w-60 flex items-center">
              <Image
                src={IMAGES.logo}
                alt="Arham Oil & Gas Robotics Logo"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Arham Robotics is an indigenous pioneer in ATEX and IECEx Zone 0 certified robotic solutions for oil and petrochemical storage tanks, delivering zero-man-entry safety and maximum hydrocarbon recovery worldwide.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Industrial Robotics Hub, Gujarat &amp; Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:contact@arhamoil.com" className="hover:text-emerald-400 transition-colors">
                  contact@arhamoil.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-emerald-400 transition-colors">
                  +91 (0) 22 2845 9000
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column: Robotic Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Robotic Fleet
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#products" className="hover:text-emerald-400 transition-colors">
                  AMR Tank Cleaning Robot
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-emerald-400 transition-colors">
                  ROV Confined Space Platform
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-emerald-400 transition-colors">
                  300 Bar Jetting Cannon
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-emerald-400 transition-colors">
                  Ultrasonic NDT Thickness Crawler
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-emerald-400 transition-colors">
                  Mobile Control Unit (MCU)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Applications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Applications
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#applications" className="hover:text-emerald-400 transition-colors">
                  Floating Roof Tanks (EFR / IFR)
                </Link>
              </li>
              <li>
                <Link href="#applications" className="hover:text-emerald-400 transition-colors">
                  Fixed Cone &amp; Dome Tanks
                </Link>
              </li>
              <li>
                <Link href="#applications" className="hover:text-emerald-400 transition-colors">
                  Horton Spheres &amp; Bullets
                </Link>
              </li>
              <li>
                <Link href="#applications" className="hover:text-emerald-400 transition-colors">
                  Crude Oil Sludge Recovery
                </Link>
              </li>
              <li>
                <Link href="#applications" className="hover:text-emerald-400 transition-colors">
                  Petrochemical Vessel Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Certifications & Compliance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Compliance &amp; Safety
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>ATEX Directive 2014/34/EU</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>IECEx Zone 0 Certified</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>API 653 Tank Standards</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO 9001:2015 Quality</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Man Entry (ZME) Protocol</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Arham Oil &amp; Gas Robotics. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">
              Safety Certifications
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
