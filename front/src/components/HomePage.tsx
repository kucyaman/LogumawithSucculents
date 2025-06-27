import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Header from './Header';

const plantImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';
const postImages = [
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
];

const HomePage: React.FC = () => {
  const isPc = useMediaQuery('(min-width:600px)');
  const columns = isPc ? 5 : 3;

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh', pb: 4 }}>
      {/* ヘッダー部分 */}
      <Header />

      {/* メインコンテンツ部分 */}
      <Box sx={{ px: 2 }}>
        {/* 上部画像 */}
        <Box
          sx={{
            width: '100%',
            height: 120,
            backgroundImage: `url(${plantImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 2,
            mb: 2,
          }}
        />

        {/* 日付インジケータ */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          {[1,2,3,4,5,6,7].map((n, idx) => (
            <Typography
              key={n}
              variant="body2"
              sx={{
                mx: 1,
                color: n === 3 ? '#b23c7b' : '#888',
                borderBottom: n === 3 ? '2px solid #b23c7b' : 'none',
                fontWeight: n === 3 ? 'bold' : 'normal',
                pb: 0.5,
              }}
            >
              {n}
            </Typography>
          ))}
        </Box>

        {/* 投稿画像グリッド */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(3, 1fr)', // スマホ3列
              md: 'repeat(5, 1fr)', // PC5列
            },
            gap: 1,
          }}
        >
          {postImages.map((img, idx) => (
            <Box
              key={idx}
              sx={{
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: 2,
                boxShadow: 1,
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`post${idx}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage; 