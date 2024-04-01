import * as Yup from 'yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

// import { paths } from 'src/routes/paths';
// import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { fData } from 'src/utils/format-number';

import Image from 'src/components/image';
import FormProvider, {RHFUpload,RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingContentForm() {
  const mdUp = useResponsive('up', 'md');

  const TravelContactSchema = Yup.object().shape({
    image: Yup.string().required('Image is required'),
    description: Yup.string().required('Description is required'),
  });

  const defaultValues = {
    image: '',
    description: '',
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
            <Image sx={{width:'100%', mt:10}}
              alt=" "
              src="/assets/illustrations/contentlibrary_image.svg"
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
            <Typography variant="h3">Content Library</Typography>

            {/* <Typography sx={{ color: 'text.secondary' }}>
              We normally respond within 2 business days
            </Typography> */}
          </Stack>
          <Stack direction='row' spacing={2} mb={2}>
          <Button 
            size='small'
            variant="contained"
            color="error">
              image
              
          </Button>
          <Button
            size='small'
            variant="contained"
            color="error">
              Video
          </Button>
          <Button
          size='small'
            variant="contained"
            color="error">
              Blog
          </Button>
          </Stack>
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2.5} alignItems="flex-start">
            <RHFUpload
                name="image"
                maxSize={1048576}
                onDrop={handleDrop}
                placeholder="Upload the image"

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
                    <br /> max size of {fData(104857)}
                  </Typography></>
                }
              />
              <RHFTextField name="description" multiline rows={4} label="Enter the description" sx={{ pb: 2}} />

              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
                color="error"
                loading={isSubmitting}
                sx={{
                  alignSelf: { xs: 'center', md: 'unset' },
                }}
              >
                Schedule
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
}
