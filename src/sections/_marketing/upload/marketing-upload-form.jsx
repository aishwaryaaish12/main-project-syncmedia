// import * as Yup from 'yup';
// // import { useCallback } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { fData } from 'src/utils/format-number';

// import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
// import RadioGroup from '@mui/material/RadioGroup';
// import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { RHFUpload } from 'src/components/hook-form';
// import FacebookIcon from '@mui/icons-material/Facebook';

// import FormProvider from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingUploadForm() {


  return (
    <Container>
    <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
      <Typography variant='h3' color='primary.darker'  sx={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>Social media Channels</Typography>
    </Stack>
    <Grid container spacing={2} justifyContent="center">
  <Grid item xs={9} sm={6} md={4} >
  <Paper elevation={5} sx={{ width: '100%',height: '350px', alignItems:'center',justifyContent:'center'}}>
       <Typography variant='h6'color='primary.darker' sx={{ mb: 2,pt:2, textAlign:'center' }}>Facebook</Typography>
       <Stack direction='row' justifyContent='center' sx={{ 
              '@media (max-width:200px)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}>
           <FormControlLabel value="story" control={<Checkbox />} label="Story" />
           <FormControlLabel value="post" control={<Checkbox />} label="Post" />
       </Stack>
   </Paper>
  </Grid>
  <Grid item xs={9} sm={6} md={4}>
  <Paper elevation={5} sx={{ width: '100%',height: '350px',}}>
       <Typography variant='h6'color='primary.darker' sx={{ mb: 2 ,pt:2, textAlign:'center' }}>Instagram</Typography>
       <Stack direction='row' justifyContent='center'sx={{ 
              '@media (max-width:200px)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}>
           <FormControlLabel value="reels" control={<Checkbox />} label="Reels" />
           <FormControlLabel value="story" control={<Checkbox />} label="Story" />
           <FormControlLabel value="post" control={<Checkbox />} label="Post" />
       </Stack>
    
    
   </Paper>
  </Grid>
  <Grid item xs={9} sm={6} md={4}>
  <Paper elevation={5} sx={{ width: '100%',height: '350px',}}>
       <Typography variant='h6'color='primary.darker' sx={{ mb: 2 ,pt:2, textAlign:'center' }}>LinkedIn</Typography>
       <Stack direction='row' justifyContent='center'>
           <FormControlLabel value="post" control={<Checkbox />} label="Post" />
       </Stack>
    
   </Paper>
  </Grid>
  <Grid item xs={9} sm={6} md={4}>
  <Paper elevation={5} sx={{ width: '100%',height: '350px',}}>
       <Typography variant='h6'color='primary.darker' sx={{ mb: 2,pt:2, textAlign:'center'  }}>Twitter</Typography>
       <Stack direction='row' justifyContent='center' sx={{ 
              '@media (max-width:200px)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}>
           <FormControlLabel value="image" control={<Checkbox />} label="Image" />
           <FormControlLabel value="video" control={<Checkbox />} label="Video" />
           <FormControlLabel value="text" control={<Checkbox />} label="Text" />
       </Stack>
    
   </Paper>
  </Grid>
  <Grid item xs={9} sm={6} md={4}>
  <Paper elevation={5} sx={{ width: '100%',height: '350px',}}>
       <Typography variant='h6'color='primary.darker' sx={{ mb: 2, pt:2, textAlign:'center' }}>YouTube</Typography>
       <Stack direction='row' justifyContent='center' sx={{ 
              '@media (max-width:200px)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}>
           <FormControlLabel value="video" control={<Checkbox />} label="Video" />
           <FormControlLabel value="shorts" control={<Checkbox />} label="Shorts" />
       </Stack>
    
   </Paper>
  </Grid>
</Grid>
    
    <Stack alignItems="center" sx={{ mt: 3 }}>
      <LoadingButton
         fullWidth
          size="large"
          variant="contained"
          color="primary"
          sx={{ width: '120px', mb:'2rem' }}
          // onClick={onSubmit}
          // loading={isSubmitting}
          >
         post
          </LoadingButton>
    </Stack>      
    </Container>
  );
}
