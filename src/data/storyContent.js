import {
  Clock3,
  Gauge,
  Layers3,
  MousePointerClick,
  NotebookTabs,
  Palette,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Type,
  Waypoints,
} from 'lucide-react';

export const storySteps = [
  {
    id: 'context',
    kicker: '01 / Study purpose',
    title: '챗봇 UI를 소재로 scrollytelling을 실험합니다',
    summary:
      '이번 발표의 목적은 PPT의 첫 스터디 방향처럼 좋은 웹을 느낌이 아니라 레이아웃, 타이포그래피, 상태, 모션, 성능, 접근성 언어로 분해해 보는 것입니다.',
    mockupState: 'idle',
    body:
      '이번 회차에서는 Gemini, Copilot 같은 챗봇 UI를 조금 더 중점적으로 보았습니다. 핵심은 챗봇 개선안을 제안하는 것이 아니라 “좋아 보입니다”를 구조, 레이아웃, 시간, 글씨체, 색상, 상태, 모션으로 나누고, 그 내용을 sticky mockup, scroll progress, active step, hover preview, speed comparison 같은 scrollytelling 장치로 전달하는 방식입니다.',
    points: [
      '주제는 frontend motion study이고, 챗봇 UI는 그 기준을 적용해 볼 분석 소재입니다.',
      'PPT 대신 웹 페이지를 쓰면 스크롤, hover, 상태 전환, 속도 비교를 발표 안에서 직접 보여줄 수 있습니다.',
      '목표는 좋은 레퍼런스를 해체하고, starter token과 구현 검증 기준으로 다시 정리하는 방법을 공유하는 것입니다.',
    ],
  },
  {
    id: 'references',
    kicker: '02 / Reference set',
    title: 'Gemini · Copilot을 분석 렌즈로 봅니다',
    summary:
      '챗봇 UI는 브랜드와 기능명보다 구조, 레이아웃, 시간, 글씨체의 차이로 보는 편이 motion study 목적에 더 잘 맞습니다.',
    mockupState: 'typing',
    body:
      'Gemini와 Copilot을 볼 때는 “어떤 기능이 있나”보다 “질문 전후의 구조가 어떻게 이어지는가”, “입력창과 답변이 어떤 레이아웃 관계를 갖는가”, “대기와 전환 시간이 어떻게 설명되는가”, “본문과 상태 문구가 어떤 글씨 위계로 나뉘는가”를 봅니다. 그래야 스크롤 발표에서 어떤 요소를 어떤 순서로 보여줄지 정할 수 있습니다.',
    points: [
      '구조: 입력 → 맥락 추가 → 응답 생성 → 출처/후속 행동으로 이어지는 흐름을 봅니다.',
      '레이아웃: 중앙 대화 영역, 하단 composer, 보조 도구/출처/작업 패널의 위치 관계를 봅니다.',
      '시간과 글씨체: 클릭 직후 피드백, 검색/생성 상태, 답변 reveal, 본문/label/chip의 위계를 봅니다.',
    ],
  },
  {
    id: 'common',
    kicker: '03 / Common UI elements',
    title: '분석 소재를 UI 단위로 분해',
    summary:
      '챗봇의 공통 요소는 composer, capability chips, answer card, state feedback, follow-up prompt로 정리할 수 있습니다.',
    mockupState: 'searching',
    body:
      'PPT의 analysis layers처럼 한 번에 모든 내용을 말하지 않으려면 분석 대상을 작은 단위로 쪼개야 합니다. 챗봇 UI는 질문 전 composer, 응답 중 상태 피드백, 응답 후 action button과 follow-up prompt처럼 단계가 분명해서 스크롤 장면으로 나누기 좋습니다.',
    points: [
      '질문 전: placeholder, 추천 질문, 첨부/도구 버튼이 입력 의도를 만듭니다.',
      '답변 중: typing, searching, generating 같은 상태가 기다림을 설명합니다.',
      '답변 후: action button과 follow-up prompt가 대화를 다음 작업으로 넘깁니다.',
    ],
  },
  {
    id: 'scrolly',
    kicker: '04 / Scrollytelling reading',
    title: '분석에 어울리는 scrollytelling 요소',
    summary:
      '챗봇 UI 분석은 스크롤에 따라 한 요소씩 드러나는 방식과 잘 맞습니다. 같은 목업을 고정하고 상태만 바꾸면 구조가 선명해집니다.',
    mockupState: 'cited',
    body:
      'scrollytelling은 “한 번에 다 보여주기”보다 “지금 봐야 할 UI 요소만 강조하기”에 강합니다. sticky mockup, scroll progress, 현재 항목 강조, card reveal, state morphing을 사용하면 분석 내용을 단계별 장면으로 나누고, 발표자가 말하는 순서와 화면 변화의 순서를 맞출 수 있습니다.',
    points: [
      'sticky mockup: 같은 화면을 유지해 변화 지점만 보이게 합니다.',
      'scroll progress: 긴 대화에서 현재 어느 정도 읽었고 남은 흐름이 얼마나 되는지 조용하게 알려줍니다.',
      '현재 항목 강조: 스크롤 중 지금 설명하는 카드나 문단만 선명하게 만들고, 나머지는 살짝 낮춰 사용자의 시선을 잃지 않게 합니다.',
    ],
  },
  {
    id: 'visual',
    kicker: '05 / Visual grammar',
    title: '시간 · 글씨체 · 색상으로 분석',
    summary:
      '좋아 보이는 인상은 시간 값, 글씨 크기, 여백, 색상 대비, 상태 표현이 함께 만듭니다.',
    mockupState: 'handoff',
    body:
      '스터디에서 확인하려는 것은 “예쁘다/별로다”의 감상이 아니라 어떤 시간 값, 글씨 위계, 색상 제한이 설명을 더 잘 읽히게 만드는지입니다. 버튼 반응은 몇 ms일 때 빠르게 느껴지는지, 답변 본문과 상태 문구는 어떤 크기와 굵기로 구분되는지, 파란색 같은 강조색은 어떤 순간에만 등장해야 집중이 생기는지 예시와 함께 봅니다.',
    points: [
      '시간: hover는 120ms 안팎으로 즉시 반응하고, step 전환은 200ms로 현재 위치를 알려주며, answer reveal은 320ms 정도로 읽기 흐름을 방해하지 않게 합니다.',
      '글씨체: headline은 주제를 잡고, body는 오래 읽히는 답변을 담당하며, label과 chip text는 상태와 행동을 짧게 구분합니다.',
      '색상: 넓은 면은 흰색과 회색 계열로 조용하게 두고, 핵심 action, active state, progress 같은 순간에만 blue accent를 써서 시선을 모읍니다.',
    ],
  },
  {
    id: 'standards',
    kicker: '06 / Build standards',
    title: '발표에서 검증할 기준',
    summary:
      '모션은 장식이 아니라 feedback, continuity, hierarchy를 설명하는 규칙으로 관리합니다.',
    mockupState: 'insight',
    body:
      '발표의 결론은 더 화려한 효과가 아니라, 스크롤 발표가 읽히도록 상태와 시선을 관리하는 규칙입니다. 사용자가 입력했는지, 시스템이 검색 중인지, 답변이 완성됐는지, 다음 행동을 어디서 해야 하는지 작은 모션으로 설명하되, 그 모션이 스크롤 성능과 접근성을 해치지 않는지도 함께 검증합니다.',
    points: [
      'opacity, transform, border/highlight 중심으로 움직여 layout shift를 만들지 않고, 사용자의 시선을 필요한 곳으로만 옮깁니다.',
      'prefers-reduced-motion에서는 typing cursor, slide, spinner를 줄여도 상태 문구와 배치만으로 의미가 남아야 합니다.',
      'scroll progress는 width를 계속 바꾸는 대신 transform: scaleX()로 처리해 긴 대화 스크롤 중에도 가볍게 유지합니다.',
    ],
  },
];

