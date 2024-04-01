import React from 'react';
import PropTypes from 'prop-types';
// import { useState, useCallback } from 'react';

// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; // 1. Import Button component
import Divider from '@mui/material/Divider';
// import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

// import { paths } from 'src/routes/paths';
// import { RouterLink } from 'src/routes/components';

// import { fCurrency } from 'src/utils/format-number';

import Image from 'src/components/image';
// import Iconify from 'src/components/iconify';
// import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function TravelTourItemNew({ imagesAndsocialLinks }) {
  const { imageUrl,name,linkUrl,action } = imagesAndsocialLinks ;
  // const [isLinkVisible, setLinkVisibility] = useState(false);

  const handleConnect = () => {
    // Redirect to the specified link location
    window.location.href = linkUrl;
  };
  const addBoxShadow = (e) => {
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  };

  const removeBoxShadow = (e) => {
    e.currentTarget.style.boxShadow = 'none';
  };
  // // // const [favorite, setFavorite] = useState(favorited);

  // // const handleChangeFavorite = useCallback((event) => {
  // //   setFavorite(event.target.checked);
  //  }, []);
  // const toggleLinkVisibility = () => {
  //   setLinkVisibility(!isLinkVisible);
  // };


  return (
    <Card  
    onMouseEnter={addBoxShadow}
      onMouseLeave={removeBoxShadow}
      sx={{ transition: 'box-shadow 0.5s', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a slight box shadow

      '&:hover': {
        boxShadow: (theme) => theme.customShadows.z24,
      },width:'300px',height:'300px'

    }}

    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: 1.5,
          pl: 2,
          pr: 1.5,
          top: 0,
           width: 1,
          zIndex: 9,
          position: 'absolute',
          height:'70px',
          // '&:hover': {
          //   boxShadow: (theme) => theme.customShadows.z24,
          // },
  
          
        }}
      >

        {/* <Stack
          spacing={0.5}
          direction="row"
          sx={{
            px: 1,
            borderRadius: 0.75,
            typography: 'subtitle2',
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          }}
        >
          {priceSale > 0 && (
            <Box
              sx={{
                color: 'grey.500',
                textDecoration: 'line-through',
                mr: 0.5,
              }}
            >
              {fCurrency(priceSale)}
            </Box>
          )}
          {fCurrency(price)}
        </Stack>

        <Checkbox
          color="error"
          checked={favorite}
          onChange={handleChangeFavorite}
          icon={<Iconify icon="carbon:favorite" />}
          checkedIcon={<Iconify icon="carbon:favorite-filled" />}
          sx={{ color: 'common.white' }}
        /> */}
      </Stack> 

      <Image sx={{width:'100px', height:'100px',ml:'85px',mt:'20px'}} src={imageUrl} ratio="1/1" />

      <Stack spacing={0.5} sx={{ p: 2.5 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary',ml:'85px',mt:'35px' }}>
          {name}
        </Typography>

        {/* <Link component={RouterLink} href={linkUrl} color="inherit"> */}
        {/* {isLinkVisible && (
          <TextMaxLine variant="h6" persistent>
            {linkUrl}
          </TextMaxLine>
        )} */}
        {/* </Link> */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleConnect} 
          sx={{ width: '130px',height:'40px',ml:'50px'}}
         // Redirect to the specified link location
        >
          {action} {/* Display the action text as the button label */}
        </Button>
        {/* {!showLink && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {linkUrl}
          </Typography>
        )} */}

      </Stack>

      <Divider sx={{ borderStyle: 'none' }} />

      {/* <Stack direction="row" alignItems="center" sx={{ p: 2.5 }}>
        <Stack
          flexGrow={1}
          direction="row"
          alignItems="center"
          sx={{ typography: 'body2', color: 'text.disabled' }}
        >
          <Iconify icon="carbon:time" width={16} sx={{ mr: 1 }} /> {duration}
        </Stack> */}

        {/* <Stack spacing={0.5} direction="row" alignItems="center">
          <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
          <Box sx={{ typography: 'h6' }}>
            {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
          </Box>
        </Stack>

      </Stack> */}

    </Card>
  );
}

TravelTourItemNew.propTypes = {
  imagesAndsocialLinks: PropTypes.shape({
    imageUrl: PropTypes.string, // Update property name to 'imageUrl'
    name: PropTypes.string,
    linkUrl: PropTypes.string,
    action: PropTypes.string,

  }),
};

