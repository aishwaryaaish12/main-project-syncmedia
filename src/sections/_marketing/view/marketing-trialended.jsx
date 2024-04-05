import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

export default function MarketingTrialEndedView() {
  const amount = Math.round(8341.10 * 100); // Convert Rupees to paisa

  const handleSubscribe = () => {
    const options = {
      key: "rzp_test_HrR1RlW6tTifWM",
      key_secret: "oUTXJn8TIctgN48AKgX5Rcfw",
      amount,
      currency: "INR",
      name: "SyncMedia Hub",
      description: "For testing purpose",
      handler(response) {
        alert(response.razorpay_payment_id);
      },
          // prefill: {
      //   name: " ",
      //   email: " ",
      //   contact: " "
      // },
      notes: {
        address: "Razorpay Corporate office"
      },
      theme: {
        color: "primary"
      }
    };

    const pay = new window.Razorpay(options);
    pay.open(); 
  };

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
        sx={{ mb: { xs: 2, md: 10 } }} // Reduce the margin bottom here
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

          <Typography variant="h2" sx={{ color: 'primary.darker' }}>Unlock Our Plan</Typography>
        </Stack>
      </Stack>

      <Card sx={{ width: '100%', maxWidth: 430, height: 'auto', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)' }}}>
        <Box p={3}>
          <Image src='/assets/icons/ic_agreement.svg' sx={{ width: '50px', height: '50px', top: '25px', mb: '8px', filter: 'grayscale(100%)' }} />

          <Typography variant='h3' color='primary' sx={{ mt: '35px' }}>
            POPULAR
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 4 }}>
            Your 14-days free trial has expired. To continue access to SyncMedia Hub Please Subscribe now.
          </Typography>

          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ justifyContent: 'center', mt: 3,ml:'20px' }}>
            <Typography variant='h2' component="span" sx={{ color: 'primary.main' }}>$100</Typography>
            <Typography variant="h6" component="span" sx={{ color: 'text.disabled',mt:'15px' }}>
              /yearly
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2', mt: 3 }}>
            <Iconify icon="carbon:checkmark" sx={{ mr: 1, color: 'primary.main' }} /> Cross-Platform Posting
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2', mt: 3 }}>
            <Iconify icon="carbon:checkmark" sx={{ mr: 1, color: 'primary.main' }} /> Manage Posts
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2', mt: 3 }}>
            <Iconify icon="carbon:checkmark" sx={{ mr: 1, color: 'primary.main' }} /> Campaign
          </Stack>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button variant="contained" color="primary" onClick={handleSubscribe} sx={{ height: '48px', fontSize: '20px' }}>
              Subscribe Now
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
