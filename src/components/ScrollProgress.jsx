import { useScrollProgress } from '../hooks/useScrollProgress.js';

export function ScrollProgress() {
  const progress = useScrollProgress();
  const progressPercent = Math.round(progress * 100);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        role="progressbar"
        aria-label="페이지 스크롤 진행률"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progressPercent}
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
