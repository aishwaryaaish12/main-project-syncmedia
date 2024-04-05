import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import { paths } from 'src/routes/paths'; // Added space here
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// import { RouterLink } from 'src/routes/components';

//  import { _tours} from 'src/_mock';
import { useTheme } from '@mui/system';

import Carousel,{useCarousel } from 'src/components/carousel';

import MarketingTravelTourItem from 'src/sections/_marketing/view/marketing-travel-tour-item';
// import { paths } from 'src/routes/paths';
// import { RouterLink } from 'src/routes/components';

export default function MarketingLoghome() {
  // const classes = useStyles();
  const theme=useTheme()  

  const imagesAndLinks = [
    {id:1, imageUrl: '/assets/images/marketing/home1.jpg',name:'Content Calendar',linkUrl:'/marketing/calendar'},
    { id:2,imageUrl: '/assets/images/marketing/home2.jpg',name:'Accounts',linkUrl:'/marketing/socialconnect'  },
    { id:3,imageUrl: '/assets/images/marketing/home3.jpg',name:'Draft',linkUrl:'/marketing/draft'},
    {id:4, imageUrl: '/assets/images/marketing/home4.jpg', name:'Publishing',linkUrl:'/marketing/content' },

    // Add more objects as needed
  ];
  const socialMediaPlatforms = [
    { icon: 'ic:baseline-facebook', text: 'Facebook' },
    { icon: 'mdi:instagram', text: 'Instagram' },
    { icon: 'mdi:linkedin', text: 'Linkedin' },
    { icon: 'pajamas:twitter', text: 'Twitter' },
    { icon: 'mdi:youtube', text: 'Youtube' }
  ];
  const carousel = useCarousel({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Adjust the autoplay speed (in milliseconds) as needed
  
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: theme.breakpoints.values.xs,
        settings: { slidesToShow: 1 },
      },
],
}); 

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%', // Adjust the height as needed
          backgroundColor: 'primary.main',
          zIndex: -1,
        }}
      />

      <Container sx={{ py: { xs: 3, md: 8 },display:'flex',mt:'1px' }}>
        <Stack spacing={3} sx={{ textAlign: 'left',flexGrow:1 }}>
          <Typography variant="h3">Lets Level Up Your Business with Us</Typography>
          <Typography paragraph sx={{ color: 'primary.darker',fontSize:'20px' }}>
            Our complete automated social media management platform puts the full<br/> potential of social media in your hands to transform your marketing<br/> strategy and also all areas of your organization
          </Typography>
        </Stack>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: 300,
            height: 300,
          }}
        >

<m.div
  animate={{ scale: [0, 1, 0.5, 1] }}
  transition={{ times: [0, 0.1, 0.9, 1] }}
>
      <Image src="/assets/images/marketing/hero-img.png" sx={{ width: '300px', height: '300px' }} />
  </m.div>
</Box>
</Container>

<Box sx={{ backgroundColor: '#E1EFF6', py: { xs: 8, md: 10 } }}>
<Box sx={{ textAlign: 'center', mb: 4,color:'gray',fontFamily:'inherit' }}>
  <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
    {socialMediaPlatforms.map((platform, index) => (
      <Box key={index} display='flex' flexDirection='row'>
        <Iconify icon={platform.icon} />
        <Typography >{platform.text}</Typography>
      </Box>
    ))}
  </Carousel>
</Box>

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
            <MarketingTravelTourItem key={item.id} imagesAndLinks={item} />
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
      {/* </Container> */}
        </Box>

    </Box>
  );
}

// MarketingLoghome.propTypes = {
//   tours: PropTypes.array,
// };
