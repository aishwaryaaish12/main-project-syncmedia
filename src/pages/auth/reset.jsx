import { Helmet } from 'react-helmet-async';

import ResetPassword from 'src/sections/auth/reset-password-otp';

// ----------------------------------------------------------------------

export default function ResetPasswordPage() {
  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>

      <ResetPassword />
    </>
  );
}
