// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
// import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

// const ROWS = [
//   {
//     label: 'projects',
//     total: 20,
//     content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
//   },
//   {
//     label: 'Happy clients',
//     total: 32000,
//     content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
//   },
//   {
//     label: 'years of experience',
//     total: 20,
//     content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
//   },
// ];

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Image
        alt="landing about"
        src="/assets/images/marketing/Socialmediamarketing.jpg"
        ratio="16/9"
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
        }}
      />

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            About us
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Who We Are
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
          Empower your brand to connect with audiences globally, effortlessly manage content, and drive engagement across channels. Join us to elevate your digital presence and exceed marketing goals.
          </Typography>
          {/* <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
          >
            Lean more
          </Button> */}
        </Grid>

        {/* <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack>

                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid> */}
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            How it Works
                      </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Overview
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
          Our user-friendly platform simplifies social media management.
Sign up effortlessly create and edit profiles, connect social
channels and gain insights for strategic planning. Streamline content,
tailor posting methods, and execute campaigns seamlessly from a centralized hub. 
Elevate your outreach with integrated email and WhatsApp campaigns.
Experience efficient and unified social media management by signing up
today.</Typography>
          {/* <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
          >
            Lean more
          </Button> */}
        </Grid>

      </Grid>
    </Container>
  );
}
