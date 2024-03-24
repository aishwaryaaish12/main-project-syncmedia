import { Helmet } from 'react-helmet-async';

import ResetPasswordForm from 'src/sections/auth/resetpassword-page';

// ----------------------------------------------------------------------

export default function ResettingPage() {
  return (
    <>
      <Helmet>
        <title> Resetting Password</title>
      </Helmet>

      <ResetPasswordForm />
    </>
  );
}