export const visitedChatbotSites = [
  {
    product: 'Gemini',
    href: 'https://gemini.google.com/',
    imageSrc: '/media/gemini.png',
    access: '공개 화면 직접 접근 · 공식 도움말 보완',
    summary:
      '2026-06-16 비로그인 공개 화면에서 “Meet Gemini” headline, prompt 입력창, 모델 chip, Sign in CTA를 확인했습니다. 파일 업로드, Submit, side panel/recent chat 같은 앱 내부 흐름은 Google 공식 도움말로 보완해 분석합니다.',
    lenses: [
      {
        label: 'Structure',
        note: '공개 화면은 질문 입력을 먼저 열어 두고, 도움말 기준 실제 앱은 Add files, Google Workspace 연결, @ 앱 지정처럼 맥락을 붙이는 흐름을 제공합니다.',
      },
      {
        label: 'Layout',
        note: '공개 화면에서는 중앙 headline과 composer가 한 덩어리로 보입니다. 최근 대화와 side panel 흐름은 공식 도움말 기준으로 보완해 읽습니다.',
      },
      {
        label: 'Time',
        note: 'prompt 작성, 파일 추가, 앱 연결, Submit처럼 행동 단계가 나뉩니다. 사용자는 지금 입력 중인지, 연결이 필요한지, 제출 단계인지 알 수 있어야 합니다.',
      },
      {
        label: 'Typography',
        note: '공개 화면의 headline은 짧고 크며, 실제 작업 흐름에서는 text box, Add files, Submit 같은 기능어가 행동을 명확하게 구분합니다.',
      },
    ],
  },
];

