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
    title: '챗봇 UI를 소재로 scrollytelling을 실험한다',
    summary:
      '이번 발표의 목적은 PPT의 첫 스터디 방향처럼 좋은 웹을 느낌이 아니라 레이아웃, 타이포그래피, 상태, 모션, 성능, 접근성 언어로 분해해 보는 것이다.',
    mockupState: 'idle',
    body:
      '나는 사내 챗봇을 만드는 웹 담당자이기 때문에 이번 회차에서는 ChatGPT, Gemini, Copilot 같은 챗봇 UI를 조금 더 중점적으로 보았다. 핵심은 챗봇 개선안을 제안하는 것이 아니라 “좋아 보인다”를 구조, 레이아웃, 시간, 글씨체, 색상, 상태, 모션으로 나누고, 그 내용을 sticky mockup, scroll progress, active step, hover preview, speed comparison 같은 scrollytelling 장치로 전달하는 방식이다.',
    points: [
      '주제는 frontend motion study이고, 챗봇 UI는 그 기준을 적용해 볼 분석 소재다.',
      'PPT 대신 웹 페이지를 쓰면 스크롤, hover, 상태 전환, 속도 비교를 발표 안에서 직접 보여줄 수 있다.',
      '목표는 좋은 레퍼런스를 해체하고, starter token과 구현 검증 기준으로 다시 정리하는 방법을 공유하는 것이다.',
    ],
  },
  {
    id: 'references',
    kicker: '02 / Reference set',
    title: 'GPT · Gemini · Copilot을 분석 렌즈로 본다',
    summary:
      '세 챗봇은 브랜드와 기능명보다 구조, 레이아웃, 시간, 글씨체의 차이로 보는 편이 motion study 목적에 더 잘 맞는다.',
    mockupState: 'typing',
    body:
      'ChatGPT, Gemini, Copilot을 볼 때는 “어떤 기능이 있나”보다 “질문 전후의 구조가 어떻게 이어지는가”, “입력창과 답변이 어떤 레이아웃 관계를 갖는가”, “대기와 전환 시간이 어떻게 설명되는가”, “본문과 상태 문구가 어떤 글씨 위계로 나뉘는가”를 본다. 그래야 스크롤 발표에서 어떤 요소를 어떤 순서로 보여줄지 정할 수 있다.',
    points: [
      '구조: 입력 → 맥락 추가 → 응답 생성 → 출처/후속 행동으로 이어지는 흐름을 본다.',
      '레이아웃: 중앙 대화 영역, 하단 composer, 보조 도구/출처/작업 패널의 위치 관계를 본다.',
      '시간과 글씨체: 클릭 직후 피드백, 검색/생성 상태, 답변 reveal, 본문/label/chip의 위계를 본다.',
    ],
  },
  {
    id: 'common',
    kicker: '03 / Common UI elements',
    title: '분석 소재를 UI 단위로 분해',
    summary:
      '세 챗봇의 공통 요소는 composer, capability chips, answer card, state feedback, follow-up prompt로 정리할 수 있다.',
    mockupState: 'searching',
    body:
      'PPT의 analysis layers처럼 한 번에 모든 내용을 말하지 않으려면 분석 대상을 작은 단위로 쪼개야 한다. 챗봇 UI는 질문 전 composer, 응답 중 상태 피드백, 응답 후 action button과 follow-up prompt처럼 단계가 분명해서 스크롤 장면으로 나누기 좋다.',
    points: [
      '질문 전: placeholder, 추천 질문, 첨부/도구 버튼이 입력 의도를 만든다.',
      '답변 중: typing, searching, generating 같은 상태가 기다림을 설명한다.',
      '답변 후: action button과 follow-up prompt가 대화를 다음 작업으로 넘긴다.',
    ],
  },
  {
    id: 'scrolly',
    kicker: '04 / Scrollytelling reading',
    title: '분석에 어울리는 scrollytelling 요소',
    summary:
      '챗봇 UI 분석은 스크롤에 따라 한 요소씩 드러나는 방식과 잘 맞는다. 같은 목업을 고정하고 상태만 바꾸면 구조가 선명해진다.',
    mockupState: 'cited',
    body:
      'scrollytelling은 “한 번에 다 보여주기”보다 “지금 봐야 할 UI 요소만 강조하기”에 강하다. sticky mockup, scroll progress, 현재 항목 강조, card reveal, state morphing을 사용하면 분석 내용을 단계별 장면으로 나누고, 발표자가 말하는 순서와 화면 변화의 순서를 맞출 수 있다.',
    points: [
      'sticky mockup: 같은 화면을 유지해 변화 지점만 보이게 한다.',
      'scroll progress: 긴 대화에서 현재 어느 정도 읽었고 남은 흐름이 얼마나 되는지 조용하게 알려준다.',
      '현재 항목 강조: 스크롤 중 지금 설명하는 카드나 문단만 선명하게 만들고, 나머지는 살짝 낮춰 사용자의 시선을 잃지 않게 한다.',
    ],
  },
  {
    id: 'visual',
    kicker: '05 / Visual grammar',
    title: '시간 · 글씨체 · 색상으로 분석',
    summary:
      '좋아 보이는 인상은 시간 값, 글씨 크기, 여백, 색상 대비, 상태 표현이 함께 만든다.',
    mockupState: 'handoff',
    body:
      '스터디에서 확인하려는 것은 “예쁘다/별로다”의 감상이 아니라 어떤 시간 값, 글씨 위계, 색상 제한이 설명을 더 잘 읽히게 만드는지다. 버튼 반응은 몇 ms일 때 빠르게 느껴지는지, 답변 본문과 상태 문구는 어떤 크기와 굵기로 구분되는지, 파란색 같은 강조색은 어떤 순간에만 등장해야 집중이 생기는지 예시와 함께 본다.',
    points: [
      '시간: hover는 120ms 안팎으로 즉시 반응하고, step 전환은 200ms로 현재 위치를 알려주며, answer reveal은 320ms 정도로 읽기 흐름을 방해하지 않게 한다.',
      '글씨체: headline은 주제를 잡고, body는 오래 읽히는 답변을 담당하며, label과 chip text는 상태와 행동을 짧게 구분한다.',
      '색상: 넓은 면은 흰색과 회색 계열로 조용하게 두고, 핵심 action, active state, progress 같은 순간에만 blue accent를 써서 시선을 모은다.',
    ],
  },
  {
    id: 'standards',
    kicker: '06 / Build standards',
    title: '발표에서 검증할 기준',
    summary:
      '모션은 장식이 아니라 feedback, continuity, hierarchy를 설명하는 규칙으로 관리한다.',
    mockupState: 'insight',
    body:
      '발표의 결론은 더 화려한 효과가 아니라, 스크롤 발표가 읽히도록 상태와 시선을 관리하는 규칙이다. 사용자가 입력했는지, 시스템이 검색 중인지, 답변이 완성됐는지, 다음 행동을 어디서 해야 하는지 작은 모션으로 설명하되, 그 모션이 스크롤 성능과 접근성을 해치지 않는지도 함께 검증한다.',
    points: [
      'opacity, transform, border/highlight 중심으로 움직여 layout shift를 만들지 않고, 사용자의 시선을 필요한 곳으로만 옮긴다.',
      'prefers-reduced-motion에서는 typing cursor, slide, spinner를 줄여도 상태 문구와 배치만으로 의미가 남아야 한다.',
      'scroll progress는 width를 계속 바꾸는 대신 transform: scaleX()로 처리해 긴 대화 스크롤 중에도 가볍게 유지한다.',
    ],
  },
];

