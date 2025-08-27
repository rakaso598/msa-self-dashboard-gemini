const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const headers = {
  'Content-Type': 'application/json',
  'x-api-key': API_KEY || '',
};

export interface SummarizeResponse {
  summary: string;
  keywords: string;
}

export interface SentimentResponse {
  sentiment: string;
}

export interface GenerateResponse {
  response: string;
}

export interface ProcessTextResult {
  summary: string;
  keywords: string;
  sentiment: string;
  aiResponse: string;
}

export async function summarizeText(text: string): Promise<SummarizeResponse> {
  const response = await fetch(`${API_BASE_URL}/gemini/summarize`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error(`요약 API 오류: ${response.status}`);
  }

  return response.json();
}

export async function analyzeSentiment(text: string): Promise<SentimentResponse> {
  const response = await fetch(`${API_BASE_URL}/gemini/analyze_sentiment`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error(`감정 분석 API 오류: ${response.status}`);
  }

  return response.json();
}

export async function generateResponse(text: string): Promise<GenerateResponse> {
  const response = await fetch(`${API_BASE_URL}/gemini/generate_response`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error(`응답 생성 API 오류: ${response.status}`);
  }

  return response.json();
}

export async function processText(text: string): Promise<ProcessTextResult> {
  try {
    // 세 API를 병렬로 호출
    const [summarizeResult, sentimentResult, responseResult] = await Promise.all([
      summarizeText(text),
      analyzeSentiment(text),
      generateResponse(text),
    ]);

    return {
      summary: summarizeResult.summary,
      keywords: summarizeResult.keywords,
      sentiment: sentimentResult.sentiment,
      aiResponse: responseResult.response,
    };
  } catch (error) {
    console.error('텍스트 처리 중 오류:', error);
    throw error;
  }
}
