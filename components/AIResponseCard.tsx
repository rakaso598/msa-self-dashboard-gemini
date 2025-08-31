import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MarkdownRenderer from './MarkdownRenderer';

interface AIResponseCardProps {
  response: string;
}

const AIResponseCard: React.FC<AIResponseCardProps> = ({ response }) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: 3, p: 3, height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <span style={{ fontSize: 22, marginRight: 12 }}>💡</span>
        <Typography variant="h6" fontWeight={700} color="text.primary">
          AI의 인사이트
        </Typography>
      </div>
      <Paper
        variant="outlined"
        sx={{
          borderRadius: 2,
          p: 2,
          background:
            'linear-gradient(90deg, #ede9fe 0%, #e0f2fe 100%)',
          maxHeight: 320,
          overflowY: 'auto',
        }}
      >
        {response ? (
          <MarkdownRenderer content={response} />
        ) : (
          <Typography color="text.secondary" fontStyle="italic">
            AI 응답이 여기에 표시됩니다.
          </Typography>
        )}
      </Paper>
    </Paper>
  );
};

export default AIResponseCard;
