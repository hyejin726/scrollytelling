import { useEffect, useState } from 'react';

export function useActiveStep(stepIds) {
  const [activeStepId, setActiveStepId] = useState(stepIds[0]);

  useEffect(() => {
    if (!Array.isArray(stepIds) || stepIds.length === 0) return undefined;

    const nodes = stepIds
      .map((id) => document.getElementById(`step-${id}`))
      .filter(Boolean);

    if (nodes.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.dataset?.stepId) {
          setActiveStepId(visible.target.dataset.stepId);
        }
      },
      {
        root: null,
        rootMargin: '-28% 0px -40% 0px',
        threshold: [0.18, 0.32, 0.5, 0.68],
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [stepIds]);

  return activeStepId;
}
