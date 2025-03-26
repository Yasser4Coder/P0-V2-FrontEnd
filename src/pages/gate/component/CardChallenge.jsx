export default function ChallengeCard({ challenge, variant = "blue" }) {
  const borderColor =
    variant === "green" ? "border-emerald-500" : "border-blue-400";
  const glowColor =
    variant === "green"
      ? "shadow-[0_0_15px_rgba(16,185,129,0.5)]"
      : "shadow-[0_0_15px_rgba(59,130,246,0.5)]";

  return (
    <div
      className={`relative w-64 rounded-2xl border-2 bg-black/80 p-5 backdrop-blur-sm ${borderColor} ${glowColor}`}
    >
      <div className="mb-4 rounded border border-gray-600 px-3 py-1 text-center text-sm font-mono text-white">
        {challenge.name}
      </div>

      <div className="space-y-1 font-mono text-sm text-gray-300">
        <div className="flex">
          <span className="w-32">categorie:</span>
          <span className="text-white">{challenge.category}</span>
        </div>
        <div className="flex">
          <span className="w-32">points</span>
          <span className="text-white">: {challenge.points}</span>
        </div>
        <div className="flex">
          <span className="w-32">difficulty</span>
          <span className="text-white">: {challenge.difficulty}</span>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        {challenge.status === "solved" ? (
          <button className="rounded border border-gray-600 bg-green-900/30 px-4 py-1 font-mono text-sm text-white cursor-pointer">
            solved
          </button>
        ) : (
          <button className="rounded border border-gray-600 bg-blue-900/30 px-4 py-1 font-mono text-sm text-white cursor-pointer">
            next
          </button>
        )}
      </div>
    </div>
  );
}
