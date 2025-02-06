import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Slide,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CookieIcon from '@mui/icons-material/Cookie';

const ConsentBanner = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  background: 'rgba(0, 0, 0, 0.95)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(2, 3),
  color: theme.palette.text.primary,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  borderRadius: theme.spacing(1),
}));

const AcceptButton = styled(StyledButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    background: theme.palette.primary.dark,
  },
}));

const DeclineButton = styled(StyledButton)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  color: theme.palette.text.primary,
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
  },
}));

const CookieConsent = ({ onOpenPolicy }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <Slide direction="up" in={show}>
      <ConsentBanner>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems={{ xs: 'stretch', sm: 'center' }}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <CookieIcon sx={{ fontSize: 24, color: 'primary.main' }} />
            <Typography variant="body2">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ minWidth: { sm: '300px' } }}
          >
            <DeclineButton
              fullWidth
              variant="contained"
              onClick={handleDecline}
            >
              Decline
            </DeclineButton>
            <AcceptButton
              fullWidth
              variant="contained"
              onClick={handleAccept}
            >
              Accept All Cookies
            </AcceptButton>
            <Button
              variant="text"
              onClick={onOpenPolicy}
              sx={{ color: 'primary.main' }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </ConsentBanner>
    </Slide>
  );
};

export default CookieConsent;
