import React from 'react';

interface ErrorDisplayProps {
  error: string;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
  return (
    <div className="text-center py-12">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
        <div className="text-red-600 text-4xl mb-4">⚠️</div>
        <div className="text-red-800 text-lg font-medium mb-2">
          분석에 실패했습니다
        </div>
        <div className="text-red-700 text-sm mb-4">
          {error}
        </div>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
          >
            다시 시도
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorDisplay;
