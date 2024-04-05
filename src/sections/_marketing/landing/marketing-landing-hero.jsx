import React, { useState } from 'react';

import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';

// import Iconify from 'src/components/iconify';
import MarketingSubscriptionView from '../view/marketing-subscription';
// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');
  const [showSubscription, setShowSubscription] = useState(false);

  // Function to toggle showing subscription view
  const handleGetStarted = () => {
    setShowSubscription(true);
  };

  // Render subscription view if showSubscription is true
  if (showSubscription) {
    return <MarketingSubscriptionView />;
  }
  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: 'assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          py: 15,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {/* <Typography variant="overline" sx={{ color: 'secondary.main' }}>
              Digital Marketing
            </Typography> */}

            <Typography variant="h1" sx={{ my: 3,color:'primary.darker' }}>
              Dive into the world of influence
            </Typography>

            <Typography sx={{ color: 'black' }}>
             our social media mastery ensures your brand not only stands out but stays ahead
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'center', md: 'unset' }}
              justifyContent={{ xs: 'center', md: 'unset' }}
              sx={{ mt: 5 }}
            >
              <Button variant="contained" color="primary" size="large" onClick={handleGetStarted}>
                Get Started
              </Button>

              {/* <Stack direction="row" alignItems="center" sx={{ typography: 'h6' }}>
                <Fab size="medium" sx={{ mr: 1 }}>
                  <Iconify width={24} icon="carbon:play" />
                </Fab>
                See Our Work
              </Stack> */}
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7}>
              <Image
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="/assets/images/marketing/social-media-marketing-concept-marketing-with-applications.jpg"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
