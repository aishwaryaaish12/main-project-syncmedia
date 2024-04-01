import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import { paths } from 'src/routes/paths'; // Added space here
// import { RouterLink } from 'src/routes/components';

//  import { _tours} from 'src/_mock';

import TravelTourItem from 'src/sections/_travel/list/travel-tour-item';

export default function MarketingLoghome() {

  const imagesAndLinks = [
    {id:1, imageUrl: '/assets/images/marketing/home1.jpg',name:'Content Calendar', linkUrl: 'https://example.com/page1' },
    { id:2,imageUrl: '/assets/images/marketing/home2.jpg',name:'Accounts', linkUrl:  '/social-connect' },
    { id:3,imageUrl: '/assets/images/marketing/home3.jpg',name:'Draft', linkUrl: 'https://example.com/page3' },
    {id:4, imageUrl: '/assets/images/marketing/home4.jpg', name:'Publishing',linkUrl: 'https://example.com/page3' },

    // Add more objects as needed
  ];
  


  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <Typography variant="h3">Lets Level Up Your Business with Us</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Our complete automated social media management platform puts the full potential of social media in your hands to transform your marketing strategy and also all areas of your organization
        </Typography>
      </Stack>
      <Box sx={{
          display: 'grid',
          my: { xs: 8, md: 10 },
          gap: { xs: 4, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}>
                  {imagesAndLinks.map((item, index) => (
          <TravelTourItem key={item.id} imagesAndLinks={item} />

))}
         {/* {_tours?.map((tour) => (
          <TravelTourItem key={tour.id} tour={tour} />
        ))}  */}
      </Box>
      {/* <Box sx={{ textAlign: 'center' }}>
        <Button
          component={RouterLink}
          href={paths.marketing.loghome}
          size="large"
          variant="outlined"
          color="inherit">
          View All Tours
        </Button>
      </Box> */}
    </Container>
  );
}

// MarketingLoghome.propTypes = {
//   tours: PropTypes.array,
// };
