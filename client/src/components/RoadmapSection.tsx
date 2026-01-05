/**
 * DESIGN PHILOSOPHY: Minimalist Bureaucratic Formalism
 * - Timeline structure feels like a termination schedule, not growth roadmap
 * - Asymmetric layout with left-aligned phases
 * - Red accent for final deletion phase
 * - Official document aesthetic
 */

export default function RoadmapSection() {
  const phases = [
    {
      phase: "Phase I",
      title: "Department Formation",
      description: "Official establishment of DOGEGOV. Seal creation. Organizational structure implemented. Initial mandate published.",
      status: "completed",
      color: "gold"
    },
    {
      phase: "Phase II",
      title: "Bureaucracy Reduction",
      description: "Systematic elimination of redundant processes. Streamlining of operations. Removal of unnecessary departments and procedures.",
      status: "active",
      color: "navy"
    },
    {
      phase: "Phase III",
      title: "Maximum Efficiency",
      description: "All non-essential elements removed. Operations reduced to absolute minimum. Perfect efficiency achieved.",
      status: "pending",
      color: "navy"
    },
    {
      phase: "Final Phase",
      title: "Department Self-Deletion Initiated",
      description: "The ultimate objective. When nothing unnecessary remains, deletion becomes inevitable. The final step is to delete itself.",
      status: "terminal",
      color: "red"
    }
  ];

  return (
    <section className="bg-white py-24 relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-navy"></div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Execution Timeline
          </h2>
          <p className="text-lg text-navy leading-relaxed">
            This is not a growth roadmap. This is a termination schedule. Each phase represents a step toward the inevitable conclusion: self-deletion.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-0 relative">
          {/* Vertical line connector */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-navy to-warning-red"></div>

          {phases.map((phase, index) => (
            <div key={index} className="mb-12 ml-24 relative">
              {/* Timeline dot */}
              <div
                className={`absolute -left-20 top-2 w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                  phase.color === "gold"
                    ? "border-gold bg-gold"
                    : phase.color === "red"
                    ? "border-warning-red bg-warning-red"
                    : "border-navy bg-navy"
                }`}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Phase Card */}
              <div
                className={`border-4 p-8 space-y-4 ${
                  phase.color === "red"
                    ? "border-warning-red bg-red-50"
                    : "border-navy bg-white"
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className={`text-sm font-mono tracking-widest font-bold ${
                      phase.color === "red" ? "text-warning-red" : "text-gold"
                    }`}
                  >
                    {phase.phase}
                  </span>
                  <h3 className={`text-2xl font-bold ${phase.color === "red" ? "text-warning-red" : "text-navy"}`}>
                    {phase.title}
                  </h3>
                </div>

                <p className="text-navy leading-relaxed">{phase.description}</p>

                {/* Status indicator */}
                <div className="flex items-center gap-2 pt-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      phase.status === "completed"
                        ? "bg-gold"
                        : phase.status === "active"
                        ? "bg-navy"
                        : phase.status === "terminal"
                        ? "bg-warning-red"
                        : "bg-light-gray"
                    }`}
                  ></div>
                  <span className="text-sm font-mono text-navy uppercase tracking-widest">
                    {phase.status === "completed"
                      ? "Completed"
                      : phase.status === "active"
                      ? "In Progress"
                      : phase.status === "terminal"
                      ? "Terminal Phase"
                      : "Pending"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Note */}
        <div className="mt-16 pt-16 border-t-4 border-navy">
          <div className="bg-light-gray border-2 border-navy p-6">
            <p className="text-sm font-mono text-navy tracking-widest mb-3">TERMINATION NOTICE</p>
            <p className="text-navy leading-relaxed">
              This timeline represents the path to inevitable conclusion. Each phase brings us closer to perfect efficiency. When the final phase is reached, DOGEGOV will have achieved its ultimate objective: complete self-deletion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
