# AI 기반 자기계발 대시보드 (AI Self-Improvement Dashboard)

이 프로젝트는 사용자가 텍스트 데이터를 입력하면, Gemini API를 활용하여 **텍스트 요약, 키워드 추출, 감정 분석**을 수행하고, 이를 시각적으로 보여주는 대시보드 형태의 웹 애플리케이션입니다.

## 기술 스택

- **프론트엔드**: Next.js (React), Tailwind CSS
- **데이터 시각화**: Recharts
- **API**: Gemini API
- **배포**: Vercel

## 시작하기

1. 의존성 설치:
   ```bash
   pnpm install
   ```

2. 환경 변수 설정:
   `.env.local` 파일에 Gemini API 키를 설정하세요.

3. 개발 서버 실행:
   ```bash
   pnpm dev
   ```

## 주요 기능

- 텍스트 요약 및 키워드 추출
- 감정 분석 및 시각화
- AI 응답 생성
- 반응형 대시보드 UI

## API 엔드포인트

- `POST /gemini/summarize` - 텍스트 요약 및 키워드 추출
- `POST /gemini/analyze_sentiment` - 감정 분석
- `POST /gemini/generate_response` - AI 응답 생성
