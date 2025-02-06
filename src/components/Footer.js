import React, { useState } from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import CookiePolicy from './CookiePolicy';
import CookieConsent from './CookieConsent';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  color: theme.palette.text.primary,
  padding: theme.spacing(6, 0),
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(0, 1),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  margin: theme.spacing(0, 2),
  transition: 'color 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const AdBanner = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  padding: theme.spacing(2),
  textAlign: 'center',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
}));

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  const handlePrivacyOpen = () => {
    setPrivacyOpen(true);
  };

  const handlePrivacyClose = () => {
    setPrivacyOpen(false);
  };

  const handleTermsOpen = () => {
    setTermsOpen(true);
  };

  const handleTermsClose = () => {
    setTermsOpen(false);
  };

  const handleCookieOpen = () => {
    setCookieOpen(true);
  };

  const handleCookieClose = () => {
    setCookieOpen(false);
  };

  return (
    <>
      <FooterContainer>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Content Creation Agent
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Creating compelling content that captivates audiences and drives engagement.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/portfolio">Portfolio</FooterLink>
                <FooterLink onClick={handlePrivacyOpen}>Privacy Policy</FooterLink>
                <FooterLink onClick={handleTermsOpen}>Terms of Service</FooterLink>
                <FooterLink onClick={handleCookieOpen}>Cookie Policy</FooterLink>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Connect With Us
              </Typography>
              <Box>
                <SocialIcon>
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon>
                  <TwitterIcon />
                </SocialIcon>
                <SocialIcon>
                  <InstagramIcon />
                </SocialIcon>
                <SocialIcon>
                  <LinkedInIcon />
                </SocialIcon>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </FooterContainer>
      <AdBanner>
        <Typography variant="body2">
          Ready to create amazing content? Contact us today!
        </Typography>
      </AdBanner>

      <PrivacyPolicy 
        open={privacyOpen} 
        onClose={handlePrivacyClose} 
      />
      <TermsOfService 
        open={termsOpen} 
        onClose={handleTermsClose} 
      />
      <CookiePolicy 
        open={cookieOpen} 
        onClose={handleCookieClose} 
      />
      <CookieConsent onOpenPolicy={handleCookieOpen} />
    </>
  );
};

export default Footer;