export const measurementProtocol = {
  title: '측정값으로 여백과 집중 위치를 판단합니다',
  kicker: 'Measurement Protocol · ChatGPT + Gemini',
  description:
    '내부 React 소스코드를 그대로 읽는 방식은 공개 범위와 번들 난독화 때문에 근거가 불안정합니다. 그래서 로그인된 브라우저에서 실제 렌더링 DOM의 composer, main pane, computed style을 여러 화면 폭으로 측정했습니다. 평균값은 ChatGPT와 Gemini의 배치 성향을 비교하는 기준으로 쓰고, 개별값은 화면 폭에 따라 어떻게 달라지는지 보여줍니다.',
  premise: [
    {
      label: '소스코드 직접 분석의 한계',
      value: 'private app code',
      note: '서비스 내부 컴포넌트명과 CSS class는 공개 API가 아니며, 배포 시점마다 hashed class와 bundle 구조가 달라질 수 있습니다.',
    },
    {
      label: '측정 기준',
      value: 'rendered DOM',
      note: '눈대중 캡처 좌표가 아니라 getBoundingClientRect()와 getComputedStyle()로 브라우저가 계산한 실제 값을 봅니다.',
    },
    {
      label: '비교 단위',
      value: 'ratio, not screenshot px',
      note: '절대 x/y보다 main pane 기준 center ratio, composer width ratio, max-width, margin, display 값을 기록합니다.',
    },
  ],
  readingHighlights: [
    {
      label: '가로 중심',
      value: '평균 0.418 · 0.521',
      note: 'Gemini는 작업 영역 중앙에 가깝고, GPT는 main pane 안에서 왼쪽 시작점이 더 강하게 측정됐습니다.',
    },
    {
      label: '세로 위치',
      value: '평균 0.415 · 0.500',
      note: '두 값 모두 첫 질문을 시작하기에 과하게 아래로 밀리지 않은 위치입니다. Gemini는 화면 중앙에 더 가깝습니다.',
    },
    {
      label: '입력창 폭',
      value: '평균 455px · 660px',
      note: 'GPT는 화면 폭에 따라 375-524px로 바뀌고, Gemini는 660px 고정 폭이 뚜렷합니다.',
    },
    {
      label: '폭 비율',
      value: '평균 46.1% · 54.5%',
      note: '두 평균 모두 권장 범위 안에 들어옵니다. 작은 폭에서는 Gemini 68.4%, GPT 56.3%처럼 높아질 수 있습니다.',
    },
  ],
  metricGlossary: [
    {
      metric: 'centerXRatio',
      label: '가로 중심 위치',
      plain:
        '작업 영역의 왼쪽 끝을 0, 오른쪽 끝을 1로 봤을 때 입력창의 중심이 어디에 있는지 보는 값입니다.',
      example:
        '0.50이면 정확히 가운데입니다. 0.40이면 왼쪽으로, 0.60이면 오른쪽으로 치우친 상태입니다.',
      visual: 'x',
      marker: '50%',
      fill: '16%',
    },
    {
      metric: 'centerYRatio',
      label: '세로 시작점',
      plain:
        '작업 영역의 위쪽 끝을 0, 아래쪽 끝을 1로 봤을 때 입력창 중심이 얼마나 내려와 있는지 보는 값입니다.',
      example:
        '0.45는 화면 중앙보다 살짝 위라 첫 질문을 시작하기 좋고, 0.70은 너무 아래라 시작점이 늦게 보입니다.',
      visual: 'y',
      marker: '46%',
      fill: '16%',
    },
    {
      metric: 'widthRatio',
      label: '입력창 폭 비율',
      plain:
        '입력창이 작업 영역 전체 폭의 몇 %를 차지하는지 보는 값입니다.',
      example:
        '0.50이면 입력창 폭이 작업 영역의 절반이라는 뜻입니다. 0.70이면 너무 넓고, 0.30이면 너무 약하게 보입니다.',
      visual: 'width',
      marker: '50%',
      fill: '50%',
    },
    {
      metric: 'composerWidth',
      label: '입력창 실제 폭',
      plain:
        '비율과 별개로 브라우저가 실제로 계산한 입력창의 px 폭입니다.',
      example:
        '이번 실측에서는 GPT 평균 455px, Gemini 평균 660px입니다. 같은 입력창이라도 서비스별 폭 제한이 다르게 나타납니다.',
      visual: 'px',
      marker: '74%',
      fill: '64%',
    },
    {
      metric: 'marginLeft / marginRight',
      label: '좌우 여백 균형',
      plain:
        '입력창 왼쪽과 오른쪽에 남는 빈 공간이 균형을 이루는지 보는 값입니다.',
      example:
        '양쪽 여백이 비슷하면 입력창은 중심으로 보입니다. 단, sidebar가 있으면 화면 전체가 아니라 main pane 기준으로 비교합니다.',
      visual: 'margin',
      marker: '50%',
      fill: '44%',
    },
  ],
  targets: [
    {
      product: 'ChatGPT',
      page: 'chatgpt.com',
      selectorStrategy:
        'textarea, rich-textarea, [contenteditable="true"] 후보를 찾고, 실제 입력창을 감싸는 상위 composer 컨테이너를 기준으로 측정합니다.',
      measurements: [
        '로그인 화면 기준 composer rect',
        'main pane 기준 centerX / centerY 비율',
        'main pane 대비 composer width 비율',
        'display, position, max-width, margin-left/right',
      ],
      interpretation:
        '954/955 중복 폭은 955를 대표값으로 보고, 1281/1441/1517 폭과 함께 평균을 냈습니다. 평균 centerYRatio 0.415는 첫 질문 시작점으로 안정적이고, 평균 widthRatio 0.461은 권장 범위 안에 들어옵니다.',
    },
    {
      product: 'Gemini',
      page: 'gemini.google.com',
      selectorStrategy:
        'textarea, rich-textarea, [contenteditable="true"], form 후보를 찾고, 실제 질문 입력 영역과 그 상위 컨테이너를 함께 측정합니다.',
      measurements: [
        'main pane 기준 composer centerX / centerY 비율',
        'composer width와 max-width 제한',
        '입력창 주변의 vertical gap과 headline-composer 거리',
        'left rail 또는 side panel이 열린 상태와 닫힌 상태의 usable pane 변화',
      ],
      interpretation:
        'Gemini는 중앙 composer 상태인 965/1280/1517 폭을 평균냈습니다. 평균 centerXRatio 0.521, centerYRatio 0.500, widthRatio 0.545로 입력창이 작업 영역 중앙에 가깝게 배치됩니다.',
    },
  ],
  outputExamples: [
    {
      product: 'ChatGPT',
      reading:
        '사용자가 로그인한 브라우저에서 console.table로 측정한 실제값입니다. 954/955 중복 폭은 955를 대표값으로 쓰고, 4개 폭의 평균을 함께 계산했습니다.',
      values: [
        ['평균', 'centerX 0.418 · centerY 0.415 · width 0.461 · 455px'],
        ['955 x 828', 'centerX 0.382 · centerY 0.415 · width 0.563 · 375px'],
        ['1281 x 828', 'centerX 0.421 · centerY 0.415 · width 0.399 · 396px'],
        ['1441 x 828', 'centerX 0.432 · centerY 0.415 · width 0.454 · 524px'],
        ['1517 x 828', 'centerX 0.436 · centerY 0.415 · width 0.426 · 524px'],
      ],
    },
    {
      product: 'Gemini',
      reading:
        '사용자가 로그인한 브라우저에서 console.table로 측정한 실제값입니다. 중앙 composer 상태만 평균에 넣고, 하단 고정 composer로 찍힌 954px 값은 상태가 달라 제외했습니다.',
      values: [
        ['평균', 'centerX 0.521 · centerY 0.500 · width 0.545 · 660px'],
        ['965 x 828', 'centerX 0.527 · centerY 0.500 · width 0.684 · 660px'],
        ['1280 x 828', 'centerX 0.520 · centerY 0.500 · width 0.516 · 660px'],
        ['1517 x 828', 'centerX 0.517 · centerY 0.500 · width 0.435 · 660px'],
        ['제외', '954 x 828은 하단 composer 상태라 centerY 0.932로 측정'],
      ],
    },
  ],
  recommendedRanges: [
    {
      metric: 'centerXRatio',
      good: '0.42-0.52',
      conclusion:
        'Gemini처럼 0.5 근처면 명확한 중앙 시작점으로 읽힙니다. GPT 평균 0.418처럼 0.4 초반이면 좌측 탐색 영역을 둔 화면에서 왼쪽 시작점이 강한 배치로 해석합니다.',
    },
    {
      metric: 'centerYRatio',
      good: '0.41-0.50',
      conclusion:
        '첫 질문을 시작하는 화면에서는 정중앙보다 살짝 위부터 중앙까지가 좋습니다. 이번 평균에서 GPT 0.415, Gemini 0.500으로 둘 다 시작점이 늦게 보이지 않습니다.',
    },
    {
      metric: 'widthRatio',
      good: '평균 0.46-0.55',
      conclusion:
        '입력창이 작업 영역의 38-55% 정도를 차지할 때 양쪽 여백과 시작점이 균형을 이룹니다. 평균 기준 GPT 0.461, Gemini 0.545로 둘 다 범위 안에 있지만, 작은 폭에서는 비율이 높아집니다.',
    },
    {
      metric: 'composerWidth',
      good: '455-660px 실측',
      conclusion:
        '이번 로그인 화면 평균은 GPT 455px, Gemini 660px입니다. Gemini는 고정 폭을 유지하고, GPT는 화면 폭에 따라 375px에서 524px까지 변합니다.',
    },
    {
      metric: 'marginLeft / marginRight',
      good: 'auto 또는 균형 차이 5% 이내',
      conclusion:
        '좌우 여백이 비슷해야 composer가 작업 영역의 중심으로 읽힙니다. 단, sidebar가 있으면 viewport가 아니라 main pane 기준으로 봐야 합니다.',
    },
  ],
  steps: [
    {
      label: 'Viewport set',
      value: '955-1517px',
      note: '100% zoom에서 여러 폭을 반복 측정해 한 캡처의 우연한 좌표가 아니라 유지되는 레이아웃 규칙을 찾습니다.',
    },
    {
      label: 'Open state',
      value: 'same login / panel state',
      note: '로그인 여부, side panel open/close, 브라우저 zoom이 다르면 수치가 바뀌므로 측정 상태를 같이 기록합니다.',
    },
    {
      label: 'Record',
      value: 'DOM rect + computed CSS',
      note: 'composer, main pane, sidebar의 rect와 computed style을 표로 남기고, px값보다 비율과 제약 조건을 해석합니다.',
    },
  ],
  script: `function findComposer() {
  const editable = document.querySelector(
    'textarea, rich-textarea, [contenteditable="true"]'
  );

  if (!editable) return null;

  let node = editable;
  let best = editable;

  for (let i = 0; i < 6 && node.parentElement; i += 1) {
    node = node.parentElement;
    const rect = node.getBoundingClientRect();
    const bestRect = best.getBoundingClientRect();

    if (
      rect.width >= bestRect.width &&
      rect.height >= bestRect.height &&
      rect.height <= 260
    ) {
      best = node;
    }
  }

  return best;
}

const composer = findComposer();
const main = composer?.closest('main') || document.querySelector('main') || document.body;
const c = composer.getBoundingClientRect();
const m = main.getBoundingClientRect();
const cs = getComputedStyle(composer);

console.table({
  viewport: \`\${window.innerWidth} x \${window.innerHeight}\`,
  composerWidth: Math.round(c.width),
  composerHeight: Math.round(c.height),
  composerTop: Math.round(c.top),
  composerLeft: Math.round(c.left),
  mainWidth: Math.round(m.width),
  mainHeight: Math.round(m.height),
  centerXRatio: +(((c.left + c.width / 2) - m.left) / m.width).toFixed(3),
  centerYRatio: +(((c.top + c.height / 2) - m.top) / m.height).toFixed(3),
  widthRatio: +(c.width / m.width).toFixed(3),
  display: cs.display,
  position: cs.position,
  maxWidth: cs.maxWidth,
  marginLeft: cs.marginLeft,
  marginRight: cs.marginRight,
});`,
  takeaway:
    '결론은 단순합니다. 좋은 챗봇 첫 화면은 입력창을 화면 한가운데에 “그냥” 놓지 않습니다. 실제 로그인 화면 평균을 보면 GPT는 centerYRatio 0.415로 살짝 위에서 시작하고, Gemini는 centerXRatio 0.521 / centerYRatio 0.500으로 중앙성을 강하게 잡습니다. 평균 widthRatio는 GPT 0.461, Gemini 0.545라 입력창이 작업 영역의 절반 안팎을 차지할 때 여백과 시작점이 가장 안정적으로 읽힙니다.',
};

