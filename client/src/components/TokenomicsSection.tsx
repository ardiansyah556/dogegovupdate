import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

/**
 * DESIGN PHILOSOPHY: Minimalist Bureaucratic Formalism
 * - Clean modern pie chart
 * - Written like official budget document with ironic undertones
 * - Navy, gold, and white for institutional authority
 * - Emphasis on maximum efficiency and minimum bureaucracy
 */

export default function TokenomicsSection() {
  const data = [
    { name: "Liquidity Pool", value: 90, fill: "#002868" },
    { name: "Operations & Awareness", value: 10, fill: "#D4AF37" }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border-2 border-navy p-3 rounded-none">
          <p className="font-bold text-navy">{payload[0].name}</p>
          <p className="text-navy">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="bg-light-gray py-24 relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-warning-red"></div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Budget Allocation
          </h2>
          <p className="text-lg text-navy leading-relaxed">
            DOGEGOV operates under strict budgetary discipline. Resources are allocated with surgical precision to maximize efficiency while minimizing bureaucratic overhead.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="bg-white border-4 border-navy p-8 flex justify-center items-center min-h-96">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Allocation Details */}
          <div className="space-y-8">
            {/* Liquidity Pool */}
            <div className="border-l-4 border-navy pl-6 space-y-3">
              <h3 className="text-2xl font-bold text-navy">Liquidity Pool: 90%</h3>
              <p className="text-navy leading-relaxed">
                Maximum capital efficiency. All resources directed toward market liquidity to ensure smooth operations and minimal friction. This represents the core operational mandate.
              </p>
              <p className="text-sm text-navy font-mono tracking-widest">MAXIMUM EFFICIENCY</p>
            </div>

            {/* Operations & Awareness */}
            <div className="border-l-4 border-gold pl-6 space-y-3">
              <h3 className="text-2xl font-bold text-navy">Operations & Awareness: 10%</h3>
              <p className="text-navy leading-relaxed">
                Minimal bureaucratic overhead. Resources allocated only for essential operations and public awareness. No unnecessary spending. No redundant departments.
              </p>
              <p className="text-sm text-navy font-mono tracking-widest">MINIMUM BUREAUCRACY</p>
            </div>

            {/* Official Notice */}
            <div className="bg-white border-2 border-navy p-4 mt-8">
              <p className="text-sm font-mono text-navy tracking-widest mb-2">BUDGET PRINCIPLE</p>
              <p className="text-navy italic">
                "Every percentage point not allocated to liquidity is a failure of efficiency."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
