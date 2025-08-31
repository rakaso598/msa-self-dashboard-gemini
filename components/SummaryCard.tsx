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
    <Paper elevation={3} sx={{ borderRadius: 3, p: 3, height: '100%', bgcolor: 'background.paper', boxShadow: 2 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 22, marginRight: 12 }}>📄</span>
        <Typography variant="h6" fontWeight={700} color="text.primary" sx={{ fontSize: 20 }}>
          텍스트 요약 및 키워드
        </Typography>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Typography variant="subtitle2" fontWeight={600} color="text.secondary" mb={0.5} sx={{ fontSize: 15 }}>
          요약
        </Typography>
        <Paper variant="outlined" sx={{ borderRadius: 2, p: 2, bgcolor: 'grey.50', boxShadow: 0 }}>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: 16 }}>
            {summary || '요약 결과가 여기에 표시됩니다.'}
          </Typography>
        </Paper>
      </div>
      {keywords && <KeywordTags keywords={keywords} />}
    </Paper>
  );
};

export default SummaryCard;
