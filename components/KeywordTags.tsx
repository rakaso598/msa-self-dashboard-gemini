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
    <div className="mt-3">
      <h4 className="text-sm font-medium text-gray-700 mb-2">추출된 키워드</h4>
      <div className="flex flex-wrap gap-2">
        {keywordList.map((keyword, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordTags;
