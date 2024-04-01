import * as Yup from 'yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useResponsive } from 'src/hooks/use-responsive';

import { fData } from 'src/utils/format-number';

import Image from 'src/components/image';
import FormProvider, {RHFUpload,RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingContent1Form() {
  const mdUp = useResponsive('up', 'md');

  const TravelContactSchema = Yup.object().shape({
    video: Yup.string().required('Video is required'),
    description: Yup.string().required('Description is required'),
  });

  const defaultValues = {
    video: '',
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
      
      const isVideo = file.type.startsWith('video/');

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      // if (file) {
      //   setValue('image', newFile, { shouldValidate: true });
      // }
      if (isVideo) {
        setValue('video', newFile, { shouldValidate: true }); // Assuming you have a field named 'video'
      } else {
        // Handle error or inform the user that only video files are allowed
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
              src="/assets/illustrations/contentlibrary_video.svg"
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
            color="inherit">
              Image
          </Button>
          <Button
            size='small'
            variant="contained"
            color="inherit">
              Video
          </Button>
          <Button
          size='small'
            variant="contained"
            color="inherit">
              Blog
          </Button>
          </Stack>
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2.5} alignItems="flex-start">
            <RHFUpload
                name="video"
                maxSize={52428800}
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
                   Upload the video
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
                       Allowed *.mp4, *.mov, *.avi
                      <br /> Max size of {fData(52428800)}
                    </Typography></>
                }
              />
              <RHFTextField name="description" multiline rows={4} label="Enter the description" sx={{ pb: 2.5 }} />

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
                Schedule
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
}