export const visitedChatbotSites = [
  {
    product: 'ChatGPT',
    href: 'https://chatgpt.com/',
    imageSrc: '/media/chatgpt.png',
    access: '공개 shell 관찰',
    summary:
      'chatgpt.com 공개 화면에서는 New chat, Search chats, Images, Apps, Deep research, Chat history 같은 좌측 navigation과 “Ready when you are.” 중심 empty state가 먼저 보인다.',
    lenses: [
      {
        label: 'Structure',
        note: '새 대화, 검색, 히스토리, 이미지, 앱, 리서치가 한쪽 navigation에 모여 있어 “대화 목록 + 작업 진입점” 구조가 먼저 읽힌다.',
      },
      {
        label: 'Layout',
        note: '좌측은 탐색과 히스토리, 중앙은 현재 대화 시작면으로 분리된다. 빈 화면에서도 어디서 시작하고 어디로 돌아갈지 명확하다.',
      },
      {
        label: 'Time',
        note: '첫 상태는 “Ready when you are.”처럼 즉시 대기 상태를 말한다. 사용자가 입력하기 전부터 시스템이 준비되어 있다는 느낌을 만든다.',
      },
      {
        label: 'Typography',
        note: '중앙 문구는 짧고 크게, navigation label은 작고 기능명 중심이다. 긴 설명보다 역할별 텍스트 크기 차이가 구조를 만든다.',
      },
    ],
  },
  {
    product: 'Gemini',
    href: 'https://gemini.google.com/',
    imageSrc: '/media/gemini.png',
    access: '공개 URL은 sign-in gate, 공식 도움말로 앱 흐름 보완',
    summary:
      'gemini.google.com은 비로그인 접근 시 Sign in만 노출된다. Google 공식 도움말 기준으로 실제 앱은 하단 text box, Add files, Submit, side panel/recent chat 흐름을 중심으로 분석한다.',
    lenses: [
      {
        label: 'Structure',
        note: '질문 입력 전 Add files, Google Workspace 연결, @ 앱 지정처럼 맥락을 먼저 붙이는 구조가 강하다.',
      },
      {
        label: 'Layout',
        note: '공식 도움말은 하단 text box와 Add files/Submit 흐름을 반복해서 설명한다. 최근 대화는 side panel에서 관리되는 구조다.',
      },
      {
        label: 'Time',
        note: '파일 추가, 앱 연결, 권한 요청, Submit처럼 단계가 분리된다. 사용자는 지금 입력 중인지, 연결이 필요한지, 제출 단계인지 알 수 있어야 한다.',
      },
      {
        label: 'Typography',
        note: 'Google식 UI는 짧은 label과 명령어형 action text가 중심이다. 긴 안내보다 text box, Add files, Submit 같은 기능어의 명확성이 중요하다.',
      },
    ],
  },
];

