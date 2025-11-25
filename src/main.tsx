import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './theme'; // MUI Theme
import { Container} from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
          {/* THEME PROVIDER WRAPS APP */}
      <ThemeProvider theme={customTheme}>
        {/* 1. Outer Container for Responsiveness */}
      {/* The Container component centers the content horizontally and sets max-width based on screen size (default MUI behavior). 
         We set the background color here to the main page background color. */}
      <Container
        maxWidth="xl" // Use the full width for the outer container on large screens
        sx={{ // Use the dark background color
          minHeight: '100vh', // Ensures the background covers the whole viewport
          minWidth: '100vw',
          // No top/bottom padding is applied to this outer Container by default, 
          // allowing the inner Box to control the layout.
        }}
      >
        <App />
      </Container>
      </ThemeProvider>
  </StrictMode>,
)
