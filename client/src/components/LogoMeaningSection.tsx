/**
 * DESIGN PHILOSOPHY: Minimalist Bureaucratic Formalism
 * - Explains logo components with official documentation style
 * - Asymmetric layout with visual hierarchy
 * - Navy and white for institutional authority
 * - Gold accents for emphasis
 */

export default function LogoMeaningSection() {
  const components = [
    {
      element: "Shiba Inu",
      meaning: "DOGE Culture & Public Accountability",
      description: "The Shiba Inu represents the meme culture foundation of DOGEGOV. It symbolizes public participation and the internet-driven nature of this movement. The dog's expression conveys confidence and authority."
    },
    {
      element: "Business Suit",
      meaning: "Government Authority",
      description: "The formal business suit places the Shiba Inu in a position of institutional power. This represents the serious nature of government efficiency and the legitimacy of our mission."
    },
    {
      element: "Red Scissors",
      meaning: "Aggressive Efficiency",
      description: "The scissors are the symbol of cutting. Red emphasizes urgency and warning. They represent DOGEGOV's core function: the aggressive elimination of waste and inefficiency."
    },
    {
      element: "Paperwork",
      meaning: "Bureaucracy Being Eliminated",
      description: "The stack of papers represents bureaucratic excess. The scissors cutting through them symbolize the relentless removal of unnecessary processes and documentation."
    }
  ];

  return (
    <section className="bg-white py-24 relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-warning-red"></div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            The Symbol of Efficiency
          </h2>
          <p className="text-lg text-navy leading-relaxed">
            Every element of the DOGEGOV seal carries meaning. Together, they represent our mission: radical efficiency through systematic elimination.
          </p>
        </div>

        {/* Logo Display */}
        <div className="mb-16 bg-light-gray border-4 border-navy p-8 flex justify-center items-center min-h-96">
          <img
            src="/images/dogegov-logo.png"
            alt="DOGEGOV Official Seal"
            className="max-w-sm w-full h-auto"
          />
        </div>

        {/* Components Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {components.map((component, index) => (
            <div key={index} className="space-y-4 pb-8 border-b-2 border-light-gray last:border-b-0 md:last:border-b-2">
              {/* Component header */}
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gold">"</span>
                <div>
                  <h3 className="text-2xl font-bold text-navy">{component.element}</h3>
                  <p className="text-sm text-navy font-mono tracking-widest mt-1">{component.meaning}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-navy leading-relaxed pl-8">{component.description}</p>
            </div>
          ))}
        </div>

        {/* Seal Explanation */}
        <div className="mt-16 pt-16 border-t-4 border-navy space-y-6">
          <h3 className="text-3xl font-bold text-navy">The Circular Seal</h3>
          <p className="text-lg text-navy leading-relaxed max-w-3xl">
            The circular seal mimics official government seals, establishing institutional legitimacy. The gold rope border represents official authority and prestige. The text around the seal reads "Department of Government Efficiency"—a department that should not exist, but does, with a singular purpose: to eliminate itself.
          </p>
          <p className="text-lg text-navy leading-relaxed max-w-3xl">
            Every design choice is intentional. Every element serves the mission. The seal is both a mockery of government bureaucracy and a serious representation of radical efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
