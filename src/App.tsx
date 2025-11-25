import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faWrench } from '@fortawesome/free-solid-svg-icons';

// This is an ES6 fat arrow function component (Arrow Function Component)
const App: React.FC = () => {
  // IMPORTANT: For Vite, static assets in the 'public' folder must be referenced 
  // with a path relative to the root, like '/assets/...'
  const imagePath = '/assets/gallerybanner.png'; 

  return (
    <Container maxWidth="lg" sx={{ mt: 5, textAlign: 'center' }}>
      {/* Vite Asset Reference (Assuming file is in public/assets/) */}
      <img 
        src={imagePath} 
        alt="Gallery Banner" 
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
      />
      
      <Box 
        sx={{ 
          p: 4, 
          borderRadius: 4, 
          boxShadow: 3, 
          bgcolor: 'background.paper',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.02)' }
        }}
      >
        {/* Font Awesome Icon for flair */}
        <Box sx={{ color: '#FF7043', mb: 2 }}>
            <FontAwesomeIcon icon={faRocket} size="3x" />
        </Box>
        
        {/* MUI Icon (Original) */}
        <CheckCircleOutlineIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ fontWeight: 'bold' }}
        >
          React 19, Vite, and MUI Setup
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          This application is running on React 19 with a full TypeScript, Material UI, and ESlint configuration. Components are structured using modern ES6 arrow function syntax.
          <br />
          **Vite is running fast!**
        </Typography>
        
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={() => console.log('MUI Button Clicked')}
            // Font Awesome icon inside a button
            startIcon={<FontAwesomeIcon icon={faWrench} />} 
          >
            Start Developing
          </Button>
          <Button 
            variant="outlined" 
            color="warning" 
            size="large"
          >
            View Config Files
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default App;