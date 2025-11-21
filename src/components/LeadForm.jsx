import { useState } from "react";

export default function LeadForm({ selectedTier, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const backend = import.meta.env.VITE_BACKEND_URL;

  async function submit(e) {
    e.preventDefault();
    setError("");
    if (!backend) {
      setError("Backend URL not configured.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${backend}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, product_tier: selectedTier, message })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || "Something went wrong");
      onSuccess?.();
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="p-4">
      <div className="max-w-md mx-auto space-y-3">
        <div>
          <label className="block text-white/80 text-sm mb-1">Name</label>
          <input
            className="w-full rounded-lg bg-white/10 text-white px-3 py-2 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded-lg bg-white/10 text-white px-3 py-2 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-1">Anything to add?</label>
          <textarea
            className="w-full rounded-lg bg-white/10 text-white px-3 py-2 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Goals, timeline, preferences"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          disabled={loading}
          className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-white font-semibold rounded-xl py-3"
        >
          {loading ? "Sending..." : "Reserve my spot"}
        </button>
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        <p className="text-center text-white/60 text-xs">No spam. You can unsubscribe anytime.</p>
      </div>
    </form>
  );
}
