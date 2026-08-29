type LoadingContentProps = {
  progress: number;
  message?: string;
};

export default function LoadingContent({
  progress,
  message = "Chargement de la scène 3D",
}: LoadingContentProps) {
  const percentage = Math.min(100, Math.max(0, Math.round(progress)));

  return (
    <div
      className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.82),rgba(255,255,255,0.25)),linear-gradient(145deg,rgba(255,255,255,0.16),rgba(242,184,212,0.22))] p-6 text-[#4f3041] pointer-events-none"
      role="status"
      aria-live="polite"
      aria-label={`${message} : ${percentage} %`}
    >
      <div className="grid w-[min(20rem,80%)] gap-3">
        <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#a12d68]">
          Initialisation
        </span>
        <strong
          className="font-mono text-[clamp(2.75rem,8vw,5rem)] font-[750] leading-[0.9] tracking-[-0.08em] text-[#25121d]"
          aria-hidden="true"
        >
          {percentage.toString().padStart(2, "0")}%
        </strong>
        <div
          className="h-[0.55rem] overflow-hidden rounded-full border border-[#4f304133] bg-white/50"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
          aria-label={message}
        >
          <span
            className="block h-full origin-left rounded-full bg-[linear-gradient(90deg,#a12d68,#e576ad)] transition-transform duration-200 ease-out"
            style={{ transform: `scaleX(${percentage / 100})` }}
          />
        </div>
        <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.04em] text-[#704056]">
          {message}
        </span>
      </div>
    </div>
  );
}
