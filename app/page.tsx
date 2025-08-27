'use client';

import React, { useState } from 'react';
import Layout from '../components/Layout';
import TextInputArea from '../components/TextInputArea';
import DashboardCards from '../components/DashboardCards';
import { processText, ProcessTextResult } from '../utils/api';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState<ProcessTextResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await processText(inputText);
      setResults(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      console.error('텍스트 처리 오류:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* 텍스트 입력 영역 */}
        <TextInputArea
          value={inputText}
          onChange={setInputText}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        {/* 오류 메시지 */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-red-400">⚠️</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  오류가 발생했습니다
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  {error}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 대시보드 카드들 */}
        <DashboardCards results={results} isLoading={isLoading} />
      </div>
    </Layout>
  );
}
