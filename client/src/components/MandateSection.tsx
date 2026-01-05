import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Minimalist Bureaucratic Formalism
 * - Official-looking proof cards with navy borders
 * - Gold accents for official seals
 * - Asymmetric layout with left-aligned content
 * - Emphasis on credibility through official documentation style
 */

export default function MandateSection() {
  return (
    <section id="mandate" className="bg-light-gray py-24 relative">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-navy"></div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Official Mandates & Verification
          </h2>
          <p className="text-lg text-navy leading-relaxed">
            DOGEGOV follows the DOGE ideology of radical efficiency, validated by public statements from leadership. These official signals confirm our core mission.
          </p>
        </div>

        {/* Proof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: DOGE Origin Signal */}
          <div className="bg-white border-4 border-navy p-8 hover:shadow-lg transition-shadow duration-300 relative group">
            {/* Gold accent corner */}
            <div className="absolute top-0 right-0 w-12 h-12 border-b-4 border-l-4 border-gold"></div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-2">DOGE Origin Signal</h3>
                <p className="text-sm text-navy font-mono tracking-widest">VERIFIED STATEMENT</p>
              </div>

              <p className="text-navy leading-relaxed">
                Elon Musk publicly referencing DOGE as a symbol of government efficiency and radical simplification. This validates the core ideology behind DOGEGOV's mission.
              </p>

              <div className="border-l-4 border-gold pl-4 py-2">
                <p className="text-navy italic text-sm">
                  "Government efficiency through radical simplification"
                </p>
              </div>

              <Button
                variant="outline"
                className="w-full border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold py-6 flex items-center justify-center gap-2"
                onClick={() => window.open("https://x.com/elonmusk/status/1832956111281877225", "_blank")}
              >
                View Origin Signal
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Card 2: Final Step Directive (CRITICAL) */}
          <div className="bg-white border-4 border-warning-red p-8 hover:shadow-lg transition-shadow duration-300 relative group">
            {/* Gold accent corner */}
            <div className="absolute top-0 right-0 w-12 h-12 border-b-4 border-l-4 border-warning-red"></div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-warning-red mb-2">Final Step Directive</h3>
                <p className="text-sm text-navy font-mono tracking-widest">CRITICAL STATEMENT</p>
              </div>

              <p className="text-navy leading-relaxed">
                The definitive statement on DOGE's ultimate objective. This directive forms the philosophical foundation of DOGEGOV's existence and purpose.
              </p>

              <div className="border-l-4 border-warning-red pl-4 py-3 bg-red-50">
                <p className="text-navy font-bold text-lg">
                  "The final step of @DOGE is to delete itself."
                </p>
                <p className="text-sm text-navy mt-2 font-mono">— Official Statement</p>
              </div>

              <Button
                className="w-full bg-warning-red text-white hover:bg-red-700 font-semibold py-6"
                onClick={() => window.open("https://x.com/elonmusk/status/1863666221301764462", "_blank")}
              >
                View Final Directive
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 pt-16 border-t-4 border-navy"></div>
      </div>
    </section>
  );
}
