import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

export default function MarketingTravelTourItemNew({ imagesAndsocialLinks }) {
  const { imageUrl, name, linkUrl, action } = imagesAndsocialLinks;

  const handleConnect = () => {
    window.location.href = linkUrl;
  };

  const addBoxShadow = (e) => {
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(15, 15, 15, 0.3)';
  };

  const removeBoxShadow = (e) => {
    e.currentTarget.style.boxShadow = '0 3px 10px rgba(10, 10, 10, 0.15)';
  };

  return (
    <Grid item xs={12} sm={6} md={4}> {/* Each card takes up 4 columns on md */}
      <Card
        onMouseEnter={addBoxShadow}
        onMouseLeave={removeBoxShadow}
        sx={{
          transition: 'transform 0.3s ease',
          boxShadow: '0 3px 10px rgba(10, 10, 10, 0.15)', // Initial box shadow
          width: '100%',
          height: '100%',
          '&:hover': {
            transform: 'translateY(5px)',
            boxShadow: '0 16px 32px rgba(15, 15, 15, 0.6)', // Larger box shadow after hovering
          }
        }}
      >
        <Image sx={{ width: '70px', height: '70px', ml: '100px', mt: '30px' }} src={imageUrl} />
        <Stack spacing={0.5} sx={{ p: 2.5 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', ml: '85px', mt: '35px' }}>
            {name}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConnect}
            sx={{ width: '130px', height: '40px', ml: '50px' }}
          >
            {action} {/* Display the action text as the button label */}
          </Button>
        </Stack>
        <Divider sx={{ borderStyle: 'none' }} />
      </Card>
    </Grid>
  );
}

MarketingTravelTourItemNew.propTypes = {
  imagesAndsocialLinks: PropTypes.shape({
    imageUrl: PropTypes.string, // Update property name to 'imageUrl'
    name: PropTypes.string,
    linkUrl: PropTypes.string,
    action: PropTypes.string,
  }),
};
