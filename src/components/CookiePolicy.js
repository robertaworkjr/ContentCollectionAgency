import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CookieIcon from '@mui/icons-material/Cookie';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: theme.palette.text.primary,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: theme.palette.text.primary,
  padding: theme.spacing(1, 3),
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '50%',
  padding: theme.spacing(1),
  marginRight: theme.spacing(2),
  '& svg': {
    fontSize: '2rem',
    color: theme.palette.text.primary,
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  color: theme.palette.text.primary,
  borderRadius: '8px !important',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  marginBottom: theme.spacing(2),
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    borderRadius: '8px',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.text.primary,
  },
}));

const cookieTypes = [
  {
    title: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.',
  },
  {
    title: 'Analytics Cookies',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.',
  },
  {
    title: 'Functional Cookies',
    description: 'These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.',
  },
  {
    title: 'Marketing Cookies',
    description: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.',
  },
];

const CookiePolicy = ({ open, onClose }) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Typography variant="h4" gutterBottom>
            Cookie Policy
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            How we use cookies to improve your experience
          </Typography>
        </motion.div>
      </DialogTitle>

      <DialogContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="body1" paragraph>
            Content Creation Agent uses cookies to enhance user experience, track website usage, 
            and improve functionality. By using our site, you consent to our use of cookies as described below.
          </Typography>

          <List>
            <ListItem sx={{ mb: 3, background: 'rgba(255, 255, 255, 0.03)', borderRadius: 2, border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <ListItemIcon>
                <IconWrapper>
                  <CookieIcon />
                </IconWrapper>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h6" gutterBottom>
                    What are Cookies?
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Cookies are small data files stored on your device that help us remember your preferences
                    and provide a better browsing experience. They are essential for certain website functions
                    and help us understand how you interact with our site.
                  </Typography>
                }
              />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom sx={{ mt: 4, mb: 2 }}>
            Types of Cookies We Use
          </Typography>

          {cookieTypes.map((cookie, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <StyledAccordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`cookie-content-${index}`}
                  id={`cookie-header-${index}`}
                >
                  <Typography variant="subtitle1">{cookie.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {cookie.description}
                  </Typography>
                </AccordionDetails>
              </StyledAccordion>
            </motion.div>
          ))}

          <Box sx={{ mt: 4, p: 2, background: 'rgba(255, 255, 255, 0.03)', borderRadius: 2, border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Typography variant="h6" gutterBottom>
              Managing Your Cookie Preferences
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              You can manage or disable cookies through your browser settings. However, please note that
              disabling certain cookies may affect the functionality of our website. To learn more about
              managing cookies, visit your browser's help section.
            </Typography>
          </Box>
        </motion.div>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <StyledButton onClick={onClose}>
          I Understand
        </StyledButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default CookiePolicy;
