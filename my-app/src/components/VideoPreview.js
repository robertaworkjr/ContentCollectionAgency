import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
    maxWidth: '90vw',
    maxHeight: '90vh',
  },
}));

const VideoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const PreviewButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const PlayOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  '&:hover': {
    opacity: 1,
    background: 'rgba(0, 0, 0, 0.6)',
  },
}));

const PlayButton = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  borderRadius: '50%',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease-in-out, background 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    background: 'rgba(255, 255, 255, 0.2)',
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: 'white',
  zIndex: 1,
  background: 'rgba(0, 0, 0, 0.5)',
  '&:hover': {
    background: 'rgba(0, 0, 0, 0.7)',
  },
}));

const VideoPreview = ({ title, thumbnailSrc, videoSrc }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PreviewButton onClick={handleOpen}>
        <Box
          component="img"
          src={thumbnailSrc}
          alt={title}
        />
        <PlayOverlay>
          <PlayButton>
            <PlayArrowIcon sx={{ fontSize: 40, color: 'white' }} />
          </PlayButton>
          <Typography
            variant="button"
            sx={{
              color: 'white',
              mt: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              letterSpacing: '1px',
            }}
          >
            Watch Preview
          </Typography>
        </PlayOverlay>
      </PreviewButton>

      <StyledDialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
      >
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        <DialogContent sx={{ p: 0 }}>
          <VideoContainer>
            <video
              controls
              autoPlay
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                outline: 'none',
              }}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoContainer>
        </DialogContent>
      </StyledDialog>
    </>
  );
};

export default VideoPreview;
