import React from 'react';

interface TextInputAreaProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const TextInputArea: React.FC<TextInputAreaProps> = ({
  value,
  onChange,
  onSubmit,
  isLoading,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !isLoading) {
      onSubmit();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border" style={{ borderColor: '#e2e8f0' }}>
      <h2 className="text-xl font-bold mb-6" style={{ color: '#0f172a' }}>
        텍스트 입력
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="오늘의 생각이나 기록을 입력해보세요..."
            className="w-full h-32 p-4 rounded-lg resize-none outline-none transition-all duration-200 border-2 focus:shadow-md"
            style={{
              borderColor: '#e2e8f0',
              color: '#0f172a',
              backgroundColor: '#fafbfc'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            disabled={isLoading}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!value.trim() || isLoading}
            className="font-bold py-3 px-8 rounded-full transition-all duration-200 disabled:cursor-not-allowed transform hover:scale-105 shadow-md hover:shadow-lg"
            style={{
              background: !value.trim() || isLoading
                ? '#94a3b8'
                : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white'
            }}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                분석 중...
              </div>
            ) : (
              '분석 시작'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextInputArea;
