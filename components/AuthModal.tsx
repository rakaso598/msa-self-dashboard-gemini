'use client';

import React, { useState, useEffect } from 'react';
import { saveApiKey } from '../utils/localStorage';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
    <Dialog open={isOpen} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, color: 'text.primary' }}>서비스 접근 키 설정</DialogTitle>
      <DialogContent>
        <Typography color="text.secondary" mb={1}>
          서비스 이용을 위한 접근 키를 입력해주세요. 입력한 키는 브라우저에 안전하게 저장됩니다.
        </Typography>
        <Typography color="text.secondary" fontSize={13} mb={3}>
          접근 키는 로컬 저장소에만 저장되며 서버로 전송되지 않습니다.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="여기에 서비스 접근 키를 입력하세요..."
            fullWidth
            disabled={isLoading}
            required
            sx={{ mb: 3, borderRadius: 2 }}
          />
          <DialogActions sx={{ p: 0, justifyContent: 'flex-end' }}>
            <Button onClick={handleClose} color="inherit" disabled={isLoading}
              sx={{ fontWeight: 600, borderRadius: 2 }}>
              취소
            </Button>
            <Button type="submit" variant="contained" color="primary" disabled={!apiKey.trim() || isLoading}
              sx={{ fontWeight: 700, borderRadius: 2 }}>
              {isLoading ? '저장 중...' : '저장'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
