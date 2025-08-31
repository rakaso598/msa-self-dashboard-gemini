import { z } from 'zod';

export const SummarizeResponseSchema = z.object({
  summary: z.string(),
  keywords: z.string().optional().default(''),
});

export const SentimentResponseSchema = z.object({
  sentiment: z.string(),
});

export const GenerateResponseSchema = z.object({
  response: z.string(),
});

export const ProcessTextResultSchema = z.object({
  summary: z.string(),
  keywords: z.string().optional().default(''),
  sentiment: z.string(),
  aiResponse: z.string(),
});

export type SummarizeResponse = z.infer<typeof SummarizeResponseSchema>;
export type SentimentResponse = z.infer<typeof SentimentResponseSchema>;
export type GenerateResponse = z.infer<typeof GenerateResponseSchema>;
export type ProcessTextResult = z.infer<typeof ProcessTextResultSchema>;
