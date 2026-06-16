import {
  ArrowDownToLine,
  BookOpenText,
  Bot,
  Check,
  CircleHelp,
  Clock3,
  FileText,
  Image,
  MessagesSquare,
  Mic,
  Paperclip,
  Send,
  SlidersHorizontal,
  Sparkles,
  UserRound,
} from 'lucide-react';
import { mockConversation } from '../data/storyContent.js';

const referenceExamples = [
  {
    name: 'ChatGPT',
    label: 'Files · Images · Tools · Canvas',
    text: '입력창 주변에서 파일, 이미지, 도구, 작업 캔버스가 시작됩니다.',
  },
  {
    name: 'Gemini',
    label: 'Upload · Google apps · Context',
    text: '업로드한 자료와 연결 앱이 질문의 맥락을 넓힙니다.',
  },
  {
    name: 'Copilot',
    label: 'Add content · Tools · Pages',
    text: '업무 자료와 작업 페이지가 답변 이후 흐름으로 이어집니다.',
  },
];

const stateCopy = {
  idle: {
    label: 'Compose',
    title: 'AI chat workspace',
    note: '입력창이 질문, 첨부, 도구 선택의 시작점',
  },
  typing: {
    label: 'Prompt',
    title: 'Composer as command center',
    note: '파일, 이미지, 모드 선택을 입력 가까이에 배치',
  },
  searching: {
    label: 'Search',
    title: '첨부와 맥락을 확인 중',
    note: '검색, 읽기, 생성 상태를 분리해 표시',
  },
  cited: {
    label: 'Sources',
    title: '답변과 출처를 함께 제공',
    note: 'citation-first 구조로 답변 신뢰를 보강',
  },
  handoff: {
    label: 'Canvas',
    title: '답변을 작업 화면으로 전환',
    note: '긴 결과는 별도 패널에서 읽고 편집',
  },
  insight: {
    label: 'Insight',
    title: '반복 질문이 운영 개선으로 연결',
    note: '대화 기록을 지식 개선 피드백으로 활용',
  },
};

function StatusPill({ state }) {
  const item = stateCopy[state] ?? stateCopy.idle;

  return (
    <div className={`mock-status mock-status--${state}`}>
      <span aria-hidden="true" />
      <strong>{item.label}</strong>
    </div>
  );
}

function SourceList({ active }) {
  return (
    <div className={`source-stack${active ? ' is-active' : ''}`}>
      {mockConversation.sources.map((source, index) => (
        <button key={source} type="button" className="source-chip">
          <FileText size={15} strokeWidth={2.1} aria-hidden="true" />
          <span>{source}</span>
          {index === 0 && <Check size={14} strokeWidth={2.2} aria-hidden="true" />}
        </button>
      ))}
    </div>
  );
}

function SearchingState() {
  return (
    <div className="searching-state" role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      <div>
        <strong>첨부와 대화 맥락을 확인하고 있습니다</strong>
        <p>파일, 웹 결과, 최근 대화에서 답변 후보를 찾는 중</p>
      </div>
    </div>
  );
}

