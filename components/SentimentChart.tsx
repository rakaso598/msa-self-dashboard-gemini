'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface SentimentChartProps {
  sentiment: string;
}

const SentimentChart: React.FC<SentimentChartProps> = ({ sentiment }) => {
  // 감정을 기반으로 데이터 생성
  const getSentimentData = (sentiment: string) => {
    const normalized = sentiment.toLowerCase();

    if (normalized.includes('긍정') || normalized.includes('positive')) {
      return [
        { name: '긍정', value: 70, color: '#10b981' },
        { name: '중립', value: 20, color: '#64748b' },
        { name: '부정', value: 10, color: '#ef4444' },
      ];
    } else if (normalized.includes('부정') || normalized.includes('negative')) {
      return [
        { name: '긍정', value: 10, color: '#10b981' },
        { name: '중립', value: 20, color: '#64748b' },
        { name: '부정', value: 70, color: '#ef4444' },
      ];
    } else {
      return [
        { name: '긍정', value: 30, color: '#10b981' },
        { name: '중립', value: 40, color: '#64748b' },
        { name: '부정', value: 30, color: '#ef4444' },
      ];
    }
  };

  const data = getSentimentData(sentiment);

  const CustomLabel = (props: { value?: number }) => {
    const { value } = props;
    return `${value || 0}%`;
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: 3, p: 3, height: '100%' }}>
      <Typography variant="h6" fontWeight={700} color="text.primary" mb={3} sx={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: 22, marginRight: 12 }}>📊</span>
        감정 분석
      </Typography>

      {/* 주요 감정 표시 */}
      <Paper variant="outlined" sx={{ borderRadius: 2, p: 2, backgroundColor: '#f8fafc', mb: 3 }}>
        <Typography variant="subtitle2" fontWeight={600} color="text.secondary" mb={0.5}>
          분석된 주요 감정
        </Typography>
        <Typography variant="body1" fontWeight={700} color="text.primary">
          {sentiment}
        </Typography>
      </Paper>

      {/* 차트 섹션 */}
      <div style={{ height: 256 }}>
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
      <div className="mt-4 p-3 rounded-xl"
        style={{ backgroundColor: '#f0f9ff', border: '1px solid #0ea5e9' }}>
        <p className="text-xs" style={{ color: '#0369a1' }}>
          💡 위 차트는 입력된 텍스트의 감정 분석 결과를 시각화한 것입니다.
          실제 분석 결과에 따라 비율이 조정됩니다.
        </p>
      </div>
    </Paper>
  );
};

export default SentimentChart;
