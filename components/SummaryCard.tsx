import React from 'react';
import KeywordTags from './KeywordTags';

interface SummaryCardProps {
  summary: string;
  keywords: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary, keywords }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-full transition-all duration-300 hover:shadow-xl border"
      style={{ borderColor: '#e2e8f0' }}>
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
          style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}>
          <span className="text-white text-lg">📄</span>
        </div>
        <h3 className="text-xl font-bold" style={{ color: '#0f172a' }}>텍스트 요약 및 키워드</h3>
      </div>

      {/* 요약 섹션 */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3" style={{ color: '#475569' }}>요약</h4>
        <div className="rounded-xl p-4" style={{ backgroundColor: '#f8fafc' }}>
          <p className="leading-relaxed" style={{ color: '#0f172a' }}>
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
