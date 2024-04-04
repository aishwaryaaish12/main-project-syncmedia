// import * as Yup from 'yup';
// import { useCallback } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

// import { Button } from '@mui/material';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// import LoadingButton from '@mui/lab/LoadingButton';

import { useNavigate } from 'react-router';

import { paths } from 'src/routes/paths';
// import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

// import { fData } from 'src/utils/format-number';

import { Button } from '@mui/material';

import Image from 'src/components/image';
// import FormProvider, {RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingWcamForm() {
  const mdUp = useResponsive('up', 'md');
  const navigate = useNavigate()
  const navigateToWhatsappCampaign = ()=>{
  navigate(paths.marketing.whatsappcampaign)
  }

  const navigateToAllCampaign = ()=>{
  navigate(paths.marketing.draft)
  }

  
  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 } 
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image sx={{width:'100%'}}
              alt=""
              src="/assets/illustrations/whatsappcampaign.svg"
            />
          </Grid>
        )}

        <Grid xs={12} md={6} lg={6}>
          <Stack
            spacing={2}
            sx={{ 
              pt: { xs: 0, md: 15 },
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h3"color='primary.darker' sx={{ml: { xs: 0, md: 16 }}}>WhatsApp Campaign</Typography>
          </Stack>
          <Stack direction='column' spacing={2}>
          <Button
          onClick={navigateToWhatsappCampaign}
          size="large"
          variant="contained"
          color="primary"
        >
          Create Campaign
          </Button>
          <Button
          onClick={navigateToAllCampaign}
          size="large"
          type="submit"
          variant="contained"
          color="primary">All Campaign</Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
