import React from 'react';
import { useNavigate } from 'react-router';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';


export default function MarketingEmailtemplateView() {
  const navigate =useNavigate();
  const navigateToAddToDraft = ()=>{
    navigate(paths.marketing.draft)
    }
    const navigateToClickhere = ()=>{
      navigate(paths.marketing.unsubscribe)
      }
  
  const containerStyles = {
    maxWidth: 600,
    margin: '20px auto',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };
  
  const titleStyles = {
    color: '#333',
    marginBottom: 20,
  };
  
  const paragraphStyles = {
    color: '#666',
    marginBottom: 20,
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
    marginBottom: 20,
  };
  
  const buttonStyles = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: 4,
    transition: 'background-color 0.3s',
  };
  
  // const unsubscribe = () => {
  //     // Handle unsubscribe logic here (e.g., update database, remove from mailing list, etc.)
  // console.log('User unsubscribed.');
  // };

  const handleSendEmail = () => {
    // Handle sending email logic here
    console.log('Email sent.');
  };
  
  
  return (
    <>
    <Container style={containerStyles}>
      <Typography variant="h4"color='primary.darker' style={titleStyles}>
        Welcome to Email campaign
      </Typography>
      <img src="https://via.placeholder.com/600x200" alt="Newsletter" style={imageStyles} />
      <Typography variant="body1" style={paragraphStyles}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo non massa vehicula viverra. Phasellus consectetur justo non nunc tristique, in blandit nulla tempor.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={buttonStyles}
        href="https://example.com"
        target="_blank"
      >
        Read More
      </Button>
      <Typography variant="body2" style={paragraphStyles}>
        If you wish to unsubscribe from our newsletter, please{' '}
        <Button variant="text" color="secondary" onClick={navigateToClickhere} style={{ color: '#007bff', textDecoration: 'none' }}>
          click here
        </Button>
        .
      </Typography>
    </Container>
    <Container sx={{ display: 'flex', justifyContent: 'space-around', width:'300px' }}>
    <Button variant="contained" size='large' color="primary" onClick={navigateToAddToDraft} style={{ margin: '20px auto', display: 'inline' }}>
    Add to draft
  </Button>
    <Button variant="contained" size='large' color="primary" onClick={handleSendEmail} style={{ margin: '20px auto', display: 'block' }}>
    Send Mail
  </Button>
  </Container>
  </>
  );
}