import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface KeywordTagsProps {
  keywords: string;
}

const KeywordTags: React.FC<KeywordTagsProps> = ({ keywords }) => {
  if (!keywords) return null;

  const keywordList = keywords
    .split(/[,;.\n]/)
    .map(keyword => keyword.trim())
    .filter(keyword => keyword.length > 0);

  if (keywordList.length === 0) return null;

  return (
    <div style={{ marginTop: 12 }}>
      <Typography variant="subtitle2" fontWeight={600} color="text.secondary" mb={0.5} sx={{ fontSize: 15 }}>
        추출된 키워드
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {keywordList.map((keyword, index) => (
          <Paper
            key={index}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              bgcolor: 'grey.200',
              color: 'text.primary',
              fontSize: 14,
              py: 0.5,
              px: 2,
              borderRadius: 999,
              fontWeight: 500,
              boxShadow: 0,
            }}
          >
            {keyword}
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default KeywordTags;
