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
        className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${isAuthenticated
          ? 'text-green-700 hover:bg-green-50'
          : 'text-red-700 hover:bg-red-50'
          }`}
        title={isAuthenticated ? '서비스 접근 키 설정됨' : '서비스 접근 키 설정 필요'}
      >
        <span className="text-lg">
          {isAuthenticated ? '🔓' : '🔒'}
        </span>
        <span className="text-sm font-medium hidden sm:block">
          {isAuthenticated ? '접근 키 설정됨' : '접근 키 설정'}
        </span>
      </button>

      {/* 드롭다운 메뉴 */}
      {showDropdown && isAuthenticated && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
          <div className="py-1">
            <button
              onClick={() => {
                setIsModalOpen(true);
                setShowDropdown(false);
              }}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              접근 키 변경
            </button>
            <button
              onClick={handleRemoveApiKey}
              className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
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
