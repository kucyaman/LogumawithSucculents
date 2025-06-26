import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const backgroundUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'; // 仮の多肉植物画像

const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.2)',
        }}
      />
      <Box
        sx={{
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          px: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            mt: 8,
            mb: 4,
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          Loguma<br />with Succulents
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#e75480',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            borderRadius: 2,
            mb: 2,
            width: '80%',
            maxWidth: 320,
            py: 1.5,
            boxShadow: 3,
            '&:hover': { bgcolor: '#d1456a' },
          }}
        >
          新規登録
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#222',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            borderRadius: 2,
            width: '80%',
            maxWidth: 320,
            py: 1.2,
            boxShadow: 2,
            '&:hover': { bgcolor: '#444' },
          }}
        >
          登録済みの方はこちら
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage; 