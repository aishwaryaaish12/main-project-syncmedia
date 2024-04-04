// import * as Yup from 'yup';
// import { useCallback } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

// import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
// import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

// import { fData } from 'src/utils/format-number';

import { useNavigate } from 'react-router';

import { Button } from '@mui/material';

import Image from 'src/components/image';
// import FormProvider, {RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingEcamForm() {
  const navigate = useNavigate()
  const navigateToEmailCampaign = ()=>{
  navigate(paths.marketing.emailcampaign)
  }

  const navigateToAllCampaign = ()=>{
  navigate(paths.marketing.draft)
  }
  
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 }
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image sx={{width:'90%'}}
              alt=" "
              src="/assets/illustrations/emailcampaign.svg"
            />
          </Grid>
        )}

        <Grid xs={12} md={6} lg={6}>
          <Stack
            spacing={2}
            sx={{ 
              pt:{xs:0,md:15},
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h3" color='primary.darker'sx={{ml:{xs:0,md:20,textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}} >Email Campaign</Typography>

          </Stack>
          <Stack direction='column' spacing={2}>
            {
              console.log(paths.marketing.emailcampaign)
            }
          <Button
          onClick={navigateToEmailCampaign}
          size="large"
          variant="contained"
          color="primary"
        >
          Create Campaign
          </Button>
          <Button
          onClick={navigateToAllCampaign}
          size="large"
          variant="contained"
          color="primary">All Campaign</Button>
          </Stack>
          
        </Grid>
      </Grid>
    </Container>
  );
}
