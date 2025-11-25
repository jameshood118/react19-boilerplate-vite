import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// This is an ES6 fat arrow function component (Arrow Function Component)
// We are explicitly typing the component using React.FC (Functional Component)
const App: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, textAlign: 'center' }}>
      <img src="./assets/gallerybanner.png" alt="Gallery Banner" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
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
        <CheckCircleOutlineIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ fontWeight: 'bold' }}
        >
          React 19 & TypeScript Setup Complete!
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          This application is running on React 19 with a full TypeScript, Material UI, and ESlint configuration.
          Components are structured using modern ES6 arrow function syntax.
        
        This one adds Vite though, no more create react app yay

        </Typography>
        
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={() => console.log('MUI Button Clicked')}
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