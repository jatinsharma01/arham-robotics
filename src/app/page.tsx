import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsBar from "@/components/ClientsBar";
import AboutSystem from "@/components/AboutSystem";
import RobotShowcase from "@/components/RobotShowcase";
import ApplicationsSection from "@/components/ApplicationsSection";
import JettingSystem from "@/components/JettingSystem";
import TelemetryDarkSection from "@/components/TelemetryDarkSection";
import ModularTechGrid from "@/components/ModularTechGrid";
import AdvantagesGrid from "@/components/AdvantagesGrid";
import FaqSection from "@/components/FaqSection";
import AtexSolutionsSection from "@/components/AtexSolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Trusted By / Client Logos Bar */}
      <ClientsBar />

      {/* 4. About The System Dual-Column Feature */}
      <AboutSystem />

      {/* 5. AMR & ROV Product Cards Showcase */}
      <RobotShowcase />

      {/* 6. Applications Across All Tank Types (3 Arched Pill Cards) */}
      <ApplicationsSection />

      {/* 8. High-Pressure Tooling & ATEX Certificate Preview */}
      <JettingSystem />

      {/* 9. Cinematic Dark Telemetry & In-Tank Live Camera Station */}
      <TelemetryDarkSection />

      {/* 10. Modular Component Breakdown */}
      <ModularTechGrid />

      {/* 11. 9-Item Key Advantages Grid */}
      <AdvantagesGrid />

      {/* 13. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 13b. No-Man Entry Robotic Solutions - ATEX Zone-0 Certified */}
      <AtexSolutionsSection />

      {/* 14. Client Testimonials & Case Studies */}
      <TestimonialsSection />

      {/* 15. Call To Action Banner */}
      <CtaBanner />

      {/* 16. Comprehensive Footer */}
      <Footer />
    </main>
  );
}
