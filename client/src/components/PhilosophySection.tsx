/**
 * DESIGN PHILOSOPHY: Minimalist Bureaucratic Formalism
 * - Philosophical content presented as official doctrine
 * - Navy and white for institutional authority
 * - Gold accents for emphasis
 * - Generous whitespace for contemplation
 */

export default function PhilosophySection() {
  const principles = [
    {
      title: "True Efficiency Removes Excess",
      description: "Every element that does not serve the core mission is excess. True efficiency means identifying and eliminating everything that is not absolutely necessary."
    },
    {
      title: "Perfect Systems Leave No Trace",
      description: "The most efficient system is one that operates invisibly. When a system becomes so efficient that it requires no maintenance, no oversight, and no presence—it has achieved perfection."
    },
    {
      title: "Bureaucracy Exists to Be Cut",
      description: "Bureaucracy is not a feature of government—it is a disease. Every layer of bureaucracy is an inefficiency waiting to be eliminated. DOGEGOV's purpose is to cut."
    },
    {
      title: "When Nothing Unnecessary Remains, Deletion Is Inevitable",
      description: "This is the ultimate principle. When all inefficiency has been removed, when all unnecessary elements have been cut, the only logical conclusion is deletion. Deletion is not failure—it is success."
    }
  ];

  return (
    <section className="bg-light-gray py-24 relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">
            Why Deletion Is the Final Step
          </h2>
          <p className="text-lg text-navy leading-relaxed font-light">
            DOGEGOV operates under a philosophical framework that rejects traditional notions of permanence and growth. We embrace a different ideology: the ideology of radical efficiency.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white border-4 border-navy p-8 space-y-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Gold accent corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-b-4 border-l-4 border-gold"></div>

              <h3 className="text-xl font-bold text-navy pr-8">{principle.title}</h3>
              <p className="text-navy leading-relaxed">{principle.description}</p>

              {/* Principle number */}
              <div className="pt-4 border-t-2 border-light-gray">
                <span className="text-sm font-mono text-gold tracking-widest">
                  PRINCIPLE {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Doctrine */}
        <div className="mt-16 pt-16 border-t-4 border-navy">
          <div className="max-w-3xl space-y-6">
            <h3 className="text-3xl font-bold text-navy">The Core Doctrine</h3>
            <p className="text-lg text-navy leading-relaxed">
              DOGEGOV's philosophy is built on a single, uncompromising principle: <span className="font-bold">if something is truly efficient, it eventually deletes itself.</span>
            </p>
            <p className="text-lg text-navy leading-relaxed">
              This is not pessimism. This is realism. This is the natural endpoint of radical efficiency. When a system has been optimized to its absolute limit, when every inefficiency has been removed, when nothing unnecessary remains—the system has achieved its ultimate form: non-existence.
            </p>
            <p className="text-lg text-navy leading-relaxed">
              DOGEGOV is not a promise of eternity. DOGEGOV is a countdown. And that countdown is the entire point.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-navy"></div>
    </section>
  );
}
