import { getApiKey } from './localStorage';
import {
  SummarizeResponseSchema,
  SentimentResponseSchema,
  GenerateResponseSchema,
  ProcessTextResultSchema,
  SummarizeResponse,
  SentimentResponse,
  GenerateResponse,
  ProcessTextResult,
} from './apiSchemas';

export type { ProcessTextResult } from './apiSchemas';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const SUMMARIZE_ENDPOINT = process.env.NEXT_PUBLIC_SUMMARIZE_ENDPOINT || '/gemini/summarize';
const SENTIMENT_ENDPOINT = process.env.NEXT_PUBLIC_SENTIMENT_ENDPOINT || '/gemini/analyze_sentiment';
const GENERATE_ENDPOINT = process.env.NEXT_PUBLIC_GENERATE_ENDPOINT || '/gemini/generate_response';

const getHeaders = () => {
  const apiKey = getApiKey() || process.env.NEXT_PUBLIC_API_KEY;
  return {
    'Content-Type': 'application/json',
    'x-api-key': apiKey || '',
  };
};

export async function summarizeText(text: string): Promise<SummarizeResponse> {
  validateEnvironment();

  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('서비스 접근 키가 설정되지 않았습니다. 자물쇠 아이콘을 클릭하여 접근 키를 입력해주세요.');
  }

  const response = await fetch(`${API_BASE_URL}${SUMMARIZE_ENDPOINT}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error(`요약 API 오류: ${response.status}`);
  }

  const data = await response.json();
  return SummarizeResponseSchema.parse(data);
}

export async function analyzeSentiment(text: string): Promise<SentimentResponse> {
  validateEnvironment();

  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('서비스 접근 키가 설정되지 않았습니다. 자물쇠 아이콘을 클릭하여 접근 키를 입력해주세요.');
  }

  const response = await fetch(`${API_BASE_URL}${SENTIMENT_ENDPOINT}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error(`감정 분석 API 오류: ${response.status}`);
  }

  const data = await response.json();
  return SentimentResponseSchema.parse(data);
}

export async function generateResponse(text: string): Promise<GenerateResponse> {
  validateEnvironment();

  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('서비스 접근 키가 설정되지 않았습니다. 자물쇠 아이콘을 클릭하여 접근 키를 입력해주세요.');
  }

  const response = await fetch(`${API_BASE_URL}${GENERATE_ENDPOINT}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error(`응답 생성 API 오류: ${response.status}`);
  }

  const data = await response.json();
  return GenerateResponseSchema.parse(data);
}

export async function processText(text: string): Promise<ProcessTextResult> {
  try {
    // 세 API를 병렬로 호출
    const [summarizeResult, sentimentResult, responseResult] = await Promise.all([
      summarizeText(text),
      analyzeSentiment(text),
      generateResponse(text),
    ]);

    const result = {
      summary: summarizeResult.summary,
      keywords: summarizeResult.keywords,
      sentiment: sentimentResult.sentiment,
      aiResponse: responseResult.response,
    };
    return ProcessTextResultSchema.parse(result);
  } catch (error) {
    console.error('텍스트 처리 중 오류:', error);
    throw error;
  }
}
