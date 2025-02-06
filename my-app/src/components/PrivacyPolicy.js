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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SecurityIcon from '@mui/icons-material/Security';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
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

const PrivacyPolicy = ({ open, onClose }) => {
  const policies = [
    {
      icon: <SecurityIcon />,
      title: 'Data Protection',
      content: 'We implement robust security measures to protect your personal information from unauthorized access, alteration, or disclosure.',
    },
    {
      icon: <DataUsageIcon />,
      title: 'Data Collection',
      content: 'We collect information such as names, email addresses, and browsing behavior to enhance user experience and improve our services.',
    },
    {
      icon: <PrivacyTipIcon />,
      title: 'Data Sharing',
      content: 'Your information is only shared with trusted partners when necessary to provide our services or when required by law.',
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
            Privacy Policy
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Your privacy matters to us
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
            At Content Creation Agent, we respect your privacy and are committed to protecting your personal data. 
            This policy outlines how we collect, use, and safeguard any information you provide to us.
          </Typography>

          <List>
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <ListItem 
                  sx={{ 
                    mb: 2,
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <ListItemIcon>
                    <IconWrapper>
                      {policy.icon}
                    </IconWrapper>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" gutterBottom>
                        {policy.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {policy.content}
                      </Typography>
                    }
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>

          <Typography variant="body2" sx={{ mt: 3, color: 'rgba(255, 255, 255, 0.7)' }}>
            By using our website/app, you consent to our data practices as outlined in this policy. 
            We may update this policy periodically to reflect changes in our practices or legal requirements.
          </Typography>
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

export default PrivacyPolicy;
