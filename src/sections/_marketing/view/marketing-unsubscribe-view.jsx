import React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function UnsubscribeView() {
  const unsubscribe = () => {
    console.log('User unsubscribed.');
    // Handle unsubscribe logic here (e.g., update database, remove from mailing list, etc.)
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(186, 208, 228, 0.2)',
        mb:'5rem',
      }}
    >
      <Typography variant="h5" color="primary.darker" sx={{ marginBottom: '20px' }}>
        Unsubscribe from Newsletter
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px', color: '#666', textAlign: 'center' }}>
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
