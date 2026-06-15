export function ProgressRail({ steps, activeStepId }) {
  return (
    <nav className="progress-rail" aria-label="발표 섹션 이동">
      {steps.map((step, index) => (
        <a
          key={step.id}
          href={`#step-${step.id}`}
          className={step.id === activeStepId ? 'is-active' : ''}
          aria-current={step.id === activeStepId ? 'step' : undefined}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{step.title}</strong>
        </a>
      ))}
    </nav>
  );
}
