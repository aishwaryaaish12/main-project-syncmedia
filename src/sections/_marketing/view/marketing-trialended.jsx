import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

export default function MarketingTrialEndedView() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensure full viewport height
        textAlign: 'center', // Center text
      }}
    >
      <Stack
        spacing={5}
        alignItems={{ xs: 'center', md: 'flex-end' }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
        sx={{ mb: { xs: 5, md: 10 } }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overlined" sx={{ color: 'text.disabled' }}>
            Pricing
          </Typography>

          <Typography variant="h2">Check Our Pricing</Typography>
        </Stack>
      </Stack>

      <Card sx={{ width: '400px', height: '530px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)' }, }}>
        <Box p={3}>
          <Typography variant="h3" color='primary'>
            POPULAR
          </Typography>
          <Image src='/assets/icons/pricing/ic_plan_starter03.svg' sx={{ width: '30px', height: '30px', position: 'absolute', top: 30, right: 32 }} />
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h4" component="span" sx={{ mt: 3 }}>$100</Typography>
            <Typography variant="h5" component="span" sx={{ color: 'text.disabled', mt: 3 }}>
              /yearly
            </Typography>
          </Stack>

          <Typography variant="body1" align="center" sx={{ mt: 4 }}>
          Your 14-days free trial has ended.
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2', mt: 5 }}>
            <Iconify icon="carbon:checkmark" sx={{ mr: 2, color: 'primary.main' }} /> Cross-Platform Posting
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2', mt: 3 }}>
            <Iconify icon="carbon:checkmark" sx={{ mr: 2, color: 'primary.main' }} /> Manage Posts
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2', mt: 3 }}>
            <Iconify icon="carbon:checkmark" sx={{ mr: 2, color: 'primary.main' }} /> Campaign
          </Stack>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 9 }}>
            <Button variant="contained" color="primary" sx={{ height: '43px' }}>
              Start your Free Trial
            </Button>
          </Box>
        </Box>
      </Card>

    </Container>
  );
}
