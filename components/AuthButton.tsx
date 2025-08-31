'use client';

import React, { useState, useEffect } from 'react';
import { hasApiKey, removeApiKey } from '../utils/localStorage';
import AuthModal from './AuthModal';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const AuthButton: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isAuthenticated) {
      setAnchorEl(event.currentTarget);
      setShowDropdown(!showDropdown);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <Button
        onClick={handleButtonClick}
        variant="outlined"
        color={isAuthenticated ? 'primary' : 'inherit'}
        sx={{ minWidth: 40, minHeight: 40, borderRadius: '50%', p: 0, borderColor: isAuthenticated ? '#bae6fd' : '#fed7aa' }}
        title={isAuthenticated ? '서비스 접근 키 설정됨' : '서비스 접근 키 설정 필요'}
      >
        {isAuthenticated ? <LockOpenIcon fontSize="medium" color="primary" /> : <LockIcon fontSize="medium" color="disabled" />}
      </Button>
      <Popover
        open={Boolean(anchorEl) && isAuthenticated && showDropdown}
        anchorEl={anchorEl}
        onClose={() => { setAnchorEl(null); setShowDropdown(false); }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{ sx: { borderRadius: 2, minWidth: 180, p: 1 } }}
      >
        <Typography variant="body2" sx={{ p: 1, color: 'text.secondary' }}>
          접근 키 관리
        </Typography>
        <Button fullWidth onClick={() => { setIsModalOpen(true); setShowDropdown(false); }} sx={{ justifyContent: 'flex-start', color: 'text.primary' }}>
          접근 키 변경
        </Button>
        <Button fullWidth onClick={handleRemoveApiKey} sx={{ justifyContent: 'flex-start', color: 'error.main' }}>
          접근 키 삭제
        </Button>
      </Popover>
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleApiKeySave}
      />
    </div>
  );
};

export default AuthButton;
