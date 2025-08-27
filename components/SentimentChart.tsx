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
        { name: '긍정', value: 70, color: '#10B981' },
        { name: '중립', value: 20, color: '#6B7280' },
        { name: '부정', value: 10, color: '#EF4444' },
      ];
    } else if (normalized.includes('부정') || normalized.includes('negative')) {
      return [
        { name: '긍정', value: 10, color: '#10B981' },
        { name: '중립', value: 20, color: '#6B7280' },
        { name: '부정', value: 70, color: '#EF4444' },
      ];
    } else {
      return [
        { name: '긍정', value: 30, color: '#10B981' },
        { name: '중립', value: 40, color: '#6B7280' },
        { name: '부정', value: 30, color: '#EF4444' },
      ];
    }
  };

  const data = getSentimentData(sentiment);

  const CustomLabel = (props: { value?: number }) => {
    const { value } = props;
    return `${value || 0}%`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <span className="mr-3">📊</span>
        감정 분석
      </h3>

      <div className="mb-4">
        <p className="text-gray-700 font-medium">분석 결과: {sentiment}</p>
      </div>

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
    </div>
  );
};

export default SentimentChart;
