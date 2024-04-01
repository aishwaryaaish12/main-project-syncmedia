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
const ContentPage = lazy(() => import('src/pages/marketing/contentlibrary'));
const UpdatePage = lazy(() => import('src/pages/marketing/update'));
const SocialConnectPage = lazy(() => import('src/pages/marketing/socialconnect'));
const EmailPage = lazy(() => import('src/pages/marketing/emailcampaign'));
const Content1Page = lazy(() => import('src/pages/marketing/contentlibrary1'));
const Content2Page = lazy(() => import('src/pages/marketing/contentlibrary2'));
const SchedulePage = lazy(() => import('src/pages/marketing/schedule'));
const WhatsappPage = lazy(() => import('src/pages/marketing/whatsappcampaign'));
const EcampaignPage = lazy(() => import('src/pages/marketing/ecampaign'));
const WcampaignPage = lazy(() => import('src/pages/marketing/wcampaign'));


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
      { path: 'content', element: <ContentPage /> },
      { path: 'loghome', element: <LoginPage /> },
      { path: 'business', element: <BusinessPage /> },
      { path: 'contactus', element: <ContactUsPage /> },
      { path: 'update', element: <UpdatePage /> },
      { path: 'socialconnect', element: <SocialConnectPage /> },
      { path: 'emailcampaign', element: <EmailPage /> },
      { path: 'content1', element: <Content1Page /> },
      { path: 'content2', element: <Content2Page /> },
      { path: 'schedule', element: <SchedulePage /> },
      { path: 'whatsappcampaign', element: <WhatsappPage /> },
      { path: 'ecampaign', element: <EcampaignPage /> },
      { path: 'wcampaign', element: <WcampaignPage /> },
    ],
  },
];
