import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';


// ----------------------------------------------------------------------

export default function MarketingUpdatePage() {
  const mdUp = useResponsive('up', 'md');

  const TravelContactSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    name: Yup.string().required('Full name is required'),

    email: Yup.string().required('Email is required').email('That is not an email'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    address: Yup.string().required('Address is required'),
    logo: Yup.string().required('Logo is required'),

  });

  const defaultValues = {
    fullName: '',
    nam:'',
    // subject: '',
    email: '',
    // message: '',
    phoneNumber: '',
    logo: '',
    address: '',


  };

  const methods = useForm({
    resolver: yupResolver(TravelContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log('DATA', data);
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image
              alt="travel-contact"
              src="/assets/images/marketing/business.jpg"
            />
          </Grid>
        )}

        <Grid xs={12} md={6} lg={6}>
          <Stack
            spacing={2}
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h3">Profile</Typography>

            {/* <Typography sx={{ color: 'text.secondary' }}>
              We normally respond within 2 business days
            </Typography> */}
          </Stack>

          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2.5} alignItems="flex-start">
              <RHFTextField name="fullName" label="Company Name" />
              <RHFTextField name="name" label="Product Name" />


              <RHFTextField name="email" label="Email" />



              <RHFTextField name="phoneNumber"  label="Phone Number"  />
                <RHFTextField name="logo" label="Logo" endIcon={<Iconify icon="/assets/icons/material-symbols-light--upload.svg" />} />

              <RHFTextField name="subject" label="Address" multiline rows={4}/>


              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
                color="inherit"
                loading={isSubmitting}
                sx={{
                  alignSelf: { xs: 'center', md: 'unset' },
                }}
              >
                Update
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
}
