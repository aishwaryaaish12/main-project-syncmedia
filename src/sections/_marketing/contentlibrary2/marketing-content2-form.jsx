import * as Yup from 'yup';
// import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useResponsive } from 'src/hooks/use-responsive';

// import { fData } from 'src/utils/format-number';

import Image from 'src/components/image';
import FormProvider, {RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingContent2Form() {
  const mdUp = useResponsive('up', 'md');

  const TravelContactSchema = Yup.object().shape({
    blog: Yup.string().required('Blog is required'),
    description: Yup.string().required('Description is required'),
  });

  const defaultValues = {
    blog: '',
    description: '',
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
            <Image sx={{width:'100%', mt:10}}
              alt=" "
              src="/assets/illustrations/contentlibrary_blog.svg"
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
              <RHFTextField name="blog" multiline rows={6} label="Create Your Blog Here" sx={{pb:1}}/>
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
