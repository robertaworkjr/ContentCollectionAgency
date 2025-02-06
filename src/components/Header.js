import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const AdBanner = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(0, 1),
  padding: theme.spacing(1, 3),
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&.active': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderBottom: '2px solid #fff',
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.8rem',
  background: 'linear-gradient(45deg, #FFFFFF 30%, #CCCCCC 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '1px',
  textDecoration: 'none',
}));

const Header = () => {
  const menuItems = [
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <>
      <AdBanner>
        <Typography variant="body2">
          Special Offer: Get 30% off on our Premium Content Creation Tools
        </Typography>
      </AdBanner>
      <AppBar position="sticky" sx={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Container>
          <StyledToolbar>
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <Logo variant="h1">
                ContentAgent
              </Logo>
            </RouterLink>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <NavButton
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                >
                  {item.name}
                </NavButton>
              ))}
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
