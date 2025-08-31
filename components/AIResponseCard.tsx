import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MarkdownRenderer from './MarkdownRenderer';

interface AIResponseCardProps {
  response: string;
}

const AIResponseCard: React.FC<AIResponseCardProps> = ({ response }) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: 3, p: 3, height: '100%', bgcolor: 'background.paper', boxShadow: 2 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 22, marginRight: 12 }}>💡</span>
        <Typography variant="h6" fontWeight={700} color="text.primary" sx={{ fontSize: 20 }}>
          AI의 인사이트
        </Typography>
      </div>
      <Paper
        variant="outlined"
        sx={{
          borderRadius: 2,
          p: 2,
          bgcolor: 'grey.50',
          maxHeight: 320,
          overflowY: 'auto',
          boxShadow: 0,
        }}
      >
        {response ? (
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: 16 }}>
            <MarkdownRenderer content={response} />
          </Typography>
        ) : (
          <Typography color="text.secondary" fontStyle="italic" variant="body1" sx={{ fontSize: 16 }}>
            AI 응답이 여기에 표시됩니다.
          </Typography>
        )}
      </Paper>
    </Paper>
  );
};

export default AIResponseCard;
