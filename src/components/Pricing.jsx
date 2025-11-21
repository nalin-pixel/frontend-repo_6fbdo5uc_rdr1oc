import { Check } from "lucide-react";

const tiers = [
  {
    name: "PDF Guide",
    price: 29,
    period: "one-time",
    highlight: false,
    features: [
      "80+ page science-backed plan",
      "7-day starter meal plan",
      "Grocery lists & swaps",
      "Lifetime updates"
    ],
    tierKey: "pdf"
  },
  {
    name: "Complete Course",
    price: 199,
    period: "one-time",
    highlight: true,
    features: [
      "8 modules, 40+ lessons",
      "Templates & calculators",
      "Community access",
      "Bonus: Habit toolkit"
    ],
    tierKey: "course"
  },
  {
    name: "Course + Coaching",
    price: 497,
    period: "one-time",
    highlight: false,
    features: [
      "Everything in Course",
      "1:1 kickoff call",
      "Weekly check-ins (8 weeks)",
      "Personalized macros & plan"
    ],
    tierKey: "course_coach"
  }
];

export default function Pricing({ onSelect }) {
  return (
    <section className="px-4 py-10">
      <h2 className="text-center text-2xl font-bold text-white mb-6">Choose your plan</h2>
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-5 backdrop-blur-md bg-white/5 ${
              t.highlight ? "border-blue-500/60 shadow-[0_0_35px_rgba(59,130,246,0.35)]" : "border-white/10"
            }`}
          >
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="text-white font-semibold">{t.name}</h3>
              <div className="text-white text-2xl font-bold">
                ${t.price}
                <span className="text-sm text-white/70 font-normal"> {t.period}</span>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/80">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => onSelect(t.tierKey)}
              className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                t.highlight
                  ? "bg-blue-600 hover:bg-blue-500 text-white focus:ring-blue-500"
                  : "bg-white/10 hover:bg-white/20 text-white focus:ring-white/40"
              }`}
            >
              Get started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