export const referenceSections = [
  {
    index: '01',
    product: 'Structure',
    highlight: 'composer',
    mockupState: 'typing',
    icon: Layers3,
    title: '입력 → 맥락 → 응답 → 행동 구조',
    description:
      'ChatGPT의 파일·도구·Canvas, Gemini의 업로드와 Google 앱 연결, Copilot의 Add content와 Pages는 모두 질문 전에 맥락을 붙이고 답변 후 행동으로 넘기는 구조를 만든다.',
    takeaway:
      '분석 포인트: 챗봇은 대화창 하나가 아니라 입력, 맥락, 응답, 근거, 후속 행동이 이어지는 작업 구조다.',
  },
  {
    index: '02',
    product: 'Layout',
    highlight: 'tools',
    mockupState: 'insight',
    icon: NotebookTabs,
    title: '대화 중앙, 도구는 주변에 둔다',
    description:
      '세 챗봇 모두 읽어야 할 대화는 중앙에 두고, composer는 하단에 고정하며, 첨부·도구·출처·작업 전환은 주변에 배치한다. 사용자는 본문을 읽다가 짧은 거리 안에서 다음 행동으로 이동한다.',
    takeaway:
      '분석 포인트: 레이아웃은 말풍선 모양보다 “읽기 영역, 입력 영역, 보조 작업 영역이 얼마나 잘 분리되는가”가 중요하다.',
  },
  {
    index: '03',
    product: 'Time',
    highlight: 'state',
    mockupState: 'searching',
    icon: Clock3,
    title: '대기 시간을 상태로 쪼갠다',
    description:
      '전송 직후 반응, 검색 중, 생성 중, 출처 확인, 답변 완료가 한 덩어리 로딩으로 보이면 불안하다. ChatGPT, Gemini, Copilot의 좋은 지점은 기다림을 작은 상태 문구와 움직임으로 나눠 설명한다는 점이다.',
    takeaway:
      '분석 포인트: 120ms는 즉시 피드백, 200ms는 현재 위치 전환, 320ms는 답변 reveal, 480ms는 큰 순번 전환처럼 역할별 시간 값을 분리한다.',
  },
  {
    index: '04',
    product: 'Typography',
    highlight: 'answer',
    mockupState: 'cited',
    icon: Type,
    title: '본문, 상태, 행동 글씨가 다르다',
    description:
      '챗봇 화면은 긴 답변 본문, 짧은 상태 label, 출처 chip, 버튼 text가 한 화면에 섞인다. 본문은 오래 읽히게, label은 빠르게 식별되게, chip은 행동 단위로 보이게 크기와 굵기를 나눠야 한다.',
    takeaway:
      '분석 포인트: 글씨체 분석은 “무슨 폰트를 썼나”보다 headline, body, label, chip text의 역할과 위계를 보는 것이다.',
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
      '동일한 챗봇 목업을 왼쪽에 고정하고 스크롤 단계마다 composer, 검색, 답변, 후속 질문 상태를 바꾼다.',
    analysis:
      '비교 대상이 흔들리지 않아 “무엇이 바뀌었는지”만 보인다. 하나의 레퍼런스를 단계별 장면으로 나누어 설명하기에 좋다.',
  },
  {
    index: '02',
    label: 'Progress bar',
    highlight: 'progress',
    icon: Gauge,
    title: '읽기 위치를 3px 선으로 표시',
    description:
      '상단 progress-container 안의 progress-bar를 transform: scaleX()로 채워 긴 대화 안에서 현재 읽고 있는 위치를 보여준다.',
    analysis:
      '긴 답변이나 긴 대화 로그에서 방향 감각을 준다. 단, AI 응답 생성률로 오해되지 않게 읽기 진행률로만 사용한다.',
  },
  {
    index: '03',
    label: 'Current item',
    highlight: 'active',
    icon: Sparkles,
    title: '현재 설명 중인 항목만 강조',
    description:
      'IntersectionObserver로 현재 화면에 들어온 섹션을 감지하고, 해당 카드나 문단의 border, opacity, icon 상태를 바꾼다.',
    analysis:
      '사용자는 긴 스크롤 안에서도 “지금 이 부분을 설명 중이구나”라고 이해한다. 색상 하나가 아니라 선, 투명도, 텍스트 위계가 함께 바뀌어야 가독성이 좋아진다.',
  },
  {
    index: '04',
    label: 'Reveal',
    highlight: 'reveal',
    icon: Waypoints,
    title: '카드는 짧게 떠오르고 멈춘다',
    description:
      '답변 bubble과 상태 카드는 opacity와 translateY만 사용해 320ms 안팎으로 등장시킨다.',
    analysis:
      '사용자 시선을 잡되 내용 읽기를 방해하지 않는다. 장면 전환보다 상태 피드백에 가까운 움직임이다.',
  },
  {
    index: '05',
    label: 'State morphing',
    highlight: 'morph',
    icon: ScanLine,
    title: '같은 목업이 다른 상태로 변한다',
    description:
      'composer 상태에서 검색, 답변, 출처, 작업 패널 상태로 이어지는 변화를 같은 화면 안에서 보여준다.',
    analysis:
      '화면을 매번 바꾸지 않아도 상태 전환의 의미를 설명할 수 있다.',
  },
  {
    index: '06',
    label: 'Reduced motion',
    highlight: 'reduced',
    icon: ShieldCheck,
    title: '움직임을 줄여도 정보는 남긴다',
    description:
      'prefers-reduced-motion에서는 typing cursor, spinner, slide를 줄이고 상태 문구와 고정 레이아웃으로 의미를 유지한다.',
    analysis:
      '모션이 없어도 발표 내용과 UI 상태를 이해할 수 있어야 좋은 분석 자료다.',
  },
];

