'use client';

import React, { useState, useEffect } from 'react';
import { saveApiKey } from '../utils/localStorage';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (apiKey: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSave }) => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 모달이 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // 컴포넌트 언마운트 시 정리
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) return;

    setIsLoading(true);
    try {
      saveApiKey(apiKey.trim());
      onSave(apiKey.trim());
      setApiKey('');
      onClose();
    } catch (error) {
      console.error('API 키 저장 오류:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setApiKey('');
    onClose();
  };

  // 배경 클릭 시 모달 닫기
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        zIndex: 9999
      }}
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4 border relative"
        style={{
          borderColor: '#e2e8f0',
          zIndex: 10000
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">서비스 접근 키 설정</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-2xl transition-colors"
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-3 leading-relaxed">
            서비스 이용을 위한 접근 키를 입력해주세요. 입력한 키는 브라우저에 안전하게 저장됩니다.
          </p>
          <p className="text-sm text-gray-500">
            접근 키는 로컬 저장소에만 저장되며 서버로 전송되지 않습니다.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="apiKey" className="block text-sm font-semibold text-gray-700 mb-3">
              서비스 접근 키
            </label>
            <input
              type="password"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="여기에 서비스 접근 키를 입력하세요..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              disabled={isLoading}
              required
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              disabled={isLoading}
            >
              취소
            </button>
            <button
              type="submit"
              disabled={!apiKey.trim() || isLoading}
              className="px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-105"
            >
              {isLoading ? '저장 중...' : '저장'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