export const referenceSections = [
  {
    index: '01',
    product: 'Structure',
    highlight: 'composer',
    mockupState: 'typing',
    icon: Layers3,
    title: '입력 → 맥락 → 응답 → 행동 구조',
    description:
      'Gemini의 업로드와 Google 앱 연결, Copilot의 Add content와 Pages는 모두 질문 전에 맥락을 붙이고 답변 후 행동으로 넘기는 구조를 만듭니다.',
    takeaway:
      '분석 포인트: 챗봇은 대화창 하나가 아니라 입력, 맥락, 응답, 근거, 후속 행동이 이어지는 작업 구조입니다.',
  },
  {
    index: '02',
    product: 'Layout',
    highlight: 'tools',
    mockupState: 'insight',
    icon: NotebookTabs,
    title: '대화 중앙, 도구는 주변에 둡니다',
    description:
      '관찰한 챗봇 UI는 읽어야 할 대화를 중앙에 두고, composer는 하단에 고정하며, 첨부·도구·출처·작업 전환은 주변에 배치합니다. 사용자는 본문을 읽다가 짧은 거리 안에서 다음 행동으로 이동합니다.',
    takeaway:
      '분석 포인트: 레이아웃은 말풍선 모양보다 “읽기 영역, 입력 영역, 보조 작업 영역이 얼마나 잘 분리되는가”가 중요합니다.',
  },
  {
    index: '03',
    product: 'Time',
    highlight: 'state',
    mockupState: 'searching',
    icon: Clock3,
    title: '대기 시간을 상태로 쪼갭니다',
    description:
      '전송 직후 반응, 검색 중, 생성 중, 출처 확인, 답변 완료가 한 덩어리 로딩으로 보이면 불안합니다. Gemini와 Copilot의 좋은 지점은 기다림을 작은 상태 문구와 움직임으로 나누어 설명하는 방식에 있습니다.',
    takeaway:
      '분석 포인트: 120ms는 즉시 피드백, 200ms는 현재 위치 전환, 320ms는 답변 reveal, 480ms는 큰 순번 전환처럼 역할별 시간 값을 분리합니다.',
  },
  {
    index: '04',
    product: 'Typography',
    highlight: 'answer',
    mockupState: 'cited',
    icon: Type,
    title: '본문, 상태, 행동 글씨가 다릅니다',
    description:
      '챗봇 화면은 긴 답변 본문, 짧은 상태 label, 출처 chip, 버튼 text가 한 화면에 섞입니다. 본문은 오래 읽히게, label은 빠르게 식별되게, chip은 행동 단위로 보이게 크기와 굵기를 나눠야 합니다.',
    takeaway:
      '분석 포인트: 글씨체 분석은 “무슨 폰트를 썼나”보다 headline, body, label, chip text의 역할과 위계를 보는 것입니다.',
  },
];

