import React, { Suspense } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme, CircularProgress } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load page components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const GetStartedForm = React.lazy(() => import('./pages/GetStartedForm'));

// Create a dark theme with black and white scheme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.default',
          }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Suspense fallback={
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <CircularProgress />
                </Box>
              }>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/get-started" element={<GetStartedForm />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </Box>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
