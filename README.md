# Frontend Motion Study Scrollytelling

프론트엔드 디자인과 모션 스터디를 위한 웹 기반 발표 자료입니다.

이 프로젝트는 챗봇 개선 제안서가 아니라, `frontend_motion_study_session1+복구복구.pptx`의 방향처럼 좋은 웹을 "느낌"이 아니라 `layout`, `typography`, `color`, `state`, `motion`, `performance`, `accessibility` 관점으로 분해해 보는 scrollytelling 발표 페이지입니다.

발표자는 사내 챗봇을 만드는 웹 담당자라는 업무 맥락이 있기 때문에, ChatGPT, Gemini, Copilot 같은 챗봇 UI를 분석 소재로 조금 더 중점적으로 다룹니다.

## 발표 목적

좋은 웹을 정지 화면으로만 보지 않고, 스크롤과 상태 전환 안에서 어떻게 읽히는지 분석합니다.

핵심 메시지는 다음과 같습니다.

> 좋은 웹은 "예쁘다"에서 끝나지 않고, 레이아웃, 글씨 위계, 상태 피드백, 모션 목적, 성능과 접근성 기준으로 설명할 수 있어야 한다.

이번 발표에서 챗봇 UI는 최종 목적이 아니라 분석 소재입니다. 목표는 특정 서비스를 복제하는 것이 아니라, 레퍼런스를 분석 가능한 단위로 쪼개고 웹 발표 안에서 직접 보여주는 방식입니다.

## 발표 흐름

1. PPT 스터디 목적 확인
   - 좋은 웹을 느낌이 아니라 기준으로 분해한다.
   - motion은 장식이 아니라 변화의 의미를 설명하는 시스템으로 본다.

2. 챗봇 UI를 분석 소재로 선택한 이유
   - 사내 챗봇 웹을 담당하고 있어 업무와 가까운 사례다.
   - ChatGPT, Gemini, Copilot은 입력창, 도구, 상태, 답변, 후속 행동이 뚜렷하다.

3. 챗봇 UI 분석
   - 구조: 입력, 맥락 추가, 응답, 출처, 후속 행동
   - 레이아웃: side navigation, 중앙 대화면, 하단 composer, 보조 패널
   - 시간: hover, active 전환, answer reveal, 순번 전환
   - 글씨체: headline, body, label, chip text, status text
   - 색상: 중립 surface와 제한된 accent color

4. Scrollytelling 요소 분석
   - sticky mockup
   - scroll progress
   - active step highlight
   - card reveal
   - state morphing
   - hover preview
   - speed comparison

5. 속도 기준
   - 속도에는 절대적인 정답이 없고, 사용자와 맥락에 따라 다르게 느껴질 수 있다.
   - 이번 발표에서는 120ms, 200ms, 320ms, 480ms를 비교했다.
   - 발표자가 읽고 변화를 따라가기 편한 기준으로 480ms를 순번 전환의 기준값으로 잡았다.
   - 480ms는 객관적 최적값이 아니라, 이번 발표 맥락에서 선택한 기준값이다.

6. 구현 검증
   - `transform`, `opacity`, `border/highlight` 중심으로 움직인다.
   - scroll progress는 `width`가 아니라 `transform: scaleX()`로 처리한다.
   - `prefers-reduced-motion`에서도 의미가 남아야 한다.
   - focus state와 색 외 상태 표현을 제공한다.

## 실행 방법

```bash
npm install
npm run dev
```

개발 서버 기본 주소:

```text
http://127.0.0.1:5173/
```

프로덕션 빌드:

```bash
npm run build
```

빌드 결과 미리보기:

```bash
npm run preview
```

## 주요 파일

```text
src/App.jsx
```

전체 발표 화면의 섹션 구성과 렌더링 로직을 담당합니다.

```text
src/data/storyContent.js
```

발표 내용, 분석 카드, scrollytelling 요소, 모션 토큰, 백업 슬라이드 데이터를 관리합니다. 발표 문구를 수정할 때 가장 먼저 보는 파일입니다.

```text
src/components/ChatMockup.jsx
```

스크롤 상태에 따라 변하는 챗봇 목업입니다.

```text
src/components/ScrollProgress.jsx
```

상단 scroll progress bar를 담당합니다.

```text
src/hooks/useActiveStep.js
```

`IntersectionObserver`로 현재 활성화된 발표 step을 계산합니다.

```text
public/media
```

발표에 사용하는 이미지와 영상 파일을 모아둔 폴더입니다.

## 미디어 파일 관리

현재 정리된 미디어 파일은 다음 위치에 있습니다.

```text
public/media/chatgpt.png
public/media/gemini.png
public/media/chanel.mp4
public/media/mouse.mp4
public/media/color.mp4
public/media/video-cursor.mp4
public/media/scrollbar.mp4
```

새 이미지나 영상을 추가할 때는 루트에 두지 말고 `public/media`에 넣는 것을 권장합니다.

코드에서는 다음처럼 절대 경로로 참조합니다.

```js
imageSrc: '/media/chatgpt.png'
videoSrc: '/media/chanel.mp4'
```

파일명에는 공백보다 하이픈을 사용하는 편이 안전합니다.


## 기술 스택

- Vite
- React
- lucide-react
- CSS transition / transform / opacity 중심 모션
- IntersectionObserver 기반 active step 처리

