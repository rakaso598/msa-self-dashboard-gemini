import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

interface TextInputAreaProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const TextInputArea: React.FC<TextInputAreaProps> = ({
  value,
  onChange,
  onSubmit,
  isLoading,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !isLoading) {
      onSubmit();
    }
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: 3, p: 4, mb: 4 }}>
      <Typography variant="h6" fontWeight={700} mb={3} color="text.primary">
        텍스트 입력
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="오늘의 생각이나 기록을 입력해보세요..."
          minRows={5}
          fullWidth
          disabled={isLoading}
          sx={{ mb: 3, backgroundColor: '#fafbfc', borderRadius: 2 }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            type="submit"
            disabled={!value.trim() || isLoading}
          >
            {isLoading ? '분석 중...' : '분석 시작'}
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default TextInputArea;