export const scrollytellingElements = [
  {
    index: '01',
    label: 'Sticky mockup',
    highlight: 'sticky',
    icon: Layers3,
    title: '고정된 화면에서 상태만 바꾸기',
    description:
      '동일한 챗봇 목업을 왼쪽에 고정하고 스크롤 단계마다 composer, 검색, 답변, 후속 질문 상태를 바꿉니다.',
    analysis:
      '비교 대상이 흔들리지 않아 “무엇이 바뀌었는지”만 보입니다. 하나의 레퍼런스를 단계별 장면으로 나누어 설명하기에 좋습니다.',
  },
  {
    index: '02',
    label: 'Progress bar',
    highlight: 'progress',
    icon: Gauge,
    title: '읽기 위치를 3px 선으로 표시',
    description:
      '상단 progress-container 안의 progress-bar를 transform: scaleX()로 채워 긴 대화 안에서 현재 읽고 있는 위치를 보여줍니다.',
    analysis:
      '긴 답변이나 긴 대화 로그에서 방향 감각을 줍니다. 단, AI 응답 생성률로 오해되지 않게 읽기 진행률로만 사용합니다.',
  },
  {
    index: '03',
    label: 'Current item',
    highlight: 'active',
    icon: Sparkles,
    title: '현재 설명 중인 항목만 강조',
    description:
      'IntersectionObserver로 현재 화면에 들어온 섹션을 감지하고, 해당 카드나 문단의 border, opacity, icon 상태를 바꿉니다.',
    analysis:
      '사용자는 긴 스크롤 안에서도 “지금 이 부분을 설명 중이구나”라고 이해합니다. 색상 하나가 아니라 선, 투명도, 텍스트 위계가 함께 바뀌어야 가독성이 좋아집니다.',
  },
  {
    index: '04',
    label: 'Reveal',
    highlight: 'reveal',
    icon: Waypoints,
    title: '카드는 짧게 떠오르고 멈춥니다',
    description:
      '답변 bubble과 상태 카드는 opacity와 translateY만 사용해 320ms 안팎으로 등장시킵니다.',
    analysis:
      '사용자 시선을 잡되 내용 읽기를 방해하지 않습니다. 장면 전환보다 상태 피드백에 가까운 움직임입니다.',
  },
  {
    index: '05',
    label: 'State morphing',
    highlight: 'morph',
    icon: ScanLine,
    title: '같은 목업이 다른 상태로 변합니다',
    description:
      'composer 상태에서 검색, 답변, 출처, 작업 패널 상태로 이어지는 변화를 같은 화면 안에서 보여줍니다.',
    analysis:
      '화면을 매번 바꾸지 않아도 상태 전환의 의미를 설명할 수 있습니다.',
  },
  {
    index: '06',
    label: 'Reduced motion',
    highlight: 'reduced',
    icon: ShieldCheck,
    title: '움직임을 줄여도 정보는 남깁니다',
    description:
      'prefers-reduced-motion에서는 typing cursor, spinner, slide를 줄이고 상태 문구와 고정 레이아웃으로 의미를 유지합니다.',
    analysis:
      '모션이 없어도 발표 내용과 UI 상태를 이해할 수 있어야 좋은 분석 자료입니다.',
  },
];

