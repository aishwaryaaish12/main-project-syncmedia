import * as Yup from 'yup';
// import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// import { fData } from 'src/utils/format-number';
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

// import { Card } from '@mui/material';

import FormProvider from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingScheduleForm() {

  const navigate = useNavigate()
  const ScheduleSchema = Yup.object().shape({
    startDateAndTime: Yup.date().required('Starting date and time is required'),
    endDateAndTime: Yup.date().required('Ending date and time must be after starting date and time'),
  });

  const defaultValues = {
    startDateAndTime: new Date() || null,
    endDateAndTime: new Date() || null,
  };

  const methods = useForm({
    resolver: yupResolver(ScheduleSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    // setValue,
    formState: { isSubmitting, errors },
  } = methods;


  console.log('error is ', errors)


  const onSubmit = handleSubmit(async (data) => {
    try {
      reset();
      console.log('DATA', data)
      navigate(paths.marketing.upload)
    } catch (error) {
      console.error(error);
    }
  });
  const onSubmitt = handleSubmit(async (data) => {
    try {
      reset();
      console.log('DATA', data)
      navigate(paths.marketing.draft)
    } catch (error) {
      console.error(error);
    }
  });




  return (
    <Container
      sx={{
        py: 6,
        borderRadius: 2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        maxWidth: '100%',
        width: '550px',
        height:'500px',
        backgroundColor: 'rgba(186, 208, 228, 0.2)',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid xs={12} md={8} sx={{marginTop:'20px'}}>
          <Stack spacing={3} sx={{ mb: 5, textAlign: 'center' }}>
            <Typography variant="h3" color='primary.darker'sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Schedule Your Content</Typography>
          </Stack>

          <FormProvider {...methods}>
            <Stack spacing={5}>
              <DateTimePicker
                label="Starting date and time"
                name="startDateAndTime"
              />
              <DateTimePicker
                label="Ending date and time"
                name="endDateAndTime"
              />
            </Stack>
            <Stack alignItems="center" width={1} direction="row" spacing={3} sx={{ mt: 5 }}>
              <Button
                fullWidth
                type='submit'
                size="large"
                variant="contained"
                color="primary"
                onClick={onSubmit}
                loading={isSubmitting.toString()}
              >
                Upload
              </Button>
              <Button
                component={RouterLink}
                href={paths.marketing.upload}
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                onClick={onSubmitt}
                loading={isSubmitting.toString()}
              >
                Add to Draft
              </Button>
            </Stack>
          </FormProvider>

        </Grid>
      </Grid>
    </Container>
  );
}
