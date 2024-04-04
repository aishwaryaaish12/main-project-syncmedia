import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import { paths } from 'src/routes/paths'; // Added space here
// import { RouterLink } from 'src/routes/components';

//  import { _tours} from 'src/_mock';

import TravelTourItemNew from 'src/sections/_travel/list/travel-tour-item-new';

export default function MarketingSocialConnectPage() {

  const imagesAndsocialLinks = [
    {id:1, imageUrl: '/assets/icons/travel/ic_social1.svg',name:'Facebook', linkUrl: 'https://developers.facebook.com/',action:'Connect' },
    {id:2,imageUrl: '/assets/icons/travel/ic_social2.svg',name:'Instagram', linkUrl: 'https://www.instagram.com/developer/',action:'Connect'},
    {id:3,imageUrl: '/assets/icons/travel/ic_social3.svg',name:'Linkedin', linkUrl: 'https://developer.linkedin.com/',action:'Connect' },
    {id:4, imageUrl: '/assets/icons/travel/ic_social4.svg', name:'Twitter',linkUrl: 'https://developer.twitter.com/' ,action:'Connect'},
    {id:5, imageUrl: '/assets/icons/travel/ic_social5.svg', name:'Youtube',linkUrl: 'https://developers.google.com/youtube/',action:'Connect' },


    // Add more objects as needed
  ];
    


  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <Typography variant="h3">Social Connect</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Lets connect with your social media channels
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
                  {imagesAndsocialLinks.map((item, index) => (
          <TravelTourItemNew key={item.id} imagesAndsocialLinks={item} />
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
