import React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/system';
import { Grid, Card, Typography, useMediaQuery } from '@mui/material';

import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';

export default function MarketingTravelTourItem({ imagesAndLinks }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const { imageUrl, name, linkUrl } = imagesAndLinks;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ height: isSmallScreen ? 'auto' : '310px', ml: { xs: '10px', sm: '5px', md: '10px' } }}>
        <RouterLink to={linkUrl} style={{ textDecoration: 'none', width: '100%' }}>
          <Image src={imageUrl} sx={{ width: '100%', height: isSmallScreen ? 'auto' : '250px',  }} alt={name} />
          <Typography sx={{ color: 'primary.darker', fontSize: '18px', textAlign: 'center', cursor: 'pointer', mt: '20px' }}>
            {name}
          </Typography>
        </RouterLink>
      </Card>
    </Grid>
  );
}

MarketingTravelTourItem.propTypes = {
  imagesAndLinks: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
  }).isRequired,
};
