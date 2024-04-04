import { Helmet } from 'react-helmet-async';

import MarketingEmailView from 'src/sections/_marketing/view/marketing-email-view';

// ----------------------------------------------------------------------

export default function MarketingEmailPage() {
  return (
    <>
      <Helmet>
        <title> Emailcampaign Form</title>
      </Helmet>

      <MarketingEmailView />
    </>
  );
}
