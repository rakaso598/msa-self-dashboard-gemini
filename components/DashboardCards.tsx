import React, { useEffect, useState } from 'react';
import SummaryCard from './SummaryCard';
import SentimentChart from './SentimentChart';
import AIResponseCard from './AIResponseCard';
import { ProcessTextResult } from '../utils/api';
import { hasApiKey } from '../utils/localStorage';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';

interface DashboardCardsProps {
  results: ProcessTextResult | null;
  isLoading: boolean;
}

const DashboardCards: React.FC<DashboardCardsProps> = ({ results, isLoading }) => {
  const [isApiKeySet, setIsApiKeySet] = useState(false);

  useEffect(() => {
    const checkApiKey = () => {
      setIsApiKeySet(hasApiKey());
    };

    checkApiKey();

    // localStorage 변경을 감지하기 위한 이벤트 리스너
    window.addEventListener('storage', checkApiKey);

    // API 키 변경을 감지하기 위한 사용자 정의 이벤트 리스너
    window.addEventListener('apiKeyChanged', checkApiKey);

    // 컴포넌트가 포커스를 받을 때마다 체크
    window.addEventListener('focus', checkApiKey);

    return () => {
      window.removeEventListener('storage', checkApiKey);
      window.removeEventListener('apiKeyChanged', checkApiKey);
      window.removeEventListener('focus', checkApiKey);
    };
  }, []);

  // results가 있으면 API 키가 설정되어 있다고 가정
  useEffect(() => {
    if (results) {
      setIsApiKeySet(true);
    }
  }, [results]);

  if (!isApiKeySet) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 0' }}>
        <Paper elevation={2} sx={{ borderRadius: 3, p: 4, maxWidth: 400, mx: 'auto', backgroundColor: '#fffbe6', border: '1px solid #ffe58f' }}>
          <LockIcon sx={{ color: '#f59e0b', fontSize: 40, mb: 2 }} />
          <Typography variant="h6" color="#b45309" fontWeight={600} mb={1}>
            서비스 접근 키 설정이 필요합니다
          </Typography>
          <Typography color="#b45309" fontSize={15}>
            헤더의 자물쇠 아이콘을 클릭하여 서비스 접근 키를 설정해주세요.
          </Typography>
        </Paper>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Paper key={i} elevation={2} sx={{ borderRadius: 3, p: 4, backgroundColor: '#f4f6fa' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ height: 24, width: 24, background: '#e2e8f0', borderRadius: 6, marginRight: 12 }} />
              <div style={{ height: 24, background: '#e2e8f0', borderRadius: 6, width: '33%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ height: 16, background: '#e2e8f0', borderRadius: 6 }} />
              <div style={{ height: 16, background: '#e2e8f0', borderRadius: 6, width: '83%' }} />
              <div style={{ height: 16, background: '#e2e8f0', borderRadius: 6, width: '66%' }} />
            </div>
          </Paper>
        ))}
      </div>
    );
  }

  if (!results) {
    return (
      <div className="text-center py-12">
        <div className="text-lg mb-2" style={{ color: '#475569' }}>
          📝 텍스트를 입력하고 분석을 시작해보세요
        </div>
        <div className="text-sm" style={{ color: '#64748b' }}>
          AI가 요약, 감정 분석, 응답을 생성해드립니다
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 요약 & 키워드 카드 */}
      <div className="transform transition-transform hover:scale-105">
        <SummaryCard
          summary={results.summary}
          keywords={results.keywords}
        />
      </div>

      {/* 감정 분석 차트 */}
      <div className="transform transition-transform hover:scale-105">
        <SentimentChart sentiment={results.sentiment} />
      </div>

      {/* AI 응답 카드 */}
      <div className="transform transition-transform hover:scale-105">
        <AIResponseCard response={results.aiResponse} />
      </div>
    </div>
  );
};

export default DashboardCards;
