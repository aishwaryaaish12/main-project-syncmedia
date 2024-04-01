import * as Yup from 'yup';
// import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { fData } from 'src/utils/format-number';

// import { Card } from '@mui/material';

import FormProvider from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingScheduleForm() {
  const ScheduleSchema = Yup.object().shape({
    startDateandTime: Yup.date().typeError('Starting date and time is required').required('Starting date and time is required'),
    endDateandTime: Yup.date().typeError('Ending date and time is required').required('Ending date and time is required'),  
  });

  const defaultValues = {
    startDateandTime: '',
    endDateandTime: '',
  };

  const methods = useForm({
    resolver: yupResolver(ScheduleSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('Start Date and Time:', data.startDateandTime);
      console.log('End Date and Time:', data.endDateandTime);
    } catch (error) {
      console.error(error);
    }
  });

  

  return (
    <Container
      sx={{
        py: 6,
        borderRadius:2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth:'100%', 
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid xs={12} md={8}>
          <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
            <Typography variant="h3">Schedule Your Content</Typography>

            {/* <Typography sx={{ color: 'text.secondary' }}>
              We normally respond within 2 business days
            </Typography> */}
          </Stack>

          <FormProvider {...methods}>
              <Stack spacing={2.5}>
                <DateTimePicker label="Starting date and time" name="startDateandTime" />
                <DateTimePicker label="Ending date and time" name="endDateandTime" />
              </Stack>
              <Stack alignItems="center" width={1} direction="row" spacing={3} sx={{ mt: 3 }}>
                <LoadingButton
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="inherit"
                  loading={isSubmitting}
                >
                  Upload
                </LoadingButton>
                <LoadingButton
                  fullWidth
                  size="large"
                  variant="contained"
                  color="inherit"
                  onClick={handleSubmit(onSubmit)} // Note: No need for type="submit"
                  loading={isSubmitting}
                >
                  Add to Draft
                </LoadingButton>
              </Stack>
            </FormProvider>
 
        </Grid>
      </Grid>
    </Container>
  );
}
