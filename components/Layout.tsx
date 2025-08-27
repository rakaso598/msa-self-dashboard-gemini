import React from 'react';
import AuthButton from './AuthButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fafbfc' }}>
      {/* 헤더 */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold" style={{ color: '#0f172a' }}>
                AI 셀프 분석 대시보드
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <AuthButton />
              <span className="text-sm font-medium" style={{ color: '#64748b' }}>
                Powered by Gemini AI
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
