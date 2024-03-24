import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormHelperText from '@mui/material/FormHelperText';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';

// import { fCurrency } from 'src/utils/format-number';

import { _tags } from 'src/_mock';

import FormProvider, { RHFTextField, } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function MarketingContetForm() {
  const MarketingContactSchema = Yup.object().shape({
    services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
    email: Yup.string().required('Email is required').email('That is not an email'),
    compnany: Yup.string().required('Compnany is required'),
    website: Yup.string().required('Website is required'),
  });

  const defaultValues = {
    services: [],
    firstName: '',
    lastName: '',
    // email: '',
    phoneNumber: '',
    // compnany: '',
    website: '',
    // budget: [2000, 10000],
    message: '',
    image: '',
  };

  const methods = useForm({
    resolver: yupResolver(MarketingContactSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
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

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2} alignItems="flex-start">
        <Controller
          name="services"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div>
              <Stack direction="row" flexWrap="wrap" spacing={1}>
                {_tags.slice(0, 5).map((service) => (
                  <ToggleButton
                    {...field}
                    key={service}
                    color="standard"
                    selected={field.value.includes(service)}
                    onChange={() => field.onChange(getSelected(field.value, service))}
                    sx={{
                      py: 0.5,
                      px: 2,
                      typography: 'body2',
                      [`&.${toggleButtonClasses.selected}`]: {
                        bgcolor: 'text.primary',
                        borderColor: 'transparent',
                        color: (theme) =>
                          theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                        '&:hover': {
                          bgcolor: 'text.primary',
                        },
                      },
                    }}
                  >
                    {service}
                  </ToggleButton>
                ))}
              </Stack>

              {!!error && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )}
            </div>
          )}
        />

         {/* <Stack
          spacing={{ xs: 2.5, md: 2 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{ width: 1 }}
        >
          <RHFTextField name="firstName" label="First Name" />
          <RHFTextField name="lastName" label="Last Name" />
        </Stack> */}

        {/* <RHFTextField name="email" label="Email" /> */}
        {/* <RHFTextField name="phoneNumber" label="Phone number" /> */}

        <Controller
          name="image"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <label htmlFor="imageUpload" style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', marginBottom: '16px' }}>
              <input
                id="imageUpload"
                {...field}
                type="file"
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files[0])}
                style={{ display: 'none' }} // hide the default file input
              />
              {field.value ? (
                <img
                  src={URL.createObjectURL(field.value)}
                  alt=""
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
              ) : (
                <div style={{ textAlign: 'center', color: '#999' }}>Upload Image</div>
              )}
              {!!error && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )}
            </label>
          )}
        />
        


        <Stack spacing={5} sx={{ py: 2, width: 1 }}>
          {/* <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Your Budget
          </Typography> */}

          {/* <RHFSlider
            name="budget"
            valueLabelDisplay="on"
            max={20000}
            step={1000}
            valueLabelFormat={(value) => fCurrency(value)}
          /> */}
        </Stack>

        <RHFTextField name="description" label="Description" multiline rows={4} />
      </Stack>

      <LoadingButton
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 3 }}
      >
        Upload
      </LoadingButton>
    </FormProvider>
  );
}
