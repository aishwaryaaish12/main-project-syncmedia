import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/main';
import AuthGuard from 'src/auth/AuthGuard';
import DashboardLayout from 'src/layouts/dashboard/DashboardLayout';

import { SplashScreen } from 'src/components/loading-screen';

import { authRoutes } from './auth';
import { errorRoutes } from './error';
import { commonRoutes } from './common';
import { careerRoutes } from './career';
import { travelRoutes } from './travel';
import { marketingRoutes } from './marketing';
import { eLearningRoutes } from './elearning';
import { eCommerceRoutes } from './ecommerce';
import { componentsRoutes } from './components';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/home'));
const SupportPage = lazy(() => import('src/pages/support'));

export const UserListPage=lazy(() => import('../../pages/dashboard/UserListPage'));
export const GeneralAnalyticsPage=lazy(() => import('../../pages/dashboard/GeneralAnalyticsPage'));
export const SocialMediaListPage=lazy(() => import('../../pages/dashboard/SocialMediaListPage'));
export const NewSocialMediaPage=lazy(() => import('../../pages/dashboard/NewSocialMediaPage'));

export default function Router() {
  return useRoutes([
    {
      element: (
        <MainLayout>
          <Suspense fallback={<SplashScreen />}>
            <Outlet />
          </Suspense>
        </MainLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'support', element: <SupportPage /> },

        ...marketingRoutes,

        ...travelRoutes,

        ...careerRoutes,

        ...eLearningRoutes,

        ...eCommerceRoutes,

        ...componentsRoutes,
      ],
    },
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          {/* <RoleBasedGuard roles={['admin']} hasContent> */}
            <DashboardLayout />
          {/* </RoleBasedGuard> */}
        </AuthGuard>
      ),
      children: [
        // { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        // { path: 'app', element: <GeneralAppPage /> },

        { path: 'analytics', element: <GeneralAnalyticsPage /> },

        // { path: 'booking', element: <GeneralBookingPage /> },

        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },

            { path: 'list', element: <UserListPage /> },
          ],
        },
        {
          path: 'socialmedia',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },

            { path: 'new', element: <NewSocialMediaPage /> },
            { path: 'list', element: <SocialMediaListPage /> },

          ],
        },

 
       

        // { path: 'calendar', element: <CalendarPage /> },

        // { path: 'permission-denied', element: <PermissionDeniedPage /> },
],
},


    ...authRoutes,

    ...errorRoutes,

    ...commonRoutes,

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
