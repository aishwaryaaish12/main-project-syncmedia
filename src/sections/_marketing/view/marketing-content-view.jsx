import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import MarketingNewsletter from '../marketing-newsletter';
import MarketingContentInfo from '../contentlibrary/marketing-content-info';
import MarketingContentForm from '../contentlibrary/marketing-content-form';
// import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

export default function MarketingContentView() {
  return (
    <>
      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 15 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, md:1 }}
          justifyContent="space-between"
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          <Grid xs={12} md={6} lg={5}>
            <MarketingContentInfo />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Typography variant="h2" sx={{ mb: 5}}>
              Content Library
            </Typography>

            <MarketingContentForm />
          </Grid>
        </Grid>
      </Container>

      {/* <MarketingLandingFreeSEO /> */}

      {/* <MarketingNewsletter /> */}
    </>
  );
}
