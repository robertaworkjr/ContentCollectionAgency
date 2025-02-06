import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  TextField,
  Box,
  IconButton,
  InputAdornment,
  Alert,
  Slide,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlineIcon from '@mui/icons-material/AlternateEmail';
import { motion } from 'framer-motion';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: theme.palette.text.primary,
    maxWidth: '500px',
    width: '100%',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: theme.palette.text.primary,
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.spacing(1),
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputAdornment-root': {
    color: 'rgba(255, 255, 255, 0.5)',
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.spacing(1),
  '&:hover': {
    background: theme.palette.primary.dark,
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const ContactForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Here you would typically send the data to your backend
    // For now, we'll just simulate success
    setSuccess(true);
    setTimeout(() => {
      onClose();
      setSuccess(false);
      setFormData({ name: '', email: '' });
    }, 2000);
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      TransitionComponent={Slide}
      TransitionProps={{ direction: 'up' }}
    >
      <DialogTitle>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Typography variant="h4" gutterBottom>
            Get Started
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Sign up to start creating amazing content
          </Typography>
        </motion.div>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </DialogTitle>

      <DialogContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2, background: 'rgba(211, 47, 47, 0.1)' }}>
                {error}
              </Alert>
            )}
            {success && (
              <Alert severity="success" sx={{ mb: 2, background: 'rgba(46, 125, 50, 0.1)' }}>
                Thank you for signing up! We'll be in touch soon.
              </Alert>
            )}
            
            <StyledTextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            
            <StyledTextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </motion.div>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <SubmitButton
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={success}
        >
          {success ? 'Thanks for Signing Up!' : 'Sign Up'}
        </SubmitButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default ContactForm;
