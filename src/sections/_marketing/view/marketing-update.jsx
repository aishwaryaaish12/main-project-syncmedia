import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { fData } from 'src/utils/format-number';




// import { InputAdornment } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
// import Iconify from 'src/components/iconify';
import FormProvider, { RHFUpload,RHFTextField,RHFUploadAvatar } from 'src/components/hook-form';


// form
// import { Controller, useFormContext } from 'react-hook-form';

// @mui
// import { FormHelperText } from '@mui/material';

//
// import { Upload, UploadBox, UploadAvatar } from '../upload';
// ----------------------------------------------------------------------

RHFUploadAvatar.propTypes = {
  name: PropTypes.string,
};




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
    setValue,
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
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('image', newFile, { shouldValidate: true });
      }
    },
[setValue]
);


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
            <Typography variant="h3" sx={{color:'primary.darker'}}> Profile</Typography>

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
             <RHFTextField name="subject" label="Address"  multiline rows={4}/> 

              {/* <RHFTextField name="logo" label="Logo" multiline rows={4}/> */}
              <RHFUpload
                name="image"
                maxSize={3145728}
                onDrop={handleDrop}
                // onRemove={handleRemoveFile}
                // onRemoveAll={handleRemoveAllFiles}
                // onUpload={() => console.log('ON UPLOAD')}
                helperText={
                  <><Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
               Upload Logo 
                  </Typography><Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                   Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> max size of {fData(3145728)}
                    </Typography></>
}
/>


              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
                color="primary"
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
