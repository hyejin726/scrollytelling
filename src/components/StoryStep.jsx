import { CheckCircle2 } from 'lucide-react';

export function StoryStep({ step, isActive }) {
  return (
    <article
      id={`step-${step.id}`}
      data-step-id={step.id}
      className={`story-step${isActive ? ' is-active' : ''}`}
      aria-current={isActive ? 'step' : undefined}
    >
      <p className="story-step__kicker">{step.kicker}</p>
      <h2>{step.title}</h2>
      <p className="story-step__body">{step.body}</p>
      <ul>
        {step.points.map((point) => (
          <li key={point}>
            <CheckCircle2 size={17} strokeWidth={2.1} aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
