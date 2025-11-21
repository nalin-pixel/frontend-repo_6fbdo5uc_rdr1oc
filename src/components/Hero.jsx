export default function Hero({ onSelect }) {
  return (
    <section className="px-5 pt-10 pb-6 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Lose weight without losing your life
        </h1>
        <p className="mt-3 text-white/80 text-sm">
          A practical, science-backed system to drop fat, keep muscle, and feel great—
          without starving, cutting carbs, or endless cardio.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-3">
          <button
            onClick={() => onSelect("course")}
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3 font-semibold"
          >
            Start the course
          </button>
          <button
            onClick={() => onSelect("pdf")}
            className="bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 font-semibold"
          >
            Try the $29 PDF first
          </button>
        </div>
        <p className="mt-3 text-white/60 text-xs">100% money-back guarantee</p>
      </div>
    </section>
  );
}
