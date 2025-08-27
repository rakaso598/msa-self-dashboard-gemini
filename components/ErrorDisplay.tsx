import React from 'react';

interface ErrorDisplayProps {
  error: string;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
  return (
    <div className="text-center py-12">
      <div className="rounded-lg p-6 max-w-md mx-auto border shadow-md" 
           style={{ 
             backgroundColor: '#fef2f2', 
             borderColor: '#ef4444' 
           }}>
        <div className="text-4xl mb-4" style={{ color: '#ef4444' }}>⚠️</div>
        <div className="text-lg font-medium mb-2" style={{ color: '#0f172a' }}>
          분석에 실패했습니다
        </div>
        <div className="text-sm mb-4" style={{ color: '#475569' }}>
          {error}
        </div>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: 'white',
              border: 'none'
            }}
            onFocus={(e) => (e.target as HTMLElement).style.boxShadow = '0 0 0 2px #ef4444'}
            onBlur={(e) => (e.target as HTMLElement).style.boxShadow = 'none'}
          >
            다시 시도
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorDisplay;
