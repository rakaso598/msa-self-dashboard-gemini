import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

interface AIResponseCardProps {
  response: string;
}

const AIResponseCard: React.FC<AIResponseCardProps> = ({ response }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-full transition-all duration-300 hover:shadow-xl border"
      style={{ borderColor: '#e2e8f0' }}>
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
          style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }}>
          <span className="text-white text-lg">💡</span>
        </div>
        <h3 className="text-xl font-bold" style={{ color: '#0f172a' }}>AI의 인사이트</h3>
      </div>

      <div className="rounded-xl p-4 max-h-96 overflow-y-auto border"
        style={{
          background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
          borderColor: '#e2e8f0'
        }}>
        {response ? (
          <MarkdownRenderer content={response} />
        ) : (
          <p className="italic" style={{ color: '#64748b' }}>AI 응답이 여기에 표시됩니다.</p>
        )}
      </div>
    </div>
  );
};

export default AIResponseCard;
