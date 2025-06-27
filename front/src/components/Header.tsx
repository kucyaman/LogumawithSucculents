import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const menuItems = ['日記', 'お手入れLog', 'レポート', 'カレンダー'];

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [isMyPosts, setIsMyPosts] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handlePostTypeClick = () => {
    setIsMyPosts(!isMyPosts);
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <Box sx={{ 
      pb: 2,
    }}>
      {/* ヘッダー */}
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          pt: 2,
          letterSpacing: 1,
        }}
      >
        Loguma with Succulents
      </Typography>

      {/* ユーザーアイコンと投稿タイプ切り替え */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <Avatar 
          sx={{ 
            width: 56, 
            height: 56, 
            bgcolor: '#e75480',
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.8,
            },
          }}
          onClick={handleAvatarClick}
        >
          {user?.name?.charAt(0) || 'U'}
        </Avatar>
        <Typography 
          variant="body2" 
          sx={{ 
            mt: 1, 
            color: '#444',
            fontWeight: 'bold',
          }}
        >
          {user?.name || 'ユーザー'}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#666',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
            '&:hover': {
              color: '#888',
            },
          }}
          onClick={handlePostTypeClick}
        >
          {isMyPosts ? 'わたしの投稿' : 'みんなの投稿'}
        </Typography>
      </Box>

      {/* ユーザーメニュー */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleLogout}>
          ログアウト
        </MenuItem>
      </Menu>

      {/* メニュータブ */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, height: 40 }}>
        {menuItems.map((item, idx) => (
          <Typography
            key={item}
            variant="body2"
            sx={{
              mx: 1.5,
              fontWeight: 'bold',
              borderBottom: '2px solid transparent',
              color: '#888',
              cursor: 'pointer',
              pb: 0.5,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.2s ease',
              opacity: 0.8,
              '&:hover': {
                borderBottom: '2px solid #333',
                color: '#333',
                opacity: 1,
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Header; 