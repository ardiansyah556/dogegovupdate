import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Minimalist Bureaucratic Formalism
 * - Asymmetric layout with left-aligned content
 * - Navy and white for institutional authority
 * - Gold accent for official seal
 * - Red for urgency and deletion theme
 */

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white text-navy pt-20 pb-32 relative overflow-hidden">
      {/* Background decorative element - subtle gold line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold to-transparent"></div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block border-2 border-navy px-4 py-2 mb-6">
                <p className="text-sm font-mono tracking-widest text-navy">OFFICIAL DEPARTMENT</p>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight">
                The Only Department Designed to Delete Itself
              </h1>
              
              <p className="text-xl md:text-2xl text-navy font-light italic pt-4">
                Cutting Red Tape. Cutting Waste. Cutting Itself.
              </p>
            </div>

            <p className="text-lg text-navy leading-relaxed max-w-lg">
              Department of Government Efficiency operates under a singular principle: if something is truly efficient, it eventually deletes itself. This is not a promise of eternity. This is a countdown.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                size="lg"
                className="bg-navy text-white hover:bg-navy/90 border-2 border-navy px-8 py-6 text-lg font-semibold"
                onClick={() => document.getElementById("mandate")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Official Mandate
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-lg font-semibold"
                onClick={() => document.getElementById("community")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join the Efficiency Protocol
              </Button>
            </div>
          </div>

          {/* Right Column - Logo and Visual */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative">
            <div className="relative w-full max-w-sm">
              {/* Decorative border frame */}
              <div className="absolute inset-0 border-4 border-gold" style={{ transform: "rotate(-2deg)" }}></div>
              
              {/* Logo Image */}
              <div className="relative bg-white p-8 border-4 border-navy">
                <img
                  src="/images/dogegov-logo.png"
                  alt="DOGEGOV Official Seal"
                  className="w-full h-auto"
                />
              </div>

              {/* Red scissors accent - positioned absolutely */}
              <div className="absolute -bottom-6 -right-6 text-warning-red animate-pulse">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.5 15.5M20 20L8.5 8.5"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-navy" />
      </div>
    </section>
  );
}
