import React, { useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const menuItems = ['日記', 'お手入れLog', 'レポート', 'カレンダー'];

const Header: React.FC = () => {
  const [isMyPosts, setIsMyPosts] = useState(false);

  const handlePostTypeClick = () => {
    setIsMyPosts(!isMyPosts);
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
        <Avatar sx={{ width: 56, height: 56, bgcolor: '#ccc' }} />
        <Typography 
          variant="body2" 
          sx={{ 
            mt: 1, 
            color: '#444',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
            '&:hover': {
              color: '#666',
            },
          }}
          onClick={handlePostTypeClick}
        >
          {isMyPosts ? 'わたしの投稿' : 'みんなの投稿'}
        </Typography>
      </Box>

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