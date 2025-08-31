import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeywordTags from './KeywordTags';

interface SummaryCardProps {
  summary: string;
  keywords: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary, keywords }) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: 3, p: 3, height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <span style={{ fontSize: 22, marginRight: 12 }}>📄</span>
        <Typography variant="h6" fontWeight={700} color="text.primary">
          텍스트 요약 및 키워드
        </Typography>
      </div>
      <div style={{ marginBottom: 24 }}>
        <Typography variant="subtitle2" fontWeight={600} color="text.secondary" mb={1}>
          요약
        </Typography>
        <Paper variant="outlined" sx={{ borderRadius: 2, p: 2, backgroundColor: '#f8fafc' }}>
          <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
            {summary || '요약 결과가 여기에 표시됩니다.'}
          </Typography>
        </Paper>
      </div>
      {keywords && <KeywordTags keywords={keywords} />}
    </Paper>
  );
};

export default SummaryCard;
