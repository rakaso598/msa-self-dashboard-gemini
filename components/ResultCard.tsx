import React from 'react';

interface ResultCardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  className?: string;
}

const ResultCard: React.FC<ResultCardProps> = ({
  title,
  content,
  icon,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3">{icon}</div>}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
        {content || '분석 결과가 여기에 표시됩니다.'}
      </div>
    </div>
  );
};

export default ResultCard;
