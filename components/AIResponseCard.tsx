import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

interface AIResponseCardProps {
  response: string;
}

const AIResponseCard: React.FC<AIResponseCardProps> = ({ response }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full transition-shadow hover:shadow-lg">
      <div className="flex items-center mb-6">
        <span className="text-xl mr-3">💡</span>
        <h3 className="text-xl font-bold text-gray-900">AI의 인사이트</h3>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 max-h-96 overflow-y-auto">
        {response ? (
          <MarkdownRenderer content={response} />
        ) : (
          <p className="text-gray-500 italic">AI 응답이 여기에 표시됩니다.</p>
        )}
      </div>
    </div>
  );
};

export default AIResponseCard;
