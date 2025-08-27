'use client';

import React, { useState } from 'react';
import { saveApiKey } from '../utils/localStorage';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (apiKey: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSave }) => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" 
         style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4 border" 
           style={{ borderColor: '#e2e8f0' }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: '#0f172a' }}>서비스 접근 키 설정</h2>
          <button
            onClick={handleClose}
            className="text-2xl transition-colors duration-200 hover:shadow-md rounded-full w-8 h-8 flex items-center justify-center"
            style={{ color: '#64748b' }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#f1f5f9'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <p className="mb-3 leading-relaxed" style={{ color: '#475569' }}>
            서비스 이용을 위한 접근 키를 입력해주세요. 입력한 키는 브라우저에 안전하게 저장됩니다.
          </p>
          <p className="text-sm" style={{ color: '#64748b' }}>
            접근 키는 로컬 저장소에만 저장되며 서버로 전송되지 않습니다.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="apiKey" className="block text-sm font-semibold mb-3" style={{ color: '#475569' }}>
              서비스 접근 키
            </label>
            <input
              type="password"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="여기에 서비스 접근 키를 입력하세요..."
              className="w-full px-4 py-3 rounded-xl transition-all duration-200 border-2"
              style={{ 
                borderColor: '#e2e8f0',
                color: '#0f172a',
                backgroundColor: '#fafbfc'
              }}
              onFocus={(e) => (e.target as HTMLElement).style.borderColor = '#3b82f6'}
              onBlur={(e) => (e.target as HTMLElement).style.borderColor = '#e2e8f0'}
              disabled={isLoading}
              required
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-md"
              style={{ 
                color: '#475569',
                backgroundColor: '#f1f5f9',
                border: '1px solid #e2e8f0'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#e2e8f0'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#f1f5f9'}
              disabled={isLoading}
            >
              취소
            </button>
            <button
              type="submit"
              disabled={!apiKey.trim() || isLoading}
              className="px-6 py-3 text-sm font-bold text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed"
              style={{
                background: !apiKey.trim() || isLoading 
                  ? '#94a3b8' 
                  : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
              }}
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
