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
    <div style={{ marginTop: 16 }}>
      <Typography variant="subtitle2" fontWeight={600} color="text.secondary" mb={1}>
        추출된 키워드
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {keywordList.map((keyword, index) => (
          <Paper
            key={index}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#e0e7ef',
              color: '#334155',
              fontSize: 14,
              py: 0.5,
              px: 2,
              borderRadius: 999,
              fontWeight: 500,
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
