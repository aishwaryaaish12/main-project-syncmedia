import * as Yup from 'yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { fData } from 'src/utils/format-number';

import FormProvider, { RHFUpload, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingWhatsappForm() {
  const CareerContactSchema = Yup.object().shape({
    campaignName: Yup.string().required('Campaign name is required'),
    subject: Yup.string().required('subject is required'),
    description: Yup.string().required('Description is required'),
    link: Yup.string().required('Link is required'),
    image: Yup.string().required('Image is required'),
    sender: Yup.string().required('Sender Phone number is required'),
    recipient: Yup.string().required('Recipient file is required'),
  });

  const defaultValues = {
    campaignName: '',
    subject: '',
    description: '',
    link: '',
    image: '',
    sender: '',
    recipient: '',
  };

  const methods = useForm({
    resolver: yupResolver(CareerContactSchema),
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
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
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
        py: 10,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid xs={12} md={8}>
          <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
            <Typography variant="h3">Create Your WhatsApp Campaign Here</Typography>

            {/* <Typography sx={{ color: 'text.secondary' }}>
              We normally respond within 2 business days
            </Typography> */}
          </Stack>

          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2.5}>
              <RHFTextField name="campaignName" label="Campaign name" />
              <RHFTextField name="subject" label="Subject" />
              <RHFTextField name="description" multiline rows={4} label="Description"  />
              <RHFTextField name="link" label="Link" />
              <RHFUpload
                name="image"
                maxSize={1048576}
                onDrop={handleDrop}

                // onRemove={handleRemoveFile}
                // onRemoveAll={handleRemoveAllFiles}
                // onUpload={() => console.log('ON UPLOAD')}
                helperText={
                  <>
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                     Upload image
                    </Typography>
                  <Typography
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
                    <br /> max size of {fData(1048576)}
                  </Typography></>
                }
              />
              <RHFTextField name="sender" label="Sender mobile No" />
              <RHFUpload
                name="recipient"
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
                    Upload Recipient file
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



              <Stack  alignItems="center" width={1}>
                <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  color="inherit"
                  loading={isSubmitting}
                >
                  Create
                </LoadingButton>
                
              </Stack>
            </Stack>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
}
