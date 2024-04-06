import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ForgotPasswordView() {
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const defaultValues = {
    email: '',
  };

  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Stack sx={{ textAlign: 'center' }}>
      <Image
        alt="reset password"
        src="/assets/icons/ic_lock_password.svg"
        sx={{ mb: 5, width: 96, height: 96, mx: 'auto' }}
      />

      <Typography variant="h3" paragraph sx={{color:'primary.darker'}}>
        Forgot Your Password?
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 5 }}>
        Please enter the email address associated with your account and We will email you a link to
        reset your password.
      </Typography>

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFTextField name="email" hiddenLabel placeholder="Email address" />
       
       
        <Link
          component={RouterLink}
          href={paths.reset}
          variant="body2"
          underline="always"
          color="text.secondary"
        >
  
        <LoadingButton
          fullWidth
          size="large"
          color="primary"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{ mt: 2.5 }}
        >
          Reset Password
        </LoadingButton>
        </Link>
      </FormProvider>

      <Link
        component={RouterLink}
        href={paths.loginBackground}
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
          mx: 'auto',
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
       <Stack direction="row" alignItems="center">
          {/* Typography component for "Return to" */}
          <Typography variant="subtitle2">
            Return to
          </Typography>
          <Iconify icon="carbon:chevron-left" width={16} sx={{ mr: 1 }} />
          {/* Typography component for "Sign in" with custom color */}
          <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
            Sign in
          </Typography>
        </Stack>
      </Link>
    </Stack>
  );
}