export const scrollSequenceTimingAnalysis = {
  title: 'Scroll Sequence Timing 분석',
  kicker: 'Chanel J12 anti-pattern · NGS system scroller',
  description:
    'Chanel J12 페이지에서는 스크롤에 따라 슬라이드 컨트롤의 active 버튼이 다음 순번으로 이동하는 아이디어는 보이지만, 실제 스크롤 체감은 불안정하고 예민하게 느껴집니다. NGS module selector 작업에서 겪었던 문제도 이와 비슷했습니다. 이 섹션은 Chanel을 좋은 예시가 아니라 anti-pattern으로 두고, “얼마나 빠르게 넘어가야 적당한가”를 시간 값으로 비교합니다.',
  videoSrc: '/media/chanel.mp4',
  videoLabel: 'Chanel J12 capture · bad scroll example',
  observations: [
    {
      label: 'Chanel에서 가져올 아이디어',
      value: 'active button sequence',
      note: '현재 장면에 맞춰 버튼 하나만 is-active가 되는 구조 자체는 좋습니다. 사용자는 긴 화면 안에서도 몇 번째 장면을 보고 있는지 알 수 있습니다.',
    },
    {
      label: 'Chanel에서 피해야 할 문제',
      value: 'unstable scroll feel',
      note: '스크롤이 의도보다 이상하게 먹히면 active 버튼은 안내 장치가 아니라 불안정한 상태 표시처럼 보입니다.',
    },
    {
      label: 'NGS에서 겪은 문제',
      value: 'too sensitive scroll',
      note: '휠 입력 한 번이나 트랙패드 미세 움직임이 다음 순번으로 바로 인정되면, 사용자는 UI가 자기 손보다 앞서 간다고 느낍니다.',
    },
    {
      label: '분석 기준',
      value: 'motion + input lock',
      note: '보이는 전환 시간과 다음 입력을 받을 수 있는 시간 간격을 분리해서 봐야 합니다.',
    },
  ],
  speedOptions: [
    {
      value: '120ms',
      label: '너무 빠름',
      tone: 'Over-sensitive',
      activeIndex: 0,
      description:
        '버튼 active가 즉시 튀기 때문에 반응은 빠르지만, 트랙패드에서는 한 번의 제스처가 두 단계 이상 넘어간 것처럼 느껴질 수 있습니다.',
      effect:
        'hover 피드백에는 적합하지만, 스크롤로 순번을 넘기는 주요 전환에는 과민하게 보입니다.',
    },
    {
      value: '200ms',
      label: '빠른 전환',
      tone: 'Snappy',
      activeIndex: 1,
      description:
        '현재 위치를 빠르게 알려주지만 장면이 바뀌었다는 감각이 약합니다. 짧은 카드 reveal이나 버튼 상태 전환에는 무난합니다.',
      effect:
        '순번 전환에 쓰려면 별도 입력 잠금이 꼭 필요합니다.',
    },
    {
      value: '320ms',
      label: '읽히는 전환',
      tone: 'Readable',
      activeIndex: 2,
      description:
        '버튼 active, 이미지, 설명 문장이 함께 바뀌어도 사용자가 변화를 인지할 시간이 있습니다. PPT starter preset의 slow 값과도 맞습니다.',
      effect:
        '시각 전환 애니메이션 값으로 가장 안정적입니다.',
    },
    {
      value: '480ms',
      label: '권장 입력 간격',
      tone: 'Recommended',
      activeIndex: 3,
      description:
        '한 순번이 넘어간 뒤 약 0.5초 동안 다음 순번을 막아주면 휠/트랙패드 입력이 뭉쳐 들어와도 의도치 않은 연속 이동이 줄어든다.',
      effect:
        'NGS system scroller처럼 순번이 중요한 UI의 minimum step interval로 적당합니다.',
      recommended: true,
    },
    {
      value: '640ms',
      label: '느린 전환',
      tone: 'Deliberate',
      activeIndex: 3,
      description:
        '고급스럽고 차분하지만 조작감이 무거워집니다. 제품 히어로처럼 감상 목적이 강한 장면에는 맞지만 업무 UI에는 답답할 수 있습니다.',
      effect:
        '발표 장면 전환이나 큰 섹션 이동에만 제한적으로 씁니다.',
    },
  ],
  recommendation: {
    visualTransition: '320ms',
    inputLock: '480ms',
    threshold: 'wheel delta 80-120px 또는 섹션 55% 진입',
    summary:
      '보이는 active 버튼 전환은 320ms로 읽히게 만들고, 실제 다음 순번 인정은 최소 480ms 간격을 둡니다. Chanel처럼 스크롤이 불안정하게 먹히는 문제를 피하려면 “버튼이 바뀌는 속도”보다 “다음 순번을 언제 인정할지”를 더 엄격하게 관리해야 합니다.',
  },
};

export const muizzInteractionExamples = {
  title: '마우스 인터랙션 · 비디오 커서 · 색상 제한 사례',
  kicker: 'Mouse reveal · Video cursor · Limited palette',
  description:
    'Muizz Web Studio와 Armory 사례는 마우스 움직임이 이미지나 영상 행동을 어떻게 드러내는지, 그리고 적은 색만으로도 화면 인상을 만들 수 있는지를 보여줍니다. 이 영상들은 챗봇 UI 분석에서 “상호작용은 어디까지 보여줄 것인가”, “영상/카드 위에서 다음 행동을 어떻게 암시할 것인가”, “강조색은 어디에만 쓸 것인가”를 설명하는 예시로 씁니다.',
  examples: [
    {
      id: 'mouse',
      label: 'mouse.mp4',
      videoSrc: '/media/mouse.mp4',
      icon: MousePointerClick,
      title: '마우스 움직임이 이미지 탐색을 만듭니다',
      description:
        '커서가 지나가는 위치에 따라 이미지가 나타나면 사용자는 화면을 읽기보다 탐색하게 됩니다. 정적인 카드 나열보다 훨씬 생동감 있지만, 정보 탐색이 마우스 움직임에 지나치게 의존하면 모바일과 키보드 사용자에게는 의미가 사라질 수 있습니다.',
      analysis:
        '발표 페이지에서는 hover 시 좌측 mockup의 composer, progress, answer를 강조하는 정도가 적당합니다. 핵심 정보는 항상 보이게 두고, 마우스 움직임은 “추가 관찰”을 열어주는 보조 장치로만 사용합니다.',
      specs: [
        ['Trigger', 'pointermove / hover'],
        ['Motion', 'opacity + translate'],
        ['Duration', '120-200ms'],
        ['Risk', 'mobile 대체 상태 필요'],
      ],
    },
    {
      id: 'video-cursor',
      label: 'video cursor.mp4',
      videoSrc: '/media/video-cursor.mp4',
      icon: MousePointerClick,
      title: '영상 위 커서가 재생 행동을 말합니다',
      description:
        'Armory 페이지의 영상 영역에서는 마우스와 함께 PLAY VIDEO label이 떠다니며, 사용자가 무엇을 할 수 있는지 커서 자체가 알려줍니다. 버튼을 별도로 크게 두지 않아도 hover 순간에 “여기는 재생 가능한 영역”이라는 affordance가 생깁니다.',
      analysis:
        '챗봇 UI에서는 답변 카드, 출처 preview, 첨부 파일 썸네일 위에서 “Open source”, “Preview file”, “Play summary”처럼 다음 행동을 커서 근처에 짧게 붙일 수 있습니다. 다만 핵심 action은 키보드와 모바일에서도 접근 가능한 실제 버튼으로 남겨야 합니다.',
      specs: [
        ['Trigger', 'hover over media'],
        ['Cursor label', 'PLAY VIDEO'],
        ['Motion', 'pointer-follow + fade'],
        ['Risk', '실제 버튼 대체 금지'],
      ],
    },
    {
      id: 'color',
      label: 'color.mp4',
      videoSrc: '/media/color.mp4',
      icon: Palette,
      title: '적은 색이 더 선명한 기억을 만듭니다',
      description:
        '색상이 많이 등장하지 않아도 흰색, 검정, 회색, 선택된 강조색만 반복되면 페이지의 톤이 또렷해집니다. 색을 줄이면 화면이 밋밋해지는 것이 아니라, 어떤 색이 action이고 어떤 색이 상태인지 더 빨리 읽힙니다.',
      analysis:
        '챗봇 UI에서는 넓은 배경을 중립색으로 두고, 전송 버튼, active state, progress, 출처 선택처럼 사용자의 다음 행동을 결정하는 지점에만 blue accent를 써야 합니다.',
      specs: [
        ['Base', 'white / black / gray'],
        ['Accent', 'active action only'],
        ['Text', 'contrast first'],
        ['Risk', '장식색 남용 금지'],
      ],
    },
  ],
};

