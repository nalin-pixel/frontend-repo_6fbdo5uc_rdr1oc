import { useState } from "react";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import LeadForm from "./components/LeadForm";

function App() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (tier) => {
    setSelectedTier(tier);
    setSubmitted(false);
    // Scroll to form on mobile
    setTimeout(() => {
      const el = document.getElementById("lead-form");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="relative max-w-screen-sm mx-auto">
        <Hero onSelect={handleSelect} />

        <div className="px-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
            <Pricing onSelect={handleSelect} />
            <div id="lead-form" className="border-t border-white/10">
              {submitted ? (
                <div className="p-6 text-center text-white">
                  <h3 className="text-xl font-bold">You're in! 🎉</h3>
                  <p className="text-white/80 mt-2 text-sm">
                    Check your email in the next few minutes. We'll send details on the {selectedTier?.replace("_", " + ") || "selected"} option.
                  </p>
                </div>
              ) : (
                <LeadForm selectedTier={selectedTier || "pdf"} onSuccess={() => setSubmitted(true)} />
              )}
            </div>
          </div>

          <footer className="text-center text-white/60 text-xs py-6">
            Secure checkout • 30‑day guarantee • Mobile‑first experience
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
