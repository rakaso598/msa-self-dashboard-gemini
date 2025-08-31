import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface ResultCardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  className?: string;
}

const ResultCard: React.FC<ResultCardProps> = ({
  title,
  content,
  icon,
  className = '',
}) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: 3, p: 3, mb: 2 }} className={className}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        {icon && <div style={{ marginRight: 12 }}>{icon}</div>}
        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
          {title}
        </Typography>
      </div>
      <Typography color="text.secondary" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
        {content || '분석 결과가 여기에 표시됩니다.'}
      </Typography>
    </Paper>
  );
};

export default ResultCard;
