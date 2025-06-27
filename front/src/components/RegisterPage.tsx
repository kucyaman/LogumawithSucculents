import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  Paper,
  SelectChangeEvent,
} from '@mui/material';

const backgroundUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

// 都道府県データ（簡略版）
const prefectures = [
  { id: 1, name: '北海道' },
  { id: 2, name: '青森県' },
  { id: 3, name: '岩手県' },
  { id: 4, name: '宮城県' },
  { id: 5, name: '秋田県' },
  { id: 6, name: '山形県' },
  { id: 7, name: '福島県' },
  { id: 8, name: '茨城県' },
  { id: 9, name: '栃木県' },
  { id: 10, name: '群馬県' },
  { id: 11, name: '埼玉県' },
  { id: 12, name: '千葉県' },
  { id: 13, name: '東京都' },
  { id: 14, name: '神奈川県' },
  { id: 15, name: '新潟県' },
  { id: 16, name: '富山県' },
  { id: 17, name: '石川県' },
  { id: 18, name: '福井県' },
  { id: 19, name: '山梨県' },
  { id: 20, name: '長野県' },
  { id: 21, name: '岐阜県' },
  { id: 22, name: '静岡県' },
  { id: 23, name: '愛知県' },
  { id: 24, name: '三重県' },
  { id: 25, name: '滋賀県' },
  { id: 26, name: '京都府' },
  { id: 27, name: '大阪府' },
  { id: 28, name: '兵庫県' },
  { id: 29, name: '奈良県' },
  { id: 30, name: '和歌山県' },
  { id: 31, name: '鳥取県' },
  { id: 32, name: '島根県' },
  { id: 33, name: '岡山県' },
  { id: 34, name: '広島県' },
  { id: 35, name: '山口県' },
  { id: 36, name: '徳島県' },
  { id: 37, name: '香川県' },
  { id: 38, name: '愛媛県' },
  { id: 39, name: '高知県' },
  { id: 40, name: '福岡県' },
  { id: 41, name: '佐賀県' },
  { id: 42, name: '長崎県' },
  { id: 43, name: '熊本県' },
  { id: 44, name: '大分県' },
  { id: 45, name: '宮崎県' },
  { id: 46, name: '鹿児島県' },
  { id: 47, name: '沖縄県' },
];

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  prefecture_id: number | '';
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    prefecture_id: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleTextFieldChange = (field: keyof Omit<RegisterFormData, 'prefecture_id'>) => (
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

  const handleSelectChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      prefecture_id: value === '' ? '' : Number(value),
    });
    // エラーをクリア
    if (errors.prefecture_id) {
      setErrors({
        ...errors,
        prefecture_id: '',
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        // フォームをリセット
        setFormData({
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
          prefecture_id: '',
        });
        
        // 2秒後にHomeページに遷移
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        if (data.errors) {
          const newErrors: Record<string, string> = {};
          Object.keys(data.errors).forEach(key => {
            newErrors[key] = data.errors[key][0];
          });
          setErrors(newErrors);
        } else {
          setErrors({ general: data.message || '登録に失敗しました' });
        }
      }
    } catch (error) {
      setErrors({ general: 'ネットワークエラーが発生しました' });
    } finally {
      setIsLoading(false);
    }
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
          bgcolor: 'rgba(0,0,0,0.3)',
        }}
      />
      
      <Paper
        elevation={8}
        sx={{
          zIndex: 1,
          p: 4,
          width: '90%',
          maxWidth: 500,
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 3,
            color: '#333',
            fontWeight: 'bold',
          }}
        >
          ユーザー登録
        </Typography>

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
            <br />
            <small>2秒後にホームページに移動します...</small>
          </Alert>
        )}

        {errors.general && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errors.general}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="お名前"
            value={formData.name}
            onChange={handleTextFieldChange('name')}
            error={!!errors.name}
            helperText={errors.name}
            sx={{ mb: 2 }}
            required
          />

          <TextField
            fullWidth
            label="メールアドレス"
            type="email"
            value={formData.email}
            onChange={handleTextFieldChange('email')}
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
            onChange={handleTextFieldChange('password')}
            error={!!errors.password}
            helperText={errors.password}
            sx={{ mb: 2 }}
            required
          />

          <TextField
            fullWidth
            label="パスワード（確認）"
            type="password"
            value={formData.password_confirmation}
            onChange={handleTextFieldChange('password_confirmation')}
            error={!!errors.password_confirmation}
            helperText={errors.password_confirmation}
            sx={{ mb: 2 }}
            required
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>都道府県（任意）</InputLabel>
            <Select
              value={formData.prefecture_id.toString()}
              label="都道府県（任意）"
              onChange={handleSelectChange}
            >
              <MenuItem value="">
                <em>選択してください</em>
              </MenuItem>
              {prefectures.map((prefecture) => (
                <MenuItem key={prefecture.id} value={prefecture.id.toString()}>
                  {prefecture.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
              '&:hover': { bgcolor: '#d1456a' },
              '&:disabled': { bgcolor: '#ccc' },
            }}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : '登録する'}
          </Button>

          <Button
            fullWidth
            variant="text"
            sx={{
              mt: 2,
              color: '#666',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' },
            }}
            onClick={() => navigate('/')}
          >
            戻る
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterPage; 