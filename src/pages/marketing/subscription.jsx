import { Helmet } from 'react-helmet-async';

import MarketingSubscriptionPage from 'src/sections/_marketing/view/marketing-subscription';

// ----------------------------------------------------------------------

export default function MarketingSubscriptionview() {
  return (
    <>
      <Helmet>
        <title> Marketing: Subscription</title>
      </Helmet>

      <MarketingSubscriptionPage />
    </>
  );
}