export const scrollSequenceTimingAnalysis = {
  title: 'Scroll Sequence Timing 분석',
  kicker: 'Chanel J12 anti-pattern · NGS system scroller',
  description:
    'Chanel J12 페이지에서는 스크롤에 따라 슬라이드 컨트롤의 active 버튼이 다음 순번으로 이동하는 아이디어는 보이지만, 실제 스크롤 체감은 불안정하고 예민하게 느껴진다. NGS module selector 작업에서 겪었던 문제도 이와 비슷했다. 이 섹션은 Chanel을 좋은 예시가 아니라 anti-pattern으로 두고, “얼마나 빠르게 넘어가야 적당한가”를 시간 값으로 비교한다.',
  videoSrc: '/media/chanel.mp4',
  videoLabel: 'Chanel J12 capture · bad scroll example',
  observations: [
    {
      label: 'Chanel에서 가져올 아이디어',
      value: 'active button sequence',
      note: '현재 장면에 맞춰 버튼 하나만 is-active가 되는 구조 자체는 좋다. 사용자는 긴 화면 안에서도 몇 번째 장면을 보고 있는지 알 수 있다.',
    },
    {
      label: 'Chanel에서 피해야 할 문제',
      value: 'unstable scroll feel',
      note: '스크롤이 의도보다 이상하게 먹히면 active 버튼은 안내 장치가 아니라 불안정한 상태 표시처럼 보인다.',
    },
    {
      label: 'NGS에서 겪은 문제',
      value: 'too sensitive scroll',
      note: '휠 입력 한 번이나 트랙패드 미세 움직임이 다음 순번으로 바로 인정되면, 사용자는 UI가 자기 손보다 앞서 간다고 느낀다.',
    },
    {
      label: '분석 기준',
      value: 'motion + input lock',
      note: '보이는 전환 시간과 다음 입력을 받을 수 있는 시간 간격을 분리해서 봐야 한다.',
    },
  ],
  speedOptions: [
    {
      value: '120ms',
      label: '너무 빠름',
      tone: 'Over-sensitive',
      activeIndex: 0,
      description:
        '버튼 active가 즉시 튀기 때문에 반응은 빠르지만, 트랙패드에서는 한 번의 제스처가 두 단계 이상 넘어간 것처럼 느껴질 수 있다.',
      effect:
        'hover 피드백에는 적합하지만, 스크롤로 순번을 넘기는 주요 전환에는 과민하게 보인다.',
    },
    {
      value: '200ms',
      label: '빠른 전환',
      tone: 'Snappy',
      activeIndex: 1,
      description:
        '현재 위치를 빠르게 알려주지만 장면이 바뀌었다는 감각이 약하다. 짧은 카드 reveal이나 버튼 상태 전환에는 무난하다.',
      effect:
        '순번 전환에 쓰려면 별도 입력 잠금이 꼭 필요하다.',
    },
    {
      value: '320ms',
      label: '읽히는 전환',
      tone: 'Readable',
      activeIndex: 2,
      description:
        '버튼 active, 이미지, 설명 문장이 함께 바뀌어도 사용자가 변화를 인지할 시간이 있다. PPT starter preset의 slow 값과도 맞다.',
      effect:
        '시각 전환 애니메이션 값으로 가장 안정적이다.',
    },
    {
      value: '480ms',
      label: '권장 입력 간격',
      tone: 'Recommended',
      activeIndex: 3,
      description:
        '한 순번이 넘어간 뒤 약 0.5초 동안 다음 순번을 막아주면 휠/트랙패드 입력이 뭉쳐 들어와도 의도치 않은 연속 이동이 줄어든다.',
      effect:
        'NGS system scroller처럼 순번이 중요한 UI의 minimum step interval로 적당하다.',
      recommended: true,
    },
    {
      value: '640ms',
      label: '느린 전환',
      tone: 'Deliberate',
      activeIndex: 3,
      description:
        '고급스럽고 차분하지만 조작감이 무거워진다. 제품 히어로처럼 감상 목적이 강한 장면에는 맞지만 업무 UI에는 답답할 수 있다.',
      effect:
        '발표 장면 전환이나 큰 섹션 이동에만 제한적으로 쓴다.',
    },
  ],
  recommendation: {
    visualTransition: '320ms',
    inputLock: '480ms',
    threshold: 'wheel delta 80-120px 또는 섹션 55% 진입',
    summary:
      '보이는 active 버튼 전환은 320ms로 읽히게 만들고, 실제 다음 순번 인정은 최소 480ms 간격을 둔다. Chanel처럼 스크롤이 불안정하게 먹히는 문제를 피하려면 “버튼이 바뀌는 속도”보다 “다음 순번을 언제 인정할지”를 더 엄격하게 관리해야 한다.',
  },
};

