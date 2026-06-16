import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Eye,
  Gauge,
  LayoutDashboard,
  MessagesSquare,
  MousePointer2,
  PanelRightOpen,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { ChatMockup } from './components/ChatMockup.jsx';
import { ProgressRail } from './components/ProgressRail.jsx';
import { ScrollProgress } from './components/ScrollProgress.jsx';
import { StoryStep } from './components/StoryStep.jsx';
import { useActiveStep } from './hooks/useActiveStep.js';
import {
  analysisLayers,
  backupSlides,
  measurementProtocol,
  motionTokens,
  muizzInteractionExamples,
  progressIndicatorAnalysis,
  referenceSections,
  scrollSequenceTimingAnalysis,
  scrollytellingElements,
  sourceLinks,
  storySteps,
  visitedChatbotSites,
} from './data/storyContent.js';

const iconMap = {
  context: Sparkles,
  references: MessagesSquare,
  common: ClipboardList,
  scrolly: Gauge,
  visual: Eye,
  standards: ShieldCheck,
};

function LayerCard({ item, isActive, onActivate }) {
  const Icon = item.icon;

  return (
    <article
      className={`layer-card${isActive ? ' is-active' : ''}`}
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      <div className="layer-card__icon" aria-hidden="true">
        <Icon size={18} strokeWidth={2.1} />
      </div>
      <div>
        <span className="layer-card__label">{item.layer}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <small>{item.application}</small>
      </div>
    </article>
  );
}

