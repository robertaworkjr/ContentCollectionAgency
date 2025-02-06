import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FeaturedContent from '../components/FeaturedContent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getRandomImages } from '../assets';

const HeroButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: theme.palette.text.primary,
  padding: theme.spacing(2, 6),
  fontSize: '1.1rem',
  marginTop: theme.spacing(4),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    transform: 'translateY(-2px)',
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FFFFFF 30%, #CCCCCC 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(2),
}));

const HomePage = () => {
  const navigate = useNavigate();
  const [heroImage] = getRandomImages(1, 'artistic');

  return (
    <>
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            filter: 'blur(8px)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GradientText variant="h2" component="h1">
              Create Compelling Content That Captivates
            </GradientText>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4,
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
              }}
            >
              Transform your ideas into stunning visual experiences. We specialize in crafting 
              professional content that tells your story and engages your audience.
            </Typography>
            <HeroButton
              onClick={() => navigate('/get-started')}
              endIcon={<ArrowForwardIcon />}
            >
              Get Started
            </HeroButton>
          </motion.div>
        </Container>
      </Box>
      
      <Container sx={{ py: 4 }}>
        <FeaturedContent />
      </Container>
    </>
  );
};

export default HomePage;
