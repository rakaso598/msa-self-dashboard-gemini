import React from 'react';
import KeywordTags from './KeywordTags';

interface SummaryCardProps {
  summary: string;
  keywords: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary, keywords }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full transition-shadow hover:shadow-lg">
      <div className="flex items-center mb-6">
        <span className="text-xl mr-3">📄</span>
        <h3 className="text-xl font-bold text-gray-900">텍스트 요약 및 키워드</h3>
      </div>

      {/* 요약 섹션 */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">요약</h4>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-gray-700 leading-relaxed">
            {summary || '요약 결과가 여기에 표시됩니다.'}
          </p>
        </div>
      </div>

      {/* 키워드 태그 섹션 */}
      {keywords && <KeywordTags keywords={keywords} />}
    </div>
  );
};

export default SummaryCard;
