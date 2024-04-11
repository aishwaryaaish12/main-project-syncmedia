// import { _members, _brandsColor, _testimonials } from 'src/_mock';

// import MarketingAbout from '../about/marketing-about';
// import MarketingNewsletter from '../marketing-newsletter';
// import MarketingTeamAbout from '../team/marketing-team-about';
// import MarketingAboutStory from '../about/marketing-about-story';
// import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
// import MarketingAboutOurClients from '../marketing-about-our-clients';
// import MarketingTestimonial from '../testimonial/marketing-testimonial';
// import MarketingAboutOurVision from '../about/marketing-about-our-vision';
// import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
// import MarketingAboutCoreValues from '../about/marketing-about-core-values';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

// import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function MarketingAboutView() {
  return (
    <Container
    sx={{
      py: { xs: 5, md: 10 },
    }}
  >
    {/* <Image
      alt="landing about"
      src="/assets/images/marketing/Socialmediamarketing.jpg"
      ratio="16/9"
      sx={{
        borderRadius: 1.5,
        mb: { xs: 5, md: 10 },
      }}
    /> */}

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

        <Typography variant="h2" sx={{ my: 3,color:'primary.darker' }}>
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

        <Typography variant="h2" sx={{ my: 3,color:'primary.darker' }}>
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
