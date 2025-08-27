import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (!content) return null;

  // 간단한 마크다운 파싱 (굵은 글씨, 기울임, 리스트)
  const processMarkdown = (text: string) => {
    return text
      // 굵은 글씨 **text** 또는 __text__
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.*?)__/g, '<strong>$1</strong>')
      // 기울임 *text* 또는 _text_
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      // 줄바꿈
      .replace(/\n/g, '<br/>');
  };

  // 리스트 항목 처리
  const processLists = (text: string) => {
    const lines = text.split('\n');
    let inList = false;
    let result = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.match(/^[-*+]\s/)) {
        if (!inList) {
          result += '<ul class="list-disc list-inside mt-2 space-y-1">';
          inList = true;
        }
        const listItem = line.replace(/^[-*+]\s/, '');
        result += `<li class="text-gray-700">${processMarkdown(listItem)}</li>`;
      } else if (line.match(/^\d+\.\s/)) {
        if (!inList) {
          result += '<ol class="list-decimal list-inside mt-2 space-y-1">';
          inList = true;
        }
        const listItem = line.replace(/^\d+\.\s/, '');
        result += `<li class="text-gray-700">${processMarkdown(listItem)}</li>`;
      } else {
        if (inList) {
          result += inList ? '</ul>' : '</ol>';
          inList = false;
        }
        if (line) {
          result += `<p class="mb-2">${processMarkdown(line)}</p>`;
        }
      }
    }

    if (inList) {
      result += '</ul>';
    }

    return result;
  };

  const htmlContent = processLists(content);

  return (
    <div
      className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownRenderer;
