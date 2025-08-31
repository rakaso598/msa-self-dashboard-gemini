import React from 'react';
import AuthButton from './AuthButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8F8F8' }}>
      {/* 헤더 */}
      <Paper elevation={0} square sx={{ bgcolor: 'white', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight={700} color="text.primary">
              AI 자기계발 대시보드
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <AuthButton />
            <Typography variant="body2" color="text.secondary" fontWeight={500}>
              Powered by Gemini AI
            </Typography>
          </div>
        </div>
      </Paper>
      {/* 메인 콘텐츠 */}
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
