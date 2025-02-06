import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';
import ContactForm from './ContactForm';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(2),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  marginLeft: theme.spacing(2),
  padding: theme.spacing(1, 3),
  '&:hover': {
    background: theme.palette.primary.dark,
  },
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
  background: 'rgba(0, 0, 0, 0.95)',
  height: '100%',
  padding: theme.spacing(2),
}));

const MobileNavItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(1),
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleContactOpen = () => {
    setContactOpen(true);
    setMobileOpen(false);
  };

  const handleContactClose = () => {
    setContactOpen(false);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Portfolio', path: '/portfolio' },
  ];

  const drawer = (
    <DrawerContent>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <MobileNavItem
            button
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.text} />
          </MobileNavItem>
        ))}
        <MobileNavItem button onClick={handleContactOpen}>
          <ListItemText 
            primary="Contact" 
            primaryTypographyProps={{
              sx: { color: theme.palette.primary.main }
            }}
          />
        </MobileNavItem>
      </List>
    </DrawerContent>
  );

  return (
    <>
      <StyledAppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
            }}
          >
            Content Creation Agent
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {navItems.map((item) => (
                <NavButton
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                >
                  {item.text}
                </NavButton>
              ))}
              <ContactButton
                variant="contained"
                onClick={handleContactOpen}
              >
                Contact
              </ContactButton>
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
      >
        {drawer}
      </Drawer>

      <ContactForm 
        open={contactOpen}
        onClose={handleContactClose}
      />
    </>
  );
};

export default Navbar;
