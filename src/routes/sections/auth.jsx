import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AuthCoverLayout from 'src/layouts/auth/cover';
import AuthBackgroundLayout from 'src/layouts/auth/background';
import AuthIllustrationLayout from 'src/layouts/auth/illustration';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const LoginBackgroundPage = lazy(() => import('src/pages/auth/login-background'));
const LoginCoverPage = lazy(() => import('src/pages/auth/login-cover'));
const LoginIllustrationPage = lazy(() => import('src/pages/auth/login-illustration'));
const RegisterBackgroundPage = lazy(() => import('src/pages/auth/register-background'));
const RegisterCoverPage = lazy(() => import('src/pages/auth/register-cover'));
const RegisterIllustrationPage = lazy(() => import('src/pages/auth/register-illustration'));
const ForgotPasswordPage = lazy(() => import('src/pages/auth/forgot-password'));
const VerifyPage = lazy(() => import('src/pages/auth/verify'));
const ResetPasswordPage = lazy(() => import('src/pages/auth/reset'));
const ResetPasswordForm = lazy(() => import('src/pages/auth/resetpassword'));


// ----------------------------------------------------------------------

export const authRoutes = [
  {
    path: 'auth',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: 'login-cover',
        element: (
          <AuthCoverLayout
            title="Hi, Welcome Back"
            images={[
              '/assets/images/travel/travel_post_01.jpg',
              '/assets/images/travel/travel_post_03.jpg',
            ]}
          >
            <LoginCoverPage />
          </AuthCoverLayout>
        ),
      },
      {
        path: 'register-cover',
        element: (
          <AuthCoverLayout
            title={`Manage The Job \n More Effectively`}
            images={[
              '/assets/images/travel/travel_post_01.jpg',
              '/assets/images/travel/travel_post_03.jpg',
            ]}
          >
            <RegisterCoverPage />
          </AuthCoverLayout>
        ),
      },
      {
        path: 'login-illustration',
        element: (
          <AuthIllustrationLayout>
            <LoginIllustrationPage />
          </AuthIllustrationLayout>
        ),
      },
      {
        path: 'register-illustration',
        element: (
          <AuthIllustrationLayout>
            <RegisterIllustrationPage />
          </AuthIllustrationLayout>
        ),
      },
      {
        path: 'login-background',
        element: (
          <AuthBackgroundLayout>
            <LoginBackgroundPage />
          </AuthBackgroundLayout>
        ),
      },
      {
        path: 'register-background',
        element: (
          <AuthBackgroundLayout>
            <RegisterBackgroundPage />
          </AuthBackgroundLayout>
        ),
      },
      {
        element: (
          <AuthBackgroundLayout>
            <Outlet />
          </AuthBackgroundLayout>
        ),
        children: [
          { path: 'forgot-password', element: <ForgotPasswordPage /> },
          { path: 'verify', element: <VerifyPage /> },
          { path: 'reset', element: <ResetPasswordPage /> },
          { path: 'resetpassword', element: <ResetPasswordForm /> },
        ],
      },
    ],
  },
];