function ReferenceCarousel() {
  return (
    <div className="reference-carousel" aria-label="GPT, Gemini, Copilot UI 예시">
      {referenceExamples.map((item, index) => (
        <article
          key={item.name}
          className="reference-carousel__item"
          style={{ '--delay-index': index }}
        >
          <div>
            <span>{item.name}</span>
            <strong>{item.label}</strong>
          </div>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function StateMorphStrip() {
  return (
    <div className="state-morph-strip" aria-label="상태 전환 예시">
      {['Compose', 'Search', 'Answer', 'Sources'].map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ReducedMotionNote() {
  return (
    <div className="reduced-motion-note" role="status">
      <strong>Reduced motion</strong>
      <span>움직임을 줄여도 상태 문구와 배치로 의미를 유지</span>
    </div>
  );
}

function InsightPanel({ visible }) {
  return (
    <aside className={`insight-panel${visible ? ' is-visible' : ''}`}>
      <header>
        <Sparkles size={17} strokeWidth={2.1} aria-hidden="true" />
        <span>Usage Insight</span>
      </header>
      <div className="insight-meter">
        <span style={{ '--value': '72%' }} />
      </div>
      <p>반복 요청 18건: 표 정리와 원문 근거 확인이 자주 함께 요청됨</p>
    </aside>
  );
}

export function ChatMockup({ state, highlight }) {
  const item = stateCopy[state] ?? stateCopy.idle;
  const highlightClass = highlight ? ` chat-mockup--highlight-${highlight}` : '';
  const showQuestion = ['typing', 'searching', 'cited', 'handoff', 'insight'].includes(
    state,
  );
  const showSearch = state === 'searching';
  const showReferenceExamples = state === 'typing';
  const showAnswer = ['cited', 'handoff', 'insight'].includes(state);
  const showCanvas = ['handoff', 'insight'].includes(state);
  const showInsight = state === 'insight';

  return (
    <section
      className={`chat-mockup chat-mockup--${state}${highlightClass}`}
      aria-label="분석용 채팅 UI 목업"
      data-highlight={highlight ?? ''}
    >
      <header className="chat-mockup__header">
        <div className="mock-avatar" aria-hidden="true">
          <Bot size={20} strokeWidth={2.2} />
        </div>
        <div>
          <p>{item.title}</p>
          <span>{item.note}</span>
        </div>
        <StatusPill state={state} />
      </header>

      <div className="mock-progress-preview" aria-hidden="true">
        <span />
      </div>

      <div className="chat-mockup__body">
        <div className="mock-sidebar" aria-label="운영 상태 패널">
          <button type="button" className="mock-tab is-active" aria-label="Conversations">
            <MessagesSquare size={16} aria-hidden="true" />
          </button>
          <button type="button" className="mock-tab" aria-label="Knowledge">
            <BookOpenText size={16} aria-hidden="true" />
          </button>
          <button type="button" className="mock-tab" aria-label="Help">
            <CircleHelp size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="conversation-pane">
          <div className="system-card">
            <Clock3 size={15} strokeWidth={2.1} aria-hidden="true" />
            <span>첨부 자료, 선택한 도구, 최근 대화 맥락을 함께 확인합니다.</span>
          </div>

          {showReferenceExamples && <ReferenceCarousel />}

          <div className="suggestion-row" aria-label="추천 질문">
            <button type="button">표로 정리</button>
            <button type="button">원문 근거 보기</button>
            <button type="button">후속 질문</button>
          </div>

          {showQuestion && (
            <div className="message-row message-row--user">
              <div className="message-bubble message-bubble--user">
                {state === 'typing' ? (
                  <span className="typing-text">회의 녹취를 요약하고 액션 아이템을...</span>
                ) : (
                  mockConversation.user
                )}
              </div>
              <span className="message-avatar" aria-hidden="true">
                <UserRound size={16} strokeWidth={2.1} />
              </span>
            </div>
          )}

          {showSearch && <SearchingState />}

          {highlight === 'morph' && <StateMorphStrip />}

          {highlight === 'reduced' && <ReducedMotionNote />}

          {showAnswer && (
            <div className="message-row message-row--bot">
              <span className="message-avatar" aria-hidden="true">
                <Bot size={16} strokeWidth={2.1} />
              </span>
              <div className="message-bubble message-bubble--bot">
                <p>{mockConversation.answer}</p>
                <SourceList active={state === 'cited' || state === 'insight'} />
                <div className="message-actions">
                  <button type="button">
                    <BookOpenText size={15} aria-hidden="true" />
                    원문 보기
                  </button>
                  <button type="button">
                    <ArrowDownToLine size={15} aria-hidden="true" />
                    다운로드
                  </button>
                  <button type="button">
                    <Sparkles size={15} aria-hidden="true" />
                    노트로 열기
                  </button>
                </div>
              </div>
            </div>
          )}

          {showCanvas && (
            <div className="handoff-card" role="status">
              <span aria-hidden="true">
                <BookOpenText size={16} strokeWidth={2.1} />
              </span>
              <div>
                <strong>답변을 학습 노트로 열 수 있도록 정리했습니다.</strong>
                <p>요약, 표, 원문 근거를 작업 패널로 전환</p>
              </div>
            </div>
          )}
        </div>

        <InsightPanel visible={showInsight} />
      </div>

      <footer className="composer-bar">
        <div className="composer-shell">
          <TextCursorInputLabel />
          <div className="composer-tools" aria-label="입력 도구">
            <button type="button" aria-label="Attach file" title="Attach file">
              <Paperclip size={16} strokeWidth={2.1} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Add image" title="Add image">
              <Image size={16} strokeWidth={2.1} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Voice input" title="Voice input">
              <Mic size={16} strokeWidth={2.1} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Choose tools" title="Choose tools">
              <SlidersHorizontal size={16} strokeWidth={2.1} aria-hidden="true" />
            </button>
          </div>
        </div>
        <button type="button" className="send-button" aria-label="Send sample message">
          <Send size={17} strokeWidth={2.2} aria-hidden="true" />
        </button>
      </footer>
    </section>
  );
}

function TextCursorInputLabel() {
  return (
    <div className="composer-label">
      <span>Ask anything, attach files, or choose a tool</span>
    </div>
  );
}
