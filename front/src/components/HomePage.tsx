import React from 'react';
import { Box, Typography, Avatar, Tabs, Tab, Grid, useMediaQuery } from '@mui/material';

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

const menuItems = ['日記', 'お手入れLog', 'レポート', 'カレンダー'];

const HomePage: React.FC = () => {
  const isPc = useMediaQuery('(min-width:600px)');
  const columns = isPc ? 5 : 3;

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh', pb: 4 }}>
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
        Loguma <span style={{ fontWeight: 400 }}>with Succulents</span>
      </Typography>

      {/* ユーザーアイコンと「みんなの投稿」 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <Avatar sx={{ width: 56, height: 56, bgcolor: '#ccc' }} />
        <Typography variant="body2" sx={{ mt: 1, color: '#444' }}>
          みんなの投稿
        </Typography>
      </Box>

      {/* メニュータブ */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {menuItems.map((item, idx) => (
          <Typography
            key={item}
            variant="body2"
            sx={{
              mx: 1.5,
              fontWeight: idx === 0 ? 'bold' : 'normal',
              borderBottom: idx === 0 ? '2px solid #333' : 'none',
              color: idx === 0 ? '#333' : '#888',
              cursor: 'pointer',
              pb: 0.5,
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      {/* 上部画像 */}
      <Box
        sx={{
          width: '100%',
          height: 120,
          backgroundImage: `url(${plantImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
          mt: 2,
        }}
      />

      {/* 日付インジケータ */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
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
          mt: 1,
          px: 2,
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
  );
};

export default HomePage; 