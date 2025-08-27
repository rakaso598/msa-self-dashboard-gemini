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
      <h4 className="text-sm font-semibold text-gray-700 mb-3">추출된 키워드</h4>
      <div className="flex flex-wrap gap-2">
        {keywordList.map((keyword, index) => (
          <span
            key={index}
            className="inline-flex items-center bg-gray-200 text-gray-800 text-sm py-1 px-3 rounded-full font-medium transition-all hover:bg-gray-300"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordTags;
