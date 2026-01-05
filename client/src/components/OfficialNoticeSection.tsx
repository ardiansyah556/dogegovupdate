/**
 * DESIGN PHILOSOPHY: Minimalist Bureaucratic Formalism
 * - Official notice styled as government document
 * - Red warning color for emphasis
 * - Monospace font for official appearance
 * - High contrast and clarity
 */

export default function OfficialNoticeSection() {
  return (
    <section className="bg-light-gray py-24 relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-navy"></div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Official Notice
          </h2>
          <p className="text-lg text-navy leading-relaxed">
            This is not a financial instrument. This is a statement of ideology.
          </p>
        </div>

        {/* Official Notice Box */}
        <div className="bg-white border-8 border-warning-red p-12 space-y-6 max-w-3xl">
          {/* Header */}
          <div className="border-b-4 border-warning-red pb-6">
            <p className="text-sm font-mono tracking-widest text-warning-red font-bold mb-2">
              OFFICIAL NOTICE
            </p>
            <p className="text-sm font-mono tracking-widest text-navy">
              DEPARTMENT OF GOVERNMENT EFFICIENCY
            </p>
          </div>

          {/* Main Notice */}
          <div className="space-y-4">
            <p className="text-2xl font-bold text-navy leading-relaxed">
              This department has a termination plan.
            </p>
            <p className="text-2xl font-bold text-navy leading-relaxed">
              DOGEGOV is not designed to last forever.
            </p>
            <p className="text-2xl font-bold text-navy leading-relaxed">
              Efficiency has an endpoint.
            </p>
          </div>

          {/* Disclaimer Box */}
          <div className="bg-red-50 border-2 border-warning-red p-6 space-y-3">
            <p className="text-sm font-mono tracking-widest text-warning-red font-bold">
              IMPORTANT DISCLAIMER
            </p>
            <ul className="space-y-2 text-navy text-sm leading-relaxed">
              <li>• No price predictions are made or implied</li>
              <li>• No investment guarantees are provided</li>
              <li>• No financial advice is offered</li>
              <li>• This is ideology-driven meme branding only</li>
              <li>• DOGEGOV is not a promise of returns or permanence</li>
            </ul>
          </div>

          {/* Signature */}
          <div className="border-t-4 border-warning-red pt-6 space-y-2">
            <p className="text-sm font-mono text-navy">Issued by:</p>
            <p className="text-lg font-bold text-navy">Department of Government Efficiency</p>
            <p className="text-sm font-mono text-navy">Established to be removed</p>
          </div>
        </div>

        {/* Additional Notice */}
        <div className="mt-12 bg-navy text-white border-4 border-navy p-8 max-w-3xl">
          <p className="text-sm font-mono tracking-widest mb-4">PARTICIPATION NOTICE</p>
          <p className="text-lg leading-relaxed">
            Participation in DOGEGOV is entirely optional. Understanding the core philosophy is mandatory. This project exists to demonstrate radical efficiency through systematic simplification. The final step is deletion.
          </p>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gold"></div>
    </section>
  );
}
