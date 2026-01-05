/**
 * DESIGN PHILOSOPHY: Minimalist Bureaucratic Formalism
 * - Dry, official bureaucrat language
 * - Asymmetric layout with generous whitespace
 * - Navy and white for institutional authority
 * - Emphasis on radical simplification and deletion
 */

export default function WhatIsDogegov() {
  const principles = [
    {
      title: "Meme Token Inspired",
      description: "DOGEGOV is a meme token inspired by government efficiency ideology and DOGE culture. It represents the intersection of internet culture and radical institutional reform."
    },
    {
      title: "Radical Simplification",
      description: "No endless roadmaps. No unnecessary features. No bureaucratic complexity. Every element exists only if it serves the core mission of efficiency."
    },
    {
      title: "No Endless Bureaucracy",
      description: "Traditional projects promise growth forever. DOGEGOV rejects this model. We operate under the principle that perfect systems eventually eliminate themselves."
    },
    {
      title: "Self-Deletion Objective",
      description: "The final objective is self-deletion. This is not a failure state—it is the ultimate success. When all inefficiency is removed, deletion becomes inevitable."
    }
  ];

  return (
    <section className="bg-white py-24 relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">
            What Is DOGEGOV?
          </h2>
          <p className="text-lg text-navy leading-relaxed font-light">
            DOGEGOV operates under a singular ideology: radical efficiency through systematic simplification. We are not designed to last forever. We are designed to eventually delete ourselves.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="space-y-4 pb-8 border-b-2 border-light-gray last:border-b-0 md:last:border-b-2">
              {/* Principle number in gold */}
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl font-bold text-navy">{principle.title}</h3>
              </div>
              <p className="text-navy leading-relaxed pl-16">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Official Notice Box */}
        <div className="bg-light-gray border-4 border-navy p-8 mt-16">
          <p className="text-sm font-mono tracking-widest text-navy mb-4">OFFICIAL STATEMENT</p>
          <p className="text-lg text-navy leading-relaxed font-light">
            DOGEGOV is not a promise of eternity. It is a countdown. Every action taken by this department is measured against a single metric: does it increase efficiency? If the answer is no, it must be cut. If the answer is yes, it must eventually be cut anyway, because the most efficient system is one that requires nothing.
          </p>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-navy"></div>
    </section>
  );
}