export const progressIndicatorAnalysis = {
  title: 'Scroll Progress Indicator 분석',
  description:
    '매경 기사 페이지의 progress-container / progress-bar처럼, 긴 대화나 긴 답변의 읽기 진행률을 상단에 고정하면 사용자는 현재 위치와 남은 분량을 말없이 이해할 수 있습니다.',
  anatomy: [
    {
      label: 'Trigger',
      value: 'window scroll',
      note: '사용자가 스크롤할 때 현재 위치를 계산합니다.',
    },
    {
      label: 'Target',
      value: 'progress-bar',
      note: '상단에 고정된 얇은 bar가 진행 상태를 표시합니다.',
    },
    {
      label: 'Property',
      value: 'transform: scaleX()',
      note: 'width 변경보다 layout 비용이 낮은 방식으로 채운다.',
    },
    {
      label: 'Purpose',
      value: 'orientation feedback',
      note: '긴 대화/답변에서 사용자가 어디까지 읽었는지 알게 합니다.',
    },
  ],
  application: [
    '챗봇 화면에서는 긴 답변이나 대화 로그의 읽기 진행률을 보여줘 사용자가 현재 위치를 놓치지 않게 합니다.',
    '분석 자료에서는 “지금 어느 UI 요소를 보고 있는지”와 “남은 대화 흐름이 어느 정도인지”를 알려줍니다.',
    '챗봇의 답변 생성 진행률처럼 오해될 수 있는 곳에는 쓰지 않고, 읽기/탐색 진행률에만 제한합니다.',
    'reduced motion 환경에서도 의미가 유지되도록 위치 변화가 아닌 즉시 상태 표시로 남깁니다.',
  ],
};

export const analysisLayers = [
  {
    layer: 'Time',
    title: '반응 시간은 인상을 만듭니다',
    icon: Clock3,
    description:
      'hover 120ms, step 전환 200ms, 답변 reveal 320ms, 장면 전환 480ms처럼 시간 값을 역할별로 분리합니다.',
    application: 'typing cursor 850ms, spinner 900ms처럼 반복 모션은 느리게 두어 피로감을 줄인다.',
  },
  {
    layer: 'Typography',
    title: '글씨체는 역할을 나눕니다',
    icon: Type,
    description:
      'headline, body, label, chip, status text가 서로 다른 크기와 굵기로 읽혀야 챗봇 화면이 덜 복잡해진다.',
    application: '큰 제목은 발표 장면에만 쓰고, 카드 안에서는 18px 안팎의 짧은 제목으로 위계를 만듭니다.',
  },
  {
    layer: 'Color',
    title: '색상은 적게 쓸수록 세다',
    icon: Palette,
    description:
      '넓은 배경은 neutral surface로 두고 blue accent는 active state, progress, 핵심 버튼에만 제한합니다.',
    application:
      'Muizz Web Studio color 사례처럼 선택한 색만 반복하면 화면 톤이 또렷해집니다. success와 warning은 작은 status dot이나 label에만 씁니다.',
  },
  {
    layer: 'Layout',
    title: '분석 화면은 비교 기준을 고정합니다',
    icon: Layers3,
    description:
      'desktop에서는 sticky mockup과 scroll step을 나란히 두고, mobile에서는 단일 column으로 쌓아 읽기 흐름을 유지합니다.',
    application: '고정된 목업은 같은 화면에서 어떤 상태가 달라지는지 보여주는 기준점이 됩니다.',
  },
  {
    layer: 'State',
    title: '챗봇은 상태의 연속입니다',
    icon: ScanLine,
    description:
      'compose, attach, searching, answering, cited, canvas, follow-up 같은 상태가 화면에서 명확히 드러나야 합니다.',
    application: '로딩 하나로 끝내지 말고 검색/생성/근거 확인/후속 질문을 분리합니다.',
  },
  {
    layer: 'Motion',
    title: '움직임은 다음 행동을 안내합니다',
    icon: Waypoints,
    description:
      '모션은 feedback, continuity, hierarchy 중 어떤 목적을 갖는지 설명할 수 있어야 합니다.',
    application: 'opacity, transform, border/highlight만으로 충분히 분석 장면을 만들 수 있습니다.',
  },
  {
    layer: 'Performance',
    title: '스크롤 중에는 가벼워야 합니다',
    icon: Gauge,
    description:
      'scroll progress는 requestAnimationFrame과 transform: scaleX()로 처리하고, layout shift를 만들지 않습니다.',
    application: '무거운 영상보다 가벼운 UI 상태 전환을 우선합니다.',
  },
  {
    layer: 'Accessibility',
    title: '모션을 줄여도 의미는 남아야 합니다',
    icon: ShieldCheck,
    description:
      '색만으로 상태를 표현하지 않고, aria-live, focus-visible, reduced motion 대응을 기본으로 둡니다.',
    application: '현재 항목 강조는 색, 선, 아이콘, 텍스트를 함께 사용해 표현합니다.',
  },
];

export const motionTokens = [
  {
    name: 'fast',
    value: '120ms',
    use: 'hover, focus, press',
  },
  {
    name: 'mid',
    value: '200ms',
    use: 'step active, chip highlight',
  },
  {
    name: 'slow',
    value: '320ms',
    use: 'answer bubble, source panel',
  },
  {
    name: 'xl',
    value: '480ms',
    use: 'section-level reveal only',
  },
];

