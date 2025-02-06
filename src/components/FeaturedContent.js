import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { getRandomImages } from '../assets';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  color: theme.palette.text.primary,
  margin: theme.spacing(0.5),
}));

const contentData = [
  {
    id: 1,
    title: 'Virtual Reality Experience',
    description: 'Immersive VR solutions for training and entertainment',
    category: 'artistic',
    specs: ['4K Resolution', 'Interactive', '360° View'],
    details: 'Our virtual reality experiences transport users to new worlds with stunning visuals and interactive environments. Perfect for training simulations, virtual tours, and entertainment applications.',
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    description: 'Creating unique and memorable brand identities',
    category: 'logos',
    specs: ['Logo Design', 'Style Guide', 'Brand Strategy'],
    details: 'We craft comprehensive brand identities that tell your story and connect with your audience. From logo design to complete brand guidelines, we ensure consistency across all platforms.',
  },
  {
    id: 3,
    title: 'Content Production',
    description: 'Professional video and photo content creation',
    category: 'scenes',
    specs: ['4K/8K Video', 'Professional Audio', 'Color Grading'],
    details: 'Our content production team delivers high-quality video and photo content that captures your message perfectly. We handle everything from pre-production planning to final delivery.',
  },
  {
    id: 4,
    title: 'Design Innovation',
    description: 'Cutting-edge design solutions for modern challenges',
    category: 'process',
    specs: ['UI/UX Design', 'Prototyping', 'User Testing'],
    details: 'We push the boundaries of design to create innovative solutions that solve real problems. Our process combines creativity with user-centered methodologies for optimal results.',
  },
];

const FeaturedContent = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [contentWithImages, setContentWithImages] = useState([]);

  useEffect(() => {
    try {
      const content = contentData.map(item => ({
        ...item,
        image: getRandomImages(1, item.category)[0]
      }));
      setContentWithImages(content);
    } catch (error) {
      console.error('Error loading content images:', error);
    }
  }, []);

  const handleOpenDialog = (content) => {
    setSelectedContent(content);
  };

  const handleCloseDialog = () => {
    setSelectedContent(null);
  };

  return (
    <>
      <Grid container spacing={4}>
        {contentWithImages.map((content, index) => (
          <Grid item xs={12} sm={6} md={6} key={content.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StyledCard onClick={() => handleOpenDialog(content)}>
                {content.image && (
                  <CardMedia
                    component="img"
                    height="240"
                    image={content.image}
                    alt={content.title}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                )}
                <CardContent>
                  <Typography variant="h5" gutterBottom component="div">
                    {content.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {content.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {content.specs.map((spec) => (
                      <StyledChip key={spec} label={spec} size="small" />
                    ))}
                  </Box>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(selectedContent)}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {selectedContent && (
          <>
            <DialogTitle>
              <Typography variant="h5">{selectedContent.title}</Typography>
            </DialogTitle>
            <DialogContent>
              {selectedContent.image && (
                <CardMedia
                  component="img"
                  height="300"
                  image={selectedContent.image}
                  alt={selectedContent.title}
                  sx={{ mb: 2, borderRadius: 1 }}
                />
              )}
              <Typography variant="body1" paragraph>
                {selectedContent.details}
              </Typography>
              <Box sx={{ mt: 2 }}>
                {selectedContent.specs.map((spec) => (
                  <StyledChip key={spec} label={spec} />
                ))}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} sx={{ color: 'white' }}>
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default FeaturedContent;