export const muizzInteractionExamples = {
  title: '마우스 인터랙션 · 비디오 커서 · 색상 제한 사례',
  kicker: 'Mouse reveal · Video cursor · Limited palette',
  description:
    'Muizz Web Studio와 Armory 사례는 마우스 움직임이 이미지나 영상 행동을 어떻게 드러내는지, 그리고 적은 색만으로도 화면 인상을 만들 수 있는지를 보여준다. 이 영상들은 챗봇 UI 분석에서 “상호작용은 어디까지 보여줄 것인가”, “영상/카드 위에서 다음 행동을 어떻게 암시할 것인가”, “강조색은 어디에만 쓸 것인가”를 설명하는 예시로 쓴다.',
  examples: [
    {
      id: 'mouse',
      label: 'mouse.mp4',
      videoSrc: '/media/mouse.mp4',
      icon: MousePointerClick,
      title: '마우스 움직임이 이미지 탐색을 만든다',
      description:
        '커서가 지나가는 위치에 따라 이미지가 나타나면 사용자는 화면을 읽기보다 탐색하게 된다. 정적인 카드 나열보다 훨씬 생동감 있지만, 정보 탐색이 마우스 움직임에 지나치게 의존하면 모바일과 키보드 사용자에게는 의미가 사라질 수 있다.',
      analysis:
        '발표 페이지에서는 hover 시 좌측 mockup의 composer, progress, answer를 강조하는 정도가 적당하다. 핵심 정보는 항상 보이게 두고, 마우스 움직임은 “추가 관찰”을 열어주는 보조 장치로만 사용한다.',
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
      title: '영상 위 커서가 재생 행동을 말한다',
      description:
        'Armory 페이지의 영상 영역에서는 마우스와 함께 PLAY VIDEO label이 떠다니며, 사용자가 무엇을 할 수 있는지 커서 자체가 알려준다. 버튼을 별도로 크게 두지 않아도 hover 순간에 “여기는 재생 가능한 영역”이라는 affordance가 생긴다.',
      analysis:
        '챗봇 UI에서는 답변 카드, 출처 preview, 첨부 파일 썸네일 위에서 “Open source”, “Preview file”, “Play summary”처럼 다음 행동을 커서 근처에 짧게 붙일 수 있다. 다만 핵심 action은 키보드와 모바일에서도 접근 가능한 실제 버튼으로 남겨야 한다.',
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
      title: '적은 색이 더 선명한 기억을 만든다',
      description:
        '색상이 많이 등장하지 않아도 흰색, 검정, 회색, 선택된 강조색만 반복되면 페이지의 톤이 또렷해진다. 색을 줄이면 화면이 밋밋해지는 것이 아니라, 어떤 색이 action이고 어떤 색이 상태인지 더 빨리 읽힌다.',
      analysis:
        '챗봇 UI에서는 넓은 배경을 중립색으로 두고, 전송 버튼, active state, progress, 출처 선택처럼 사용자의 다음 행동을 결정하는 지점에만 blue accent를 써야 한다.',
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
    '매경 기사 페이지의 progress-container / progress-bar처럼, 긴 대화나 긴 답변의 읽기 진행률을 상단에 고정하면 사용자는 현재 위치와 남은 분량을 말없이 이해할 수 있다.',
  anatomy: [
    {
      label: 'Trigger',
      value: 'window scroll',
      note: '사용자가 스크롤할 때 현재 위치를 계산한다.',
    },
    {
      label: 'Target',
      value: 'progress-bar',
      note: '상단에 고정된 얇은 bar가 진행 상태를 표시한다.',
    },
    {
      label: 'Property',
      value: 'transform: scaleX()',
      note: 'width 변경보다 layout 비용이 낮은 방식으로 채운다.',
    },
    {
      label: 'Purpose',
      value: 'orientation feedback',
      note: '긴 대화/답변에서 사용자가 어디까지 읽었는지 알게 한다.',
    },
  ],
  application: [
    '챗봇 화면에서는 긴 답변이나 대화 로그의 읽기 진행률을 보여줘 사용자가 현재 위치를 놓치지 않게 한다.',
    '분석 자료에서는 “지금 어느 UI 요소를 보고 있는지”와 “남은 대화 흐름이 어느 정도인지”를 알려준다.',
    '챗봇의 답변 생성 진행률처럼 오해될 수 있는 곳에는 쓰지 않고, 읽기/탐색 진행률에만 제한한다.',
    'reduced motion 환경에서도 의미가 유지되도록 위치 변화가 아닌 즉시 상태 표시로 남긴다.',
  ],
};

export const analysisLayers = [
  {
    layer: 'Time',
    title: '반응 시간은 인상을 만든다',
    icon: Clock3,
    description:
      'hover 120ms, step 전환 200ms, 답변 reveal 320ms, 장면 전환 480ms처럼 시간 값을 역할별로 분리한다.',
    application: 'typing cursor 850ms, spinner 900ms처럼 반복 모션은 느리게 두어 피로감을 줄인다.',
  },
  {
    layer: 'Typography',
    title: '글씨체는 역할을 나눈다',
    icon: Type,
    description:
      'headline, body, label, chip, status text가 서로 다른 크기와 굵기로 읽혀야 챗봇 화면이 덜 복잡해진다.',
    application: '큰 제목은 발표 장면에만 쓰고, 카드 안에서는 18px 안팎의 짧은 제목으로 위계를 만든다.',
  },
  {
    layer: 'Color',
    title: '색상은 적게 쓸수록 세다',
    icon: Palette,
    description:
      '넓은 배경은 neutral surface로 두고 blue accent는 active state, progress, 핵심 버튼에만 제한한다.',
    application:
      'Muizz Web Studio color 사례처럼 선택한 색만 반복하면 화면 톤이 또렷해진다. success와 warning은 작은 status dot이나 label에만 쓴다.',
  },
  {
    layer: 'Layout',
    title: '분석 화면은 비교 기준을 고정한다',
    icon: Layers3,
    description:
      'desktop에서는 sticky mockup과 scroll step을 나란히 두고, mobile에서는 단일 column으로 쌓아 읽기 흐름을 유지한다.',
    application: '고정된 목업은 같은 화면에서 어떤 상태가 달라지는지 보여주는 기준점이 된다.',
  },
  {
    layer: 'State',
    title: '챗봇은 상태의 연속이다',
    icon: ScanLine,
    description:
      'compose, attach, searching, answering, cited, canvas, follow-up 같은 상태가 화면에서 명확히 드러나야 한다.',
    application: '로딩 하나로 끝내지 말고 검색/생성/근거 확인/후속 질문을 분리한다.',
  },
  {
    layer: 'Motion',
    title: '움직임은 다음 행동을 안내한다',
    icon: Waypoints,
    description:
      '모션은 feedback, continuity, hierarchy 중 어떤 목적을 갖는지 설명할 수 있어야 한다.',
    application: 'opacity, transform, border/highlight만으로 충분히 분석 장면을 만들 수 있다.',
  },
  {
    layer: 'Performance',
    title: '스크롤 중에는 가벼워야 한다',
    icon: Gauge,
    description:
      'scroll progress는 requestAnimationFrame과 transform: scaleX()로 처리하고, layout shift를 만들지 않는다.',
    application: '무거운 영상보다 가벼운 UI 상태 전환을 우선한다.',
  },
  {
    layer: 'Accessibility',
    title: '모션을 줄여도 의미는 남아야 한다',
    icon: ShieldCheck,
    description:
      '색만으로 상태를 표현하지 않고, aria-live, focus-visible, reduced motion 대응을 기본으로 둔다.',
    application: '현재 항목 강조는 색, 선, 아이콘, 텍스트를 함께 사용해 표현한다.',
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
    label: 'ChatGPT public app shell',
    href: 'https://chatgpt.com/',
  },
  {
    label: 'Gemini public app shell',
    href: 'https://gemini.google.com/',
  },
  {
    label: 'ChatGPT file uploads',
    href: 'https://help.openai.com/en/articles/8555545-file-uploads-faq',
  },
  {
    label: 'ChatGPT Canvas',
    href: 'https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it',
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
      '첫 스터디의 목적은 좋은 웹을 “느낌”이 아니라 layout, typo, color, state, motion, performance, accessibility 언어로 읽는 것',
      '나는 사내 챗봇을 만드는 웹 담당자라 ChatGPT, Gemini, Copilot 같은 챗봇 UI를 더 중점적으로 관찰함',
      '목표는 챗봇 개선 제안이 아니라 레퍼런스 분석 → 구현 단위 → 검증 기준으로 정리하는 발표 방식 공유',
    ],
  },
  {
    eyebrow: '02 / Chatbot site lenses',
    title: 'ChatGPT와 Gemini는 분석 렌즈로 본다',
    points: [
      '구조: 입력, 맥락 추가, 응답, 출처/후속 행동이 어떻게 이어지는지 본다',
      '레이아웃: side navigation, 중앙 대화면, 하단 composer, 보조 패널의 위치 관계를 본다',
      '시간·글씨체: 대기 상태가 어떻게 설명되는지, 본문/label/chip text가 어떻게 구분되는지 본다',
    ],
  },
  {
    eyebrow: '03 / Scrollytelling',
    title: '분석에 좋은 스크롤 장치',
    points: [
      'sticky mockup으로 같은 화면에서 상태 변화만 보여줌',
      'scroll progress로 긴 대화 안에서 현재 읽기 위치와 남은 흐름을 표시',
      '현재 항목 강조로 설명 중인 카드/문단만 선명하게 표시',
    ],
  },
  {
    eyebrow: '04 / Scroll timing',
    title: '순번형 스크롤은 입력 간격이 중요하다',
    points: [
      'Chanel J12는 active 버튼 순번 이동 아이디어는 참고할 수 있지만, 실제 스크롤 체감은 불안정한 anti-pattern으로 다룸',
      'NGS system scroller처럼 순번이 중요한 UI에서는 휠/트랙패드 입력이 너무 민감하면 의도하지 않은 연속 이동이 생김',
      '권장값은 시각 전환 320ms, 다음 순번 입력 인정 간격 480ms, 기준점은 wheel delta 80-120px 또는 섹션 55% 진입',
    ],
  },
  {
    eyebrow: '05 / Visual grammar',
    title: '시간 · 글씨체 · 색상 분석',
    points: [
      '120/200/320/480ms로 즉시 반응, 현재 위치, 답변 등장, 큰 장면 전환을 나눔',
      'headline, body, label, chip, status text의 크기와 굵기로 역할을 분리',
      '중립 배경 위에 핵심 action, active state, progress만 blue accent로 강조',
    ],
  },
  {
    eyebrow: '06 / Motion',
    title: '모션은 장식이 아니라 설명',
    points: [
      'feedback: 입력, 클릭, 로딩 상태를 즉시 알려줌',
      'continuity: 질문 → 검색 → 답변 → 후속 질문 흐름을 연결',
      'hierarchy: 지금 봐야 할 UI 요소만 강조',
    ],
  },
  {
    eyebrow: '07 / Build standard',
    title: '구현·검증 기준',
    points: [
      'transform/opacity/border 중심으로 움직여 layout shift 최소화',
      '긴 대화 scroll progress는 transform: scaleX()로 처리',
      'reduced motion, focus-visible, 색 외 상태 표현 제공',
    ],
  },
];

export const mockConversation = {
  user: '회의 녹취를 요약하고 액션 아이템을 표로 정리해줘.',
  answer:
    '첨부한 회의록에서 의사결정 3개와 후속 작업 5개를 찾았습니다. 필요한 경우 원문 근거와 함께 표 형식으로 정리할 수 있습니다.',
  sources: ['meeting-notes.pdf', 'calendar context', 'recent workspace messages'],
};