export const sourceLinks = [
  {
    label: 'Gemini public app shell',
    href: 'https://gemini.google.com/',
  },
  {
    label: 'Google Gemini file upload',
    href: 'https://support.google.com/gemini/answer/14903178',
  },
  {
    label: 'Google Gemini connected apps',
    href: 'https://support.google.com/gemini/answer/13695044',
  },
  {
    label: 'Microsoft 365 Copilot Chat',
    href: 'https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-microsoft-365-copilot-chat',
  },
  {
    label: 'Microsoft Copilot Pages',
    href: 'https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-microsoft-365-copilot-pages',
  },
  {
    label: 'Apple Human Interface Guidelines',
    href: 'https://developer.apple.com/design/human-interface-guidelines',
  },
  {
    label: 'Apple HIG Typography',
    href: 'https://developer.apple.com/design/Human-Interface-Guidelines/typography',
  },
  {
    label: 'Maeil Business News scroll progress reference',
    href: 'https://www.mk.co.kr/news/stock/12009425',
  },
  {
    label: 'Chanel J12 scroll sequence reference',
    href: 'https://www.chanel.com/us/watches/the-j12-watch/',
  },
  {
    label: 'Muizz Web Studio interaction reference',
    href: 'https://muizzwebstudio.com/',
  },
  {
    label: 'Armory video cursor reference',
    href: 'https://armory.framer.ai/?via=eyitayo64',
  },
];

export const backupSlides = [
  {
    eyebrow: '01 / Study purpose',
    title: 'PPT의 목적: 좋은 웹을 기준으로 분해',
    points: [
      '첫 스터디의 목적은 좋은 웹을 “느낌”이 아니라 layout, typo, color, state, motion, performance, accessibility 언어로 읽는 것입니다',
      '사내 챗봇을 만드는 웹 담당자 관점에서 Gemini, Copilot 같은 챗봇 UI를 더 중점적으로 관찰했습니다',
      '목표는 챗봇 개선 제안이 아니라 레퍼런스 분석 → 구현 단위 → 검증 기준으로 정리하는 발표 방식을 공유하는 것입니다',
    ],
  },
  {
    eyebrow: '02 / Chatbot site lenses',
    title: 'Gemini와 Copilot은 분석 렌즈로 봅니다',
    points: [
      '구조: 입력, 맥락 추가, 응답, 출처/후속 행동이 어떻게 이어지는지 봅니다',
      '레이아웃: side navigation, 중앙 대화면, 하단 composer, 보조 패널의 위치 관계를 봅니다',
      '시간·글씨체: 대기 상태가 어떻게 설명되는지, 본문/label/chip text가 어떻게 구분되는지 봅니다',
    ],
  },
  {
    eyebrow: '03 / DOM measurement',
    title: '측정값으로 여백과 집중 위치를 판단합니다',
    points: [
      '원본 앱 소스코드는 비공개이거나 배포마다 바뀌는 hashed bundle이므로 내부 함수명을 추측하지 않습니다',
      '실제 출력값은 로그인 화면에서 getBoundingClientRect()와 getComputedStyle()로 측정한 값을 사용합니다',
      'centerXRatio는 가로 중심, centerYRatio는 세로 시작점, widthRatio는 입력창 폭 비율로 읽으면 됩니다',
      '실측 평균은 GPT centerX 0.418 / centerY 0.415 / width 0.461, Gemini centerX 0.521 / centerY 0.500 / width 0.545입니다',
    ],
  },
  {
    eyebrow: '04 / Scrollytelling',
    title: '분석에 좋은 스크롤 장치입니다',
    points: [
      'sticky mockup으로 같은 화면에서 상태 변화만 보여줍니다',
      'scroll progress로 긴 대화 안에서 현재 읽기 위치와 남은 흐름을 표시합니다',
      '현재 항목 강조로 설명 중인 카드/문단만 선명하게 표시합니다',
    ],
  },
  {
    eyebrow: '05 / Scroll timing',
    title: '순번형 스크롤은 입력 간격이 중요합니다',
    points: [
      'Chanel J12는 active 버튼 순번 이동 아이디어는 참고할 수 있지만, 실제 스크롤 체감은 불안정한 anti-pattern으로 다룹니다',
      'NGS system scroller처럼 순번이 중요한 UI에서는 휠/트랙패드 입력이 너무 민감하면 의도하지 않은 연속 이동이 생깁니다',
      '권장값은 시각 전환 320ms, 다음 순번 입력 인정 간격 480ms이며, 기준점은 wheel delta 80-120px 또는 섹션 55% 진입입니다',
    ],
  },
  {
    eyebrow: '06 / Visual grammar',
    title: '시간 · 글씨체 · 색상을 분석합니다',
    points: [
      '120/200/320/480ms로 즉시 반응, 현재 위치, 답변 등장, 큰 장면 전환을 나눕니다',
      'headline, body, label, chip, status text의 크기와 굵기로 역할을 분리합니다',
      '중립 배경 위에 핵심 action, active state, progress만 blue accent로 강조합니다',
    ],
  },
  {
    eyebrow: '07 / Motion',
    title: '모션은 장식이 아니라 설명입니다',
    points: [
      'feedback: 입력, 클릭, 로딩 상태를 즉시 알려줍니다',
      'continuity: 질문 → 검색 → 답변 → 후속 질문 흐름을 연결합니다',
      'hierarchy: 지금 봐야 할 UI 요소만 강조합니다',
    ],
  },
  {
    eyebrow: '08 / Build standard',
    title: '구현·검증 기준입니다',
    points: [
      'transform/opacity/border 중심으로 움직여 layout shift를 최소화합니다',
      '긴 대화 scroll progress는 transform: scaleX()로 처리합니다',
      'reduced motion, focus-visible, 색 외 상태 표현을 제공합니다',
    ],
  },
];

export const mockConversation = {
  user: '회의 녹취를 요약하고 액션 아이템을 표로 정리해줘.',
  answer:
    '첨부한 회의록에서 의사결정 3개와 후속 작업 5개를 찾았습니다. 필요한 경우 원문 근거와 함께 표 형식으로 정리할 수 있습니다.',
  sources: ['meeting-notes.pdf', 'calendar context', 'recent workspace messages'],
};
