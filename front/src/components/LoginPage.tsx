import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Box, Button, TextField, Typography, Alert, CircularProgress } from '@mui/material';

const backgroundUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'; // 仮の多肉植物画像

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof typeof formData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
    // エラーをクリア
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors({});

    const success = await login(formData.email, formData.password);

    if (success) {
      navigate('/');
    } else {
      setErrors({ general: 'メールアドレスまたはパスワードが正しくありません' });
    }

    setIsLoading(false);
  };

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

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: 400,
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', color: '#333' }}>
            ログイン
          </Typography>

          {errors.general && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errors.general}
            </Alert>
          )}

          <TextField
            fullWidth
            label="メールアドレス"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 2 }}
            required
          />

          <TextField
            fullWidth
            label="パスワード"
            type="password"
            value={formData.password}
            onChange={handleInputChange('password')}
            error={!!errors.password}
            helperText={errors.password}
            sx={{ mb: 3 }}
            required
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{
              bgcolor: '#e75480',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              py: 1.5,
              borderRadius: 2,
              mb: 2,
              '&:hover': { bgcolor: '#d1456a' },
              '&:disabled': { bgcolor: '#ccc' },
            }}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'ログイン'}
          </Button>

          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate('/register')}
            sx={{
              bgcolor: '#222',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              py: 1.5,
              borderRadius: 2,
              '&:hover': { bgcolor: '#444' },
            }}
          >
            新規登録
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage; 