import * as Yup from 'yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fData } from 'src/utils/format-number';

import FormProvider, { RHFUpload, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingEmailForm() {
  const CareerContactSchema = Yup.object().shape({
    campaignName: Yup.string().required('Campaign name is required'),
    subject: Yup.string().required('subject is required'),
    description: Yup.string().required('Description is required'),
    link: Yup.string().url('Invalid URL format').required('Link is required'),
    image: Yup.mixed().required('Image is required'),
    from: Yup.string().email('Invalid email format').required('From address is required'),
    to: Yup.mixed().required('To address file is required'),
    scheduleCampaign: Yup.date().required('Date and time is required'),
  });

  const defaultValues = {
    campaignName: '',
    subject: '',
    description: '',
    link: '',
    image: '',
    from: '',
    to: '',
    scheduleCampaign: new Date() || null,
  };

  const methods = useForm({
    resolver: yupResolver(CareerContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
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

  const handleDropImage = useCallback(
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

  const handleDropTo = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('to', newFile, { shouldValidate: true });
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
            <Typography variant="h3"color='primary.darker'>Create Your Email Campaign Here</Typography>
          </Stack>

          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2.5}>
              <RHFTextField name="campaignName" label="Campaign name" />
              <RHFTextField name="subject" label="Subject" />
              <RHFTextField name="description" multiline rows={4} label="Description"  />
              <RHFTextField name="link" label="Link" />
              <RHFUpload
                name="image"
                maxSize={52428800}
                onDrop={handleDropImage}
                accept={{ 'image/*': ['.jpg', '.jpeg', '.png', '.gif'] }} // Only accept image files
                error={errors.image?.message}
                helperText={
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
                        Select the image
                      </Typography>
                  }
              />
              <RHFTextField name="from" label="From" />
              <RHFUpload
                  name="to"
                  maxSize={3145728}
                  onDrop={handleDropTo}
                  accept={{ 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'] }} // Only accept Excel files
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
                        Upload To address EXCEL file
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
                        Allowed *.xlsx files
                        <br /> max size of {fData(3145728)}
                      </Typography>
                    </>
                  }
                />
                <DateTimePicker
                label="Schedule Campaign"
                name="scheduleCampaign"
              />



              <Stack  alignItems="center" width={1}>
                <LoadingButton
                  component={RouterLink}
                  href={paths.marketing.emailtemplate}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
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