function AnalysisExamplePreview({ item }) {
  const layer = item.layer.toLowerCase();

  return (
    <aside className="analysis-preview" aria-label={`${item.layer} 예시`}>
      <div className="analysis-preview__head">
        <span>Layer example</span>
        <strong>{item.layer}</strong>
      </div>
      <div className={`analysis-demo analysis-demo--${layer}`}>
        {layer === 'time' && (
          <>
            <div className="time-demo-row">
              <span>Hover</span>
              <strong>120ms</strong>
              <i />
            </div>
            <div className="time-demo-row">
              <span>Step active</span>
              <strong>200ms</strong>
              <i />
            </div>
            <div className="time-demo-row">
              <span>Answer reveal</span>
              <strong>320ms</strong>
              <i />
            </div>
          </>
        )}

        {layer === 'typography' && (
          <div className="type-demo">
            <p className="type-demo__headline">챗봇 답변 제목</p>
            <p className="type-demo__body">
              본문은 길게 읽히므로 line-height를 넉넉하게 둡니다.
            </p>
            <div className="type-demo__meta">
              <span>Status label</span>
              <strong>Action chip</strong>
            </div>
          </div>
        )}

        {layer === 'color' && (
          <div className="color-demo">
            {[
              ['Neutral', '#f5f5f7'],
              ['Text', '#1d1d1f'],
              ['Accent', '#0071e3'],
              ['Success', '#2f8f5b'],
              ['Warning', '#b35c00'],
            ].map(([label, color]) => (
              <span key={label}>
                <i style={{ background: color }} />
                {label}
              </span>
            ))}
          </div>
        )}

        {layer === 'layout' && (
          <div className="layout-demo">
            <div className="layout-demo__sticky">Sticky mockup</div>
            <div className="layout-demo__steps">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}

        {layer === 'state' && (
          <div className="state-demo">
            {['Compose', 'Attach', 'Search', 'Answer', 'Sources'].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        )}

        {layer === 'motion' && (
          <div className="motion-demo">
            <span />
            <span />
            <span />
            <strong>opacity + transform</strong>
          </div>
        )}

        {layer === 'performance' && (
          <div className="performance-demo">
            <div>
              <span>transform: scaleX()</span>
              <strong>no layout shift</strong>
            </div>
            <i />
          </div>
        )}

        {layer === 'accessibility' && (
          <div className="a11y-demo">
            <button type="button">Focus visible</button>
            <p role="status">검색 중입니다. 결과를 준비하고 있습니다.</p>
            <span>Reduced motion ready</span>
          </div>
        )}
      </div>
      <p>{item.application}</p>
    </aside>
  );
}

function VisitedSiteCard({ site }) {
  return (
    <article className="visited-site-card">
      <div className="visited-site-card__head">
        <div>
          <span>{site.access}</span>
          <h3>{site.product}</h3>
        </div>
        <a href={site.href} target="_blank" rel="noreferrer">
          <span>Visit</span>
          <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
      {site.imageSrc && (
        <div className="visited-site-card__image">
          <img src={site.imageSrc} alt={`${site.product} interface capture`} />
        </div>
      )}
      <p>{site.summary}</p>
      <div className="site-lens-list">
        {site.lenses.map((lens) => (
          <div key={lens.label}>
            <strong>{lens.label}</strong>
            <span>{lens.note}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function ChatbotSiteAnalysisSection() {
  return (
    <section className="site-analysis-section" aria-labelledby="site-analysis-title">
      <div className="section-heading">
        <p>Visited Site Notes</p>
        <h2 id="site-analysis-title">Gemini 구조와 레이아웃 관찰</h2>
        <span>
          실제 Gemini 공개 화면과 공식 도움말을 기준으로, 기능명이 아니라 구조 · 레이아웃
          · 시간 · 글씨체 관점에서 다시 읽습니다.
        </span>
      </div>
      <div className="visited-site-grid">
        {visitedChatbotSites.map((site) => (
          <VisitedSiteCard key={site.product} site={site} />
        ))}
      </div>
    </section>
  );
}

function MeasurementProtocolSection() {
  return (
    <section className="measurement-section" aria-labelledby="measurement-title">
      <div className="section-heading">
        <p>{measurementProtocol.kicker}</p>
        <h2 id="measurement-title">{measurementProtocol.title}</h2>
        <span>{measurementProtocol.description}</span>
      </div>

      <div className="measurement-highlight-row" aria-label="발표 핵심 측정값">
        {measurementProtocol.readingHighlights.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.note}</p>
          </article>
        ))}
      </div>

      <div className="measurement-layout">
        <div className="measurement-copy">
          <div className="measurement-principles">
            {measurementProtocol.premise.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>

          <div className="measurement-glossary" aria-label="측정 용어를 쉽게 읽는 법">
            <div className="measurement-glossary__head">
              <span>Term map</span>
              <strong>0, 0.5, 1로 읽으면 쉽습니다</strong>
              <p>
                이 값들은 어려운 통계가 아니라 작업 영역 안에서 입력창이 어디에 있고,
                얼마나 넓은지 보는 눈금입니다.
              </p>
            </div>
            {measurementProtocol.metricGlossary.map((term) => (
              <article
                key={term.metric}
                className={`measurement-glossary-card measurement-glossary-card--${term.visual}`}
                style={{ '--marker': term.marker, '--fill': term.fill }}
              >
                <div className="measurement-glossary-card__visual" aria-hidden="true">
                  <span>
                    <i />
                    <b />
                  </span>
                </div>
                <div>
                  <span>{term.metric}</span>
                  <h3>{term.label}</h3>
                  <p>{term.plain}</p>
                  <small>{term.example}</small>
                </div>
              </article>
            ))}
          </div>

          <div className="measurement-target-grid">
            {measurementProtocol.targets.map((target) => (
              <article key={target.product} className="measurement-target-card">
                <div className="measurement-target-card__head">
                  <span>{target.page}</span>
                  <h3>{target.product}</h3>
                </div>
                <p>{target.selectorStrategy}</p>
                <ul>
                  {target.measurements.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} strokeWidth={2.1} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <small>{target.interpretation}</small>
              </article>
            ))}
          </div>

          <div className="measurement-output-grid" aria-label="측정 결과와 접근 상태">
            {measurementProtocol.outputExamples.map((item) => (
              <article key={item.product} className="measurement-output-card">
                <div>
                  <span>Measurement result</span>
                  <h3>{item.product}</h3>
                </div>
                <p>{item.reading}</p>
                <dl>
                  {item.values.map(([metric, value]) => (
                    <div key={metric}>
                      <dt>{metric}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>

        <aside className="measurement-script-card" aria-label="DOM 측정 스크립트">
          <div className="measurement-script-card__head">
            <span>Console probe</span>
            <strong>DOM rect + computed style</strong>
          </div>
          <pre>
            <code>{measurementProtocol.script}</code>
          </pre>
        </aside>
      </div>

      <div className="measurement-step-row">
        {measurementProtocol.steps.map((step) => (
          <article key={step.label}>
            <span>{step.label}</span>
            <strong>{step.value}</strong>
            <p>{step.note}</p>
          </article>
        ))}
      </div>

      <div className="measurement-range-table" aria-label="권장 측정값 범위">
        <div className="measurement-range-table__head">
          <span>Recommended range</span>
          <strong>어떤 값이 적당한가</strong>
        </div>
        {measurementProtocol.recommendedRanges.map((item) => (
          <article key={item.metric}>
            <span>{item.metric}</span>
            <strong>{item.good}</strong>
            <p>{item.conclusion}</p>
          </article>
        ))}
      </div>

      <p className="measurement-takeaway">{measurementProtocol.takeaway}</p>
    </section>
  );
}

function ReferencePattern({ item, isActive, onActivate }) {
  const Icon = item.icon;

  return (
    <article
      className={`pattern-card${isActive ? ' is-active' : ''}`}
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      <div className="pattern-card__meta">
        <span className="pattern-card__index">{item.index}</span>
        {item.product && <span>{item.product}</span>}
      </div>
      <div className="pattern-card__body">
        <Icon size={20} strokeWidth={2.1} aria-hidden="true" />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {item.takeaway && <small>{item.takeaway}</small>}
      </div>
    </article>
  );
}

function ScrollytellingElement({ item, isActive, onActivate, onDeactivate }) {
  const Icon = item.icon;

  return (
    <article
      className={`scrolly-card${isActive ? ' is-active' : ''}`}
      tabIndex={0}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
    >
      <div className="scrolly-card__head">
        <span>{item.index}</span>
        <strong>{item.label}</strong>
      </div>
      <div className="scrolly-card__icon" aria-hidden="true">
        <Icon size={18} strokeWidth={2.1} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <small>{item.analysis}</small>
    </article>
  );
}

function SequenceSpeedPreview({ option }) {
  const controls = ['01', '02', '03', '04'];
  const progress = (option.activeIndex + 1) / controls.length;

  return (
    <div
      className={`sequence-preview${option.recommended ? ' is-recommended' : ''}`}
      style={{ '--sequence-progress': progress }}
      aria-label={`${option.value} scroll sequence preview`}
    >
      <div className="sequence-preview__track" aria-hidden="true">
        <span />
      </div>
      <div className="sequence-preview__controls" aria-label="scroll sequence controls">
        {controls.map((item, index) => (
          <button
            key={item}
            type="button"
            className={`sequence-controls-btn${
              index === option.activeIndex ? ' is-active' : ''
            }`}
            aria-label={`${item}번째 장면`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="sequence-preview__state">
        <span>{option.tone}</span>
        <strong>{option.value}</strong>
      </div>
      <p>{option.effect}</p>
    </div>
  );
}

function TimingComparison({ options }) {
  const [isAdvanced, setIsAdvanced] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIsAdvanced((current) => !current);
    }, 1600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="timing-comparison" aria-label="duration visual comparison">
      <div className="timing-comparison__head">
        <span>Same trigger, different duration</span>
        <strong>눈으로 보는 120ms · 200ms · 320ms · 480ms · 640ms</strong>
      </div>
      <div className="timing-comparison__lanes">
        {options.map((item) => {
          const duration = Number.parseInt(item.value, 10);
          const snapshotWidth = `${Math.min(100, Math.round((200 / duration) * 100))}%`;

          return (
            <div
              key={item.value}
              className={`timing-lane${item.recommended ? ' is-recommended' : ''}`}
              style={{
                '--lane-duration': item.value,
                '--snapshot-width': snapshotWidth,
              }}
            >
              <div className="timing-lane__meta">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
              <div className="timing-lane__track" aria-hidden="true">
                <i className={isAdvanced ? 'is-forward' : ''} />
              </div>
              <div
                className={`timing-lane__toggle${isAdvanced ? ' is-forward' : ''}`}
                aria-hidden="true"
              >
                <span>01</span>
                <span>02</span>
                <i />
              </div>
            </div>
          );
        })}
      </div>
      <p>
        진한 점은 실제 반복 움직임이고, 연한 막대는 같은 200ms가 지났을 때 어디까지
        도달했는지를 뜻합니다. 120ms와 200ms는 이미 끝에 닿고, 320ms부터는 이동 과정이
        눈에 남습니다.
      </p>
    </div>
  );
}

function SpeedOptionCard({ item, isActive, onActivate }) {
  return (
    <article
      className={`speed-option-card${isActive ? ' is-active' : ''}${
        item.recommended ? ' is-recommended' : ''
      }`}
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
    >
      <div className="speed-option-card__head">
        <span>{item.value}</span>
        <strong>{item.label}</strong>
      </div>
      <p>{item.description}</p>
      {item.recommended && <small>추천값</small>}
    </article>
  );
}

function ScrollSequenceTimingSection() {
  const recommended =
    scrollSequenceTimingAnalysis.speedOptions.find((item) => item.recommended) ??
    scrollSequenceTimingAnalysis.speedOptions[0];
  const [activeSpeed, setActiveSpeed] = useState(recommended.value);
  const activeOption =
    scrollSequenceTimingAnalysis.speedOptions.find(
      (item) => item.value === activeSpeed,
    ) ?? recommended;

  return (
    <section className="sequence-timing-section" aria-labelledby="sequence-timing-title">
      <div className="section-heading">
        <p>{scrollSequenceTimingAnalysis.kicker}</p>
        <h2 id="sequence-timing-title">{scrollSequenceTimingAnalysis.title}</h2>
        <span>{scrollSequenceTimingAnalysis.description}</span>
      </div>

      <div className="sequence-timing-layout">
        <aside className="sequence-video-panel" aria-label="Chanel J12 scroll capture">
          <div className="sequence-video-panel__label">
            <span>{scrollSequenceTimingAnalysis.videoLabel}</span>
            <strong>unstable scroll → timing question</strong>
          </div>
          <video
            src={scrollSequenceTimingAnalysis.videoSrc}
            muted
            loop
            autoPlay
            playsInline
            controls
          />
        </aside>

        <div className="sequence-timing-content">
          <div className="sequence-observation-grid">
            {scrollSequenceTimingAnalysis.observations.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>

          <SequenceSpeedPreview option={activeOption} />

          <TimingComparison options={scrollSequenceTimingAnalysis.speedOptions} />

          <div className="speed-option-grid" aria-label="속도별 전환 예시">
            {scrollSequenceTimingAnalysis.speedOptions.map((item) => (
              <SpeedOptionCard
                key={item.value}
                item={item}
                isActive={item.value === activeOption.value}
                onActivate={() => setActiveSpeed(item.value)}
              />
            ))}
          </div>

          <div className="sequence-recommendation">
            <div>
              <span>visual transition</span>
              <strong>{scrollSequenceTimingAnalysis.recommendation.visualTransition}</strong>
            </div>
            <div>
              <span>minimum step interval</span>
              <strong>{scrollSequenceTimingAnalysis.recommendation.inputLock}</strong>
            </div>
            <div>
              <span>scroll threshold</span>
              <strong>{scrollSequenceTimingAnalysis.recommendation.threshold}</strong>
            </div>
            <p>{scrollSequenceTimingAnalysis.recommendation.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MuizzExampleCard({ item }) {
  const Icon = item.icon;

  return (
    <article className={`muizz-example-card muizz-example-card--${item.id}`}>
      <div className="muizz-example-card__media">
        <div className="muizz-example-card__label">
          <span>{item.label}</span>
          <Icon size={18} strokeWidth={2.1} aria-hidden="true" />
        </div>
        <video src={item.videoSrc} muted loop autoPlay playsInline controls />
      </div>
      <div className="muizz-example-card__body">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <small>{item.analysis}</small>
        <div className="muizz-spec-grid">
          {item.specs.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function MuizzInteractionSection() {
  return (
    <section className="muizz-section" aria-labelledby="muizz-title">
      <div className="section-heading">
        <p>{muizzInteractionExamples.kicker}</p>
        <h2 id="muizz-title">{muizzInteractionExamples.title}</h2>
        <span>{muizzInteractionExamples.description}</span>
      </div>

      <div className="muizz-example-grid">
        {muizzInteractionExamples.examples.map((item) => (
          <MuizzExampleCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function ProgressIndicatorAnalysis() {
  return (
    <section
      className="progress-analysis-section"
      aria-labelledby="progress-analysis-title"
    >
      <div className="section-heading">
        <p>Motion Detail</p>
        <h2 id="progress-analysis-title">{progressIndicatorAnalysis.title}</h2>
        <span>{progressIndicatorAnalysis.description}</span>
      </div>
      <div className="progress-analysis-layout">
        <div className="progress-demo-card">
          <div className="progress-demo-card__bar" aria-hidden="true">
            <span />
          </div>
          <h3>읽기 진행률은 작은 내비게이션입니다</h3>
          <p>
            사용자가 긴 발표 자료를 스크롤할 때, 상단의 진행률은 “지금
            어디쯤인지”를 계속 알려주는 조용한 피드백입니다.
          </p>
        </div>
        <div className="progress-anatomy-grid">
          {progressIndicatorAnalysis.anatomy.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </div>
      <ul className="progress-application-list">
        {progressIndicatorAnalysis.application.map((item) => (
          <li key={item}>
            <CheckCircle2 size={17} strokeWidth={2.1} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function BackupSlide({ slide }) {
  return (
    <section className="backup-slide">
      <p className="backup-slide__eyebrow">{slide.eyebrow}</p>
      <h2>{slide.title}</h2>
      <ul>
        {slide.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  const [hoveredScrolly, setHoveredScrolly] = useState('sticky');
  const [activeAnalysisLayer, setActiveAnalysisLayer] = useState('Time');
  const [activeReferenceIndex, setActiveReferenceIndex] = useState(0);
  const stepIds = useMemo(() => storySteps.map((step) => step.id), []);
  const activeStepId = useActiveStep(stepIds);
  const activeStep =
    storySteps.find((step) => step.id === activeStepId) ?? storySteps[0];
  const activeAnalysis =
    analysisLayers.find((item) => item.layer === activeAnalysisLayer) ??
    analysisLayers[0];
  const activeReference = referenceSections[activeReferenceIndex] ?? referenceSections[0];
  const ActiveIcon = iconMap[activeStep.id] ?? MessagesSquare;

  return (
    <main className="presentation-shell">
      <ScrollProgress />
      <ProgressRail steps={storySteps} activeStepId={activeStep.id} />

      <section className="intro-section" aria-labelledby="deck-title">
        <div className="intro-section__copy">
          <p className="study-label">Frontend Design / Motion Study</p>
          <h1 id="deck-title">
            좋은 웹을 느낌이 아니라
            <span>기준과 모션으로 읽기</span>
          </h1>
          <p>
            첫 스터디의 목적처럼 layout, typography, color, state, motion,
            performance, accessibility 관점으로 레퍼런스를 분해합니다. Gemini와 
            Copilot 같은 챗봇 UI를 조금 더 중점적으로 보았습니다.
          </p>
          <div className="intro-actions" aria-label="발표 빠른 이동">
            <a href="#story" className="primary-action">
              <MousePointer2 size={18} aria-hidden="true" />
              스터디 흐름 보기
            </a>
            <a href="#backup" className="secondary-action">
              <PanelRightOpen size={18} aria-hidden="true" />
              백업 보기
            </a>
          </div>
        </div>

        <div className="intro-section__visual" aria-label="발표 요약">
          <div className="study-board">
            <div className="study-board__header">
              <span>Study map</span>
              <strong>느낌 → 분석 기준 → 구현 단위 → 검증 기준</strong>
            </div>
            <div className="study-board__grid">
              {['Layout', 'Type', 'Color', 'State', 'Motion', 'Performance', 'A11y', 'Scroll'].map(
                (item) => (
                  <span key={item}>{item}</span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="story-section" aria-label="스크롤 발표">
        <aside className="story-sticky" aria-label="현재 분석 장면">
          <div className="context-card">
            <div className="context-card__head">
              <span aria-hidden="true">
                <ActiveIcon size={20} strokeWidth={2.2} />
              </span>
              <div>
                <p>{activeStep.kicker}</p>
                <h2>{activeStep.title}</h2>
              </div>
            </div>
            <p>{activeStep.summary}</p>
          </div>
          <ChatMockup state={activeStep.mockupState} />
        </aside>

        <div className="story-steps">
          {storySteps.map((step) => (
            <StoryStep
              key={step.id}
              step={step}
              isActive={step.id === activeStep.id}
            />
          ))}
        </div>
      </section>

      <ChatbotSiteAnalysisSection />

      <MeasurementProtocolSection />

      <section className="reference-section" aria-labelledby="reference-title">
        <div className="section-heading">
          <p>Reference Patterns</p>
          <h2 id="reference-title">Gemini · Copilot 분석 렌즈</h2>
          <span>
            실제 화면을 그대로 복제하지 않고, 구조 · 레이아웃 · 시간 · 글씨체를
            중심으로 챗봇 UI를 분석 가능한 UX 패턴으로 추상화합니다.
          </span>
        </div>
        <div className="reference-lab">
          <aside className="reference-preview" aria-label="분석 렌즈 예시 목업">
            <div className="reference-preview__label">
              <span>Lens preview</span>
              <strong>{activeReference.product}</strong>
            </div>
            <ChatMockup
              state={activeReference.mockupState ?? 'typing'}
              highlight={activeReference.highlight}
            />
          </aside>
          <div className="pattern-grid">
            {referenceSections.map((item, index) => (
              <ReferencePattern
                key={item.title}
                item={item}
                isActive={index === activeReferenceIndex}
                onActivate={() => setActiveReferenceIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="scrolly-elements-section" aria-labelledby="scrolly-elements-title">
        <div className="section-heading">
          <p>Scrollytelling Elements</p>
          <h2 id="scrolly-elements-title">분석하면 좋은 스크롤 장치</h2>
          <span>
            챗봇 UI는 상태 변화가 핵심이므로, 같은 목업을 고정하고 스크롤에
            따라 분석 지점을 하나씩 바꾸는 방식이 잘 맞습니다.
          </span>
        </div>
        <div className="scrolly-lab">
          <aside className="scrolly-preview" aria-label="스크롤 장치 hover 예시 목업">
            <div className="scrolly-preview__label">
              <span>Interactive preview</span>
              <strong>
                {scrollytellingElements.find(
                  (item) => item.highlight === hoveredScrolly,
                )?.label ?? 'Sticky mockup'}
              </strong>
            </div>
            <ChatMockup state="typing" highlight={hoveredScrolly} />
          </aside>
          <div className="scrolly-elements-grid">
            {scrollytellingElements.map((item) => (
              <ScrollytellingElement
                key={item.title}
                item={item}
                isActive={item.highlight === hoveredScrolly}
                onActivate={() => setHoveredScrolly(item.highlight)}
                onDeactivate={() => setHoveredScrolly('sticky')}
              />
            ))}
          </div>
        </div>
      </section>

      <ScrollSequenceTimingSection />

      <MuizzInteractionSection />

      <ProgressIndicatorAnalysis />

      <section className="analysis-section" aria-labelledby="analysis-title">
        <div className="section-heading">
          <p>Analysis Layers</p>
          <h2 id="analysis-title">시간 · 글씨체 · 색상 등으로 다시 읽기</h2>
          <span>
            챗봇 UI는 대화창 하나가 아니라 입력 도구, 정보 구조, 상태,
            모션 시간, 타이포그래피, 색상 대비가 연결된 시스템입니다.
          </span>
        </div>
        <div className="analysis-lab">
          <AnalysisExamplePreview item={activeAnalysis} />
          <div className="layer-grid">
            {analysisLayers.map((item) => (
              <LayerCard
                key={item.layer}
                item={item}
                isActive={item.layer === activeAnalysis.layer}
                onActivate={() => setActiveAnalysisLayer(item.layer)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="standards-section" aria-labelledby="standards-title">
        <div className="standards-section__copy">
          <p>Implementation Standards</p>
          <h2 id="standards-title">모션은 장식이 아니라 검증 가능한 규칙</h2>
          <span>
            발표의 결론은 스크롤 효과를 많이 넣는 것이 아닙니다. 상태를
            이해시키는 데 필요한 움직임만 남기고 성능과 접근성을 같이
            확인합니다.
          </span>
        </div>
        <div className="token-panel" aria-label="모션 토큰">
          {motionTokens.map((token) => (
            <div key={token.name} className="token-row">
              <span>{token.name}</span>
              <strong>{token.value}</strong>
              <small>{token.use}</small>
            </div>
          ))}
        </div>
        <div className="standards-checklist">
          <article>
            <Gauge size={20} strokeWidth={2.1} aria-hidden="true" />
            <h3>Performance</h3>
            <p>
              transform/opacity 중심, layout 변경 최소화, 무거운 영상보다 UI
              상태 전환 우선.
            </p>
          </article>
          <article>
            <Eye size={20} strokeWidth={2.1} aria-hidden="true" />
            <h3>Accessibility</h3>
            <p>
              reduced motion 대응, 색 외 상태 표현, focus-visible, 강제 대기
              없는 전환.
            </p>
          </article>
          <article>
            <LayoutDashboard size={20} strokeWidth={2.1} aria-hidden="true" />
            <h3>Reusable System</h3>
            <p>
              개별 장면이 아니라 입력, 로딩, 답변, 출처, 작업 전환 상태를
              컴포넌트 규칙으로 정리.
            </p>
          </article>
        </div>
      </section>

      <section className="sources-section" aria-labelledby="sources-title">
        <div>
          <p>Sources</p>
          <h2 id="sources-title">공개 레퍼런스</h2>
        </div>
        <div className="source-list">
          {sourceLinks.map((source) => (
            <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
              <span>{source.label}</span>
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section id="backup" className="backup-section" aria-labelledby="backup-title">
        <div className="section-heading">
          <p>Print Backup</p>
          <h2 id="backup-title">발표 환경 대비용 8장 요약</h2>
          <span>브라우저 인쇄 또는 PDF 저장 시 이 영역만 슬라이드처럼 사용할 수 있습니다.</span>
        </div>
        <div className="backup-deck">
          {backupSlides.map((slide) => (
            <BackupSlide key={slide.title} slide={slide} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
