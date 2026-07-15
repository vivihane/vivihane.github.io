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
      className="scene-loader"
      role="status"
      aria-live="polite"
      aria-label={`${message} : ${percentage} %`}
    >
      <div className="scene-loader-panel">
        <span className="scene-loader-kicker">Initialisation</span>
        <strong className="scene-loader-value" aria-hidden="true">
          {percentage.toString().padStart(2, "0")}%
        </strong>
        <div
          className="scene-loader-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
          aria-label={message}
        >
          <span
            className="scene-loader-fill"
            style={{ transform: `scaleX(${percentage / 100})` }}
          />
        </div>
        <span className="scene-loader-label">{message}</span>
      </div>
    </div>
  );
}
