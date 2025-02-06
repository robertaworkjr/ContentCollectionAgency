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
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import CopyrightIcon from '@mui/icons-material/Copyright';
import BlockIcon from '@mui/icons-material/Block';
import UpdateIcon from '@mui/icons-material/Update';
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

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '8px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const TermsOfService = ({ open, onClose }) => {
  const terms = [
    {
      icon: <GavelIcon />,
      title: 'Agreement to Terms',
      content: 'By accessing and using Content Creation Agent, you agree to be bound by these Terms of Service. Our platform provides professional content creation and media services, and users must use it in accordance with these terms.',
    },
    {
      icon: <SecurityIcon />,
      title: 'Acceptable Use',
      content: 'Users must use our services lawfully and ethically. This includes respecting intellectual property rights, maintaining appropriate content standards, and following our community guidelines.',
    },
    {
      icon: <CopyrightIcon />,
      title: 'Intellectual Property',
      content: 'All content created through our platform is subject to intellectual property rights. Users retain their original content rights while granting us necessary licenses to provide our services.',
    },
    {
      icon: <BlockIcon />,
      title: 'Prohibited Activities',
      content: 'Any misuse, unauthorized access, or violation of intellectual property rights may result in immediate account suspension or legal action. This includes attempts to breach security or harm other users.',
    },
    {
      icon: <UpdateIcon />,
      title: 'Updates to Terms',
      content: 'We reserve the right to modify these terms at any time. Continued use of our services after changes implies acceptance of the updated terms. Users will be notified of significant changes.',
    },
  ];

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
            Terms of Service
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Please read these terms carefully before using our services
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
            These Terms of Service govern your use of Content Creation Agent and our services. 
            By using our platform, you acknowledge and agree to these terms.
          </Typography>

          <List>
            {terms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <ListItem component={Section}>
                  <ListItemIcon>
                    <IconWrapper>
                      {term.icon}
                    </IconWrapper>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" gutterBottom>
                        {term.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {term.content}
                      </Typography>
                    }
                  />
                </ListItem>
                {index < terms.length - 1 && (
                  <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                )}
              </motion.div>
            ))}
          </List>

          <Typography 
            variant="body2" 
            sx={{ 
              mt: 3, 
              color: 'rgba(255, 255, 255, 0.7)',
              fontStyle: 'italic',
            }}
          >
            Last updated: February 2025
          </Typography>
        </motion.div>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <StyledButton onClick={onClose}>
          I Accept
        </StyledButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default TermsOfService;
