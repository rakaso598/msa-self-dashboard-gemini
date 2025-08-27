'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface SentimentChartProps {
  sentiment: string;
}

const SentimentChart: React.FC<SentimentChartProps> = ({ sentiment }) => {
  // 감정을 기반으로 데이터 생성
  const getSentimentData = (sentiment: string) => {
    const normalized = sentiment.toLowerCase();

    if (normalized.includes('긍정') || normalized.includes('positive')) {
      return [
        { name: '긍정', value: 70, color: '#0088FE' },
        { name: '중립', value: 20, color: '#FFBB28' },
        { name: '부정', value: 10, color: '#FF8042' },
      ];
    } else if (normalized.includes('부정') || normalized.includes('negative')) {
      return [
        { name: '긍정', value: 10, color: '#0088FE' },
        { name: '중립', value: 20, color: '#FFBB28' },
        { name: '부정', value: 70, color: '#FF8042' },
      ];
    } else {
      return [
        { name: '긍정', value: 30, color: '#0088FE' },
        { name: '중립', value: 40, color: '#FFBB28' },
        { name: '부정', value: 30, color: '#FF8042' },
      ];
    }
  };

  const data = getSentimentData(sentiment);

  const CustomLabel = (props: { value?: number }) => {
    const { value } = props;
    return `${value || 0}%`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full transition-shadow hover:shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="mr-3">📊</span>
        감정 분석
      </h3>

      {/* 주요 감정 표시 */}
      <div className="mb-6 p-4 bg-gray-50 rounded-xl">
        <p className="text-sm font-semibold text-gray-700 mb-1">분석된 주요 감정</p>
        <p className="text-lg font-bold text-gray-900">{sentiment}</p>
      </div>

      {/* 차트 섹션 */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={CustomLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: entry.color }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 부가 설명 */}
      <div className="mt-4 p-3 bg-blue-50 rounded-xl">
        <p className="text-xs text-blue-700">
          💡 위 차트는 입력된 텍스트의 감정 분석 결과를 시각화한 것입니다.
          실제 분석 결과에 따라 비율이 조정됩니다.
        </p>
      </div>
    </div>
  );
};

export default SentimentChart;
