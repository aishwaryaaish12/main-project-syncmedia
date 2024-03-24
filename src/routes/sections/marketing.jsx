import { lazy } from 'react';

// ----------------------------------------------------------------------

const BlogPage = lazy(() => import('src/pages/marketing/posts'));
const PostPage = lazy(() => import('src/pages/marketing/post'));
const AboutPage = lazy(() => import('src/pages/marketing/about'));
const ContactPage = lazy(() => import('src/pages/marketing/contact'));
const LandingPage = lazy(() => import('src/pages/marketing/landing'));
const ServicesPage = lazy(() => import('src/pages/marketing/services'));
const CaseStudyPage = lazy(() => import('src/pages/marketing/case-study'));
const CaseStudiesPage = lazy(() => import('src/pages/marketing/case-studies'));
const LoginPage = lazy(() => import('src/pages/marketing/loghome'));
const BusinessPage = lazy(() => import('src/pages/marketing/business'));
const ContactUsPage = lazy(() => import('src/pages/marketing/contactus'));
const UpdatePage = lazy(() => import('src/pages/marketing/update'));
const SocialConnectPage = lazy(() => import('src/pages/marketing/socialconnect'));




// ----------------------------------------------------------------------

export const marketingRoutes = [
  {
    path: 'marketing',
    children: [
      { element: <LandingPage />, index: true },
      { path: 'services', element: <ServicesPage /> },
      { path: 'case-studies', element: <CaseStudiesPage /> },
      { path: 'case-study', element: <CaseStudyPage /> },
      { path: 'posts', element: <BlogPage /> },
      { path: 'post', element: <PostPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'loghome', element: <LoginPage /> },
      { path: 'business', element: <BusinessPage /> },
      { path: 'contactus', element: <ContactUsPage /> },
      { path: 'update', element: <UpdatePage /> },
      { path: 'socialconnect', element: <SocialConnectPage /> },

    ],
  },
];
