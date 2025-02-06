import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Stack,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';

const StyledPaper = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(4),
  color: theme.palette.text.primary,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: theme.palette.text.primary,
  padding: theme.spacing(1.5, 4),
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
  },
}));

const GetStartedForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: [],
    budget: '',
    timeline: '',
    description: '',
    requirements: '',
    newsletter: false,
  });

  const projectTypes = [
    'Brand Video',
    'Corporate Documentary',
    'Product Showcase',
    'Event Coverage',
    'Social Media Content',
    'Animation',
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProjectTypeChange = (event) => {
    setFormData(prev => ({
      ...prev,
      projectType: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    // You could add an API call here
  };

  const handleDownload = () => {
    // Create a text version of the form data
    const formText = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\\n');
    
    // Create a blob and download it
    const blob = new Blob([formText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'project-requirements.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Box sx={{ py: 6, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Get Started
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ mb: 6, color: 'rgba(255, 255, 255, 0.7)' }}
            align="center"
          >
            Tell us about your project and we'll help bring your vision to life
          </Typography>

          <StyledPaper elevation={0}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />

                <FormControl fullWidth>
                  <InputLabel>Project Type</InputLabel>
                  <Select
                    multiple
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleProjectTypeChange}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip 
                            key={value} 
                            label={value}
                            sx={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              color: 'white',
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  >
                    {projectTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Budget Range</InputLabel>
                  <Select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <MenuItem value="< $5,000">Less than $5,000</MenuItem>
                    <MenuItem value="$5,000 - $10,000">$5,000 - $10,000</MenuItem>
                    <MenuItem value="$10,000 - $25,000">$10,000 - $25,000</MenuItem>
                    <MenuItem value="$25,000+">$25,000+</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Timeline</InputLabel>
                  <Select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <MenuItem value="1-2 weeks">1-2 weeks</MenuItem>
                    <MenuItem value="2-4 weeks">2-4 weeks</MenuItem>
                    <MenuItem value="1-2 months">1-2 months</MenuItem>
                    <MenuItem value="2+ months">2+ months</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label="Project Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  label="Special Requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  variant="outlined"
                  fullWidth
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        newsletter: e.target.checked,
                      }))}
                    />
                  }
                  label="Subscribe to our newsletter for updates and industry insights"
                />

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
                  <StyledButton
                    onClick={handleDownload}
                    startIcon={<DownloadIcon />}
                  >
                    Download Form
                  </StyledButton>
                  <StyledButton
                    type="submit"
                    endIcon={<SendIcon />}
                  >
                    Submit
                  </StyledButton>
                </Box>
              </Stack>
            </form>
          </StyledPaper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default GetStartedForm;
