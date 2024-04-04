import React from 'react';
// import { useNavigate } from 'react-router';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import { paths } from 'src/routes/paths';

export default function UnsubscribeView() {
  // const navigateToAddToDraft = useNavigate();

  const containerStyles = {
    maxWidth: 600,
    margin: '20px auto',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 5,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  };

  const titleStyles = {
    color: '#333',
    marginBottom: 20,
  };

  const paragraphStyles = {
    color: '#666',
    marginBottom: 20,
  };

  const unsubscribe = () => {
    // Handle unsubscribe logic here (e.g., update database, remove from mailing list, etc.)
    console.log('User unsubscribed.');
  };

  return (
    <Container style={containerStyles}>
      <Typography variant="h5" color="primary.darker" style={titleStyles} >
        Unsubscribe from Newsletter
      </Typography>
      <Typography variant="body1" style={paragraphStyles}>
        We are sorry to see you go. If you no longer wish to receive our newsletter,
        please click the button below to unsubscribe.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={unsubscribe}
        
      >
        Unsubscribe
      </Button>
    </Container>
  );
}
