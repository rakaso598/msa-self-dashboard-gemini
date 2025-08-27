# Vercel 배포 가이드

## 환경 변수 설정

Vercel에 배포할 때 다음 환경 변수를 설정해야 합니다:

### Vercel Dashboard에서 설정:

1. Vercel 프로젝트 페이지로 이동
2. **Settings** → **Environment Variables** 클릭
3. 다음 환경 변수 추가:

```
NEXT_PUBLIC_API_BASE_URL = https://msa-brain-gemini-173411279831.asia-northeast3.run.app
```

### CLI를 통한 설정:

```bash
vercel env add NEXT_PUBLIC_API_BASE_URL
# 값 입력: https://msa-brain-gemini-173411279831.asia-northeast3.run.app
```

## 배포 명령어

```bash
# 처음 배포
vercel

# 재배포
vercel --prod
```

## 문제 해결

### 405 Method Not Allowed 오류

- 환경 변수가 제대로 설정되었는지 확인
- API URL이 올바른지 확인
- Vercel 빌드 로그 확인

### undefined URL 문제

- `NEXT_PUBLIC_API_BASE_URL` 환경 변수가 설정되지 않았을 때 발생
- Vercel 대시보드에서 환경 변수 확인 필요

## 로컬 테스트

배포 전 로컬에서 프로덕션 빌드 테스트:

```bash
pnpm build
pnpm start
```
