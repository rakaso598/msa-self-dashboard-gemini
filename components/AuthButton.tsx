'use client';

import React, { useState, useEffect } from 'react';
import { hasApiKey, removeApiKey } from '../utils/localStorage';
import AuthModal from './AuthModal';

const AuthButton: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setIsAuthenticated(hasApiKey());
  }, []);

  const handleApiKeySave = () => {
    setIsAuthenticated(true);
    // 다른 컴포넌트들이 변경을 감지할 수 있도록 사용자 정의 이벤트 발생
    window.dispatchEvent(new Event('apiKeyChanged'));
  };

  const handleRemoveApiKey = () => {
    removeApiKey();
    setIsAuthenticated(false);
    setShowDropdown(false);
    // 다른 컴포넌트들이 변경을 감지할 수 있도록 사용자 정의 이벤트 발생
    window.dispatchEvent(new Event('apiKeyChanged'));
  };

  const handleButtonClick = () => {
    if (isAuthenticated) {
      setShowDropdown(!showDropdown);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleButtonClick}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
          isAuthenticated
            ? 'hover:shadow-md'
            : 'hover:shadow-md'
        }`}
        style={{
          backgroundColor: isAuthenticated ? '#f0f9ff' : '#fef7f0',
          color: isAuthenticated ? '#0369a1' : '#ea580c',
          border: `1px solid ${isAuthenticated ? '#bae6fd' : '#fed7aa'}`
        }}
        title={isAuthenticated ? '서비스 접근 키 설정됨' : '서비스 접근 키 설정 필요'}
      >
        <span className="text-xl">
          {isAuthenticated ? '🔓' : '🔒'}
        </span>
      </button>

      {/* 드롭다운 메뉴 */}
      {showDropdown && isAuthenticated && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-10" 
             style={{ borderColor: '#e2e8f0' }}>
          <div className="py-1">
            <button
              onClick={() => {
                setIsModalOpen(true);
                setShowDropdown(false);
              }}
              className="block px-4 py-2 text-sm w-full text-left transition-colors duration-200"
              style={{ color: '#475569' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#f8fafc'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            >
              접근 키 변경
            </button>
            <button
              onClick={handleRemoveApiKey}
              className="block px-4 py-2 text-sm w-full text-left transition-colors duration-200"
              style={{ color: '#ef4444' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#fef2f2'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            >
              접근 키 삭제
            </button>
          </div>
        </div>
      )}

      {/* 외부 클릭 감지 */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setShowDropdown(false)}
        />
      )}

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleApiKeySave}
      />
    </div>
  );
};

export default AuthButton;
