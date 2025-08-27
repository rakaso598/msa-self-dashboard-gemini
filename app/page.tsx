'use client';

import React, { useState } from 'react';
import Layout from '../components/Layout';
import TextInputArea from '../components/TextInputArea';
import DashboardCards from '../components/DashboardCards';
import ErrorDisplay from '../components/ErrorDisplay';
import FeatureGuide from '../components/FeatureGuide';
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

  const handleRetry = () => {
    setError(null);
    handleSubmit();
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* 기능 안내 섹션 */}
        <FeatureGuide />

        {/* 텍스트 입력 영역 */}
        <TextInputArea
          value={inputText}
          onChange={setInputText}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        {/* 오류 메시지 */}
        {error && (
          <ErrorDisplay
            error={error}
            onRetry={inputText.trim() ? handleRetry : undefined}
          />
        )}

        {/* 대시보드 카드들 */}
        {!error && <DashboardCards results={results} isLoading={isLoading} />}
      </div>
    </Layout>
  );
}
