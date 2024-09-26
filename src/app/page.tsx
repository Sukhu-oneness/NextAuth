'use client';

import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/sign-up'); // Navigate to signup page on button click
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color:'black',
          backgroundColor: '#f5f5f5',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Our Application!
        </Typography>
        <Typography variant="body1" paragraph>
          This is a simple home page using Material-UI. You can navigate to different pages like Sign Up, Sign In, etc.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          sx={{ marginTop: 2 }}
        >
          Go to Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
