import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { portfolioItems } from '../assets';
import VideoPreview from '../components/VideoPreview';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const MediaContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: '56.25%', // 16:9 aspect ratio
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  borderRadius: `${theme.spacing(2)} ${theme.spacing(2)} 0 0`,
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(0.75),
  marginTop: theme.spacing(1),
}));

const PortfolioPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Our Portfolio
        </Typography>

        <Grid container spacing={4}>
          {portfolioItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StyledCard>
                  <MediaContainer>
                    <VideoPreview
                      title={item.title}
                      thumbnailSrc={item.image}
                      videoSrc={item.video}
                    />
                  </MediaContainer>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {item.description}
                    </Typography>
                    <CategoryChip label={item.category} />
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default PortfolioPage;
