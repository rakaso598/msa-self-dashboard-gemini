import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

interface ErrorDisplayProps {
  error: string;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
  return (
    <div style={{ textAlign: 'center', padding: '48px 0' }}>
      <Paper elevation={2} sx={{ borderRadius: 3, p: 4, maxWidth: 400, mx: 'auto', backgroundColor: '#fff7f7', border: '1px solid #fde0e0' }}>
        <WarningAmberIcon sx={{ color: '#ef4444', fontSize: 40, mb: 2 }} />
        <Typography variant="h6" color="#b91c1c" fontWeight={600} mb={1}>
          분석에 실패했습니다
        </Typography>
        <Typography color="#dc2626" fontSize={15} mb={2}>
          {error}
        </Typography>
        {onRetry && (
          <Button
            onClick={onRetry}
            variant="contained"
            color="error"
            sx={{ borderRadius: 2, fontWeight: 600 }}
          >
            다시 시도
          </Button>
        )}
      </Paper>
    </div>
  );
};

export default ErrorDisplay;
