import React, { useEffect, useState } from 'react';
import ResultCard from './ResultCard';
import SentimentChart from './SentimentChart';
import { ProcessTextResult } from '../utils/api';
import { hasApiKey } from '../utils/localStorage';

interface DashboardCardsProps {
  results: ProcessTextResult | null;
  isLoading: boolean;
}

const DashboardCards: React.FC<DashboardCardsProps> = ({ results, isLoading }) => {
  const [isApiKeySet, setIsApiKeySet] = useState(false);

  useEffect(() => {
    setIsApiKeySet(hasApiKey());
  }, []);

  if (!isApiKeySet) {
    return (
      <div className="text-center py-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
          <div className="text-yellow-600 text-4xl mb-4">🔒</div>
          <div className="text-yellow-800 text-lg font-medium mb-2">
            API 키 설정이 필요합니다
          </div>
          <div className="text-yellow-700 text-sm">
            헤더의 자물쇠 아이콘을 클릭하여 Gemini API 키를 설정해주세요.
          </div>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!results) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">
          📝 텍스트를 입력하고 분석을 시작해보세요
        </div>
        <div className="text-gray-400 text-sm">
          AI가 요약, 감정 분석, 응답을 생성해드립니다
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 요약 카드 */}
      <ResultCard
        title="텍스트 요약"
        content={results.summary}
        icon={<span className="text-blue-500">📄</span>}
      />

      {/* 키워드 카드 */}
      <ResultCard
        title="키워드"
        content={results.keywords}
        icon={<span className="text-green-500">🔑</span>}
      />

      {/* 감정 분석 차트 */}
      <div className="lg:col-span-2">
        <SentimentChart sentiment={results.sentiment} />
      </div>

      {/* AI 응답 카드 */}
      <div className="lg:col-span-2">
        <ResultCard
          title="AI 응답"
          content={results.aiResponse}
          icon={<span className="text-purple-500">🤖</span>}
        />
      </div>
    </div>
  );
};

export default DashboardCards;
