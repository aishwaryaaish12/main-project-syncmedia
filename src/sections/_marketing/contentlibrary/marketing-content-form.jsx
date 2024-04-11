import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

// import { useResponsive } from 'src/hooks/use-responsive';

// import { fData } from 'src/utils/format-number';

import Image from 'src/components/image';
import FormProvider, { RHFUpload, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingContentForm() {
  // const mdUp = useResponsive('up', 'md');
  const [activeButton, setActiveButton] = useState('image'); // Default to video button
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState([]);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    setSnackbarMessage('');
    setSnackbarOpen(false);
    setSelectedContent([buttonType]);
  };


  const MarketingContentSchema = Yup.object().shape({
    image: Yup.string().when('type', {
      is: 'image',
      then: Yup.string().required('Image is required'),
    }),
    video: Yup.string().when('type', {
      is: 'video',
      then: Yup.string().required('Video is required'),
    }),
    blog: Yup.string().when('type', {
      is: 'blog',
      then: Yup.string().required('Blog is required'),
    }),
    description: Yup.string().required('Description is required'),
  });

  const defaultValues = {
    image: '',
    video: '',
    blog: '',
    description: '',
  };

  const methods = useForm({
    resolver: yupResolver(MarketingContentSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (selectedContent.length !== 1) {
        setSnackbarMessage('Select only one content type.');
        setSnackbarOpen(true);
        return;
      }

      console.log('DATA', data);
      methods.reset();
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (activeButton === 'image' && file.type.startsWith('image/')) {
        const newFile = Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
        setValue(activeButton, newFile, { shouldValidate: true });
      }

      // Check if the active button is 'video' and if the dropped file's type starts with 'video/'
      if (activeButton === 'video' && file.type.startsWith('video/')) {
        const newFile = Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
        setValue(activeButton, newFile, { shouldValidate: true });
      }
    },
    [setValue, activeButton]
  );



  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        <Grid xs={12} md={6} lg={5}>
          {activeButton === 'image' && (
            <Image
              sx={{ width: '100%', mt: 5 }}
              alt=""
              src="/assets/illustrations/contentlibrary_image.svg"
            />
          )}
          {activeButton === 'video' && (
            <Image
              sx={{ width: '100%', mt: 5 }}
              alt=""
              src="/assets/illustrations/contentlibrary_video.svg"
            />
          )}
          {activeButton === 'blog' && (
            <Image
              sx={{ width: '100%', mt: 5 }}
              alt=""
              src="/assets/illustrations/contentlibrary_blog.svg"
            />
          )}
        </Grid>


        <Grid xs={12} md={6} lg={6}>
          <Stack
            spacing={2}
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h3" color='primary.darker'sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }} >Content Library</Typography>
          </Stack>
          <Stack direction='row' spacing={2} mb={2}>
            <Button
              onClick={() => handleButtonClick('image')}
              size="small"
              variant={activeButton === 'image' ? 'outlined' : 'contained'}
              color={activeButton === 'image' ? 'primary' : 'primary'}
              sx={{
                color: activeButton === 'image' ? 'primary' : 'primary',
              }}
            >
              Image
            </Button>
            <Button
              onClick={() => handleButtonClick('video')}
              size="small"
              variant={activeButton === 'video' ? 'outlined' : 'contained'}
              color={activeButton === 'video' ? 'primary' : 'primary'}
              sx={{
                color: activeButton === 'video' ? 'primary' : 'primary',
              }}
            >
              Video
            </Button>
            <Button
              onClick={() => handleButtonClick('blog')}
              size="small"
              variant={activeButton === 'blog' ? 'outlined' : 'contained'}
              color={activeButton === 'blog' ? 'primary' : 'primary'}
              sx={{
                color: activeButton === 'blog' ? 'primary' : 'primary',
              }}
            >
              Blog
            </Button>
          </Stack>
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2.5} alignItems="flex-start">
              {activeButton === 'image' && (
                <RHFUpload
                  name="image"
                  maxSize={52428800}
                  onDrop={handleDrop}
                  error={errors.image?.message}
                // Additional props...
                />
              )}
              {activeButton === 'video' && (
                <RHFUpload
                  name="video"
                  maxSize={52428800}
                  onDrop={handleDrop}
                  error={errors.video?.message}
                // Additional props...
                />
              )}
              {activeButton === 'blog' && (
                <RHFTextField
                  name="blog"
                  multiline
                  rows={4}
                  label="Write your blog"
                  sx={{ pb: 2 }}
                  error={errors.blog?.message}
                />
              )}

              {/* Render other fields conditionally based on the activeButton */}
              <RHFTextField name="description" multiline rows={4} label="Enter the description" sx={{ pb: 2 }} error={errors.description?.message} />
              <Button
                component={RouterLink}
                href={paths.marketing.schedule}
                size="large"
                type="submit"
                variant="contained"
                color='primary'
                loading={isSubmitting || selectedContent.length !== 1}
                sx={{
                  alignSelf: { xs: 'center', md: 'unset' },
                }}
              >
                Schedule
              </Button>
            </Stack>
          </FormProvider>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Container>
  );
}
