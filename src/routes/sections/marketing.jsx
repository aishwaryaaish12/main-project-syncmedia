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
const SubscriptionView = lazy(() => import('src/pages/marketing/subscription'));
const TrialEndedView = lazy(() => import('src/pages/marketing/trialended'));


const EmailPage = lazy(() => import('src/pages/marketing/emailcampaign'));
const SchedulePage = lazy(() => import('src/pages/marketing/schedule'));
const WhatsappPage = lazy(() => import('src/pages/marketing/whatsappcampaign'));
const EcampaignPage = lazy(() => import('src/pages/marketing/ecampaign'));
const WcampaignPage = lazy(() => import('src/pages/marketing/wcampaign'));
const UploadPage = lazy(() => import('src/pages/marketing/upload'));
const CalendarPage = lazy(() => import('src/pages/marketing/calendar'));
const EmailtemplatePage = lazy(() => import('src/pages/marketing/emailtemplate'));
const WhatsapptemplatePage = lazy(() => import('src/pages/marketing/whatsapptemplate'));
const DraftPage = lazy(() => import('src/pages/marketing/draft'));
const UnsubscribePage = lazy(() => import('src/pages/marketing/unsubscribe'));

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
      { path: 'subscription', element: <SubscriptionView /> },
      { path: 'trialended', element: <TrialEndedView /> },

      



      { path: 'emailcampaign', element: <EmailPage /> },
      { path: 'schedule', element: <SchedulePage /> },
      { path: 'whatsappcampaign', element: <WhatsappPage /> },
      { path: 'ecampaign', element: <EcampaignPage /> },
      { path: 'wcampaign', element: <WcampaignPage /> },
      { path: 'upload', element: <UploadPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'emailtemplate', element: <EmailtemplatePage /> },
      { path: 'whatsapptemplate', element: <WhatsapptemplatePage /> },
      { path: 'draft', element: <DraftPage /> },
      { path: 'unsubscribe', element: <UnsubscribePage /> },
    ],
  },
];
