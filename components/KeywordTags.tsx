import React from 'react';

interface KeywordTagsProps {
  keywords: string;
}

const KeywordTags: React.FC<KeywordTagsProps> = ({ keywords }) => {
  if (!keywords) return null;

  // 키워드를 쉼표, 세미콜론, 줄바꿈 등으로 분리
  const keywordList = keywords
    .split(/[,;.\n]/)
    .map(keyword => keyword.trim())
    .filter(keyword => keyword.length > 0);

  if (keywordList.length === 0) return null;

  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold mb-3" style={{ color: '#475569' }}>추출된 키워드</h4>
      <div className="flex flex-wrap gap-2">
        {keywordList.map((keyword, index) => (
          <span
            key={index}
            className="inline-flex items-center text-sm py-1 px-3 rounded-full font-medium transition-all duration-200 hover:shadow-md cursor-pointer"
            style={{
              backgroundColor: '#e0f2fe',
              color: '#0369a1',
              border: '1px solid #bae6fd'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = '#0ea5e9';
              target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = '#e0f2fe';
              target.style.color = '#0369a1';
            }}
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordTags;
