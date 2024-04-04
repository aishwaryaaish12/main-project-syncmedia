import { Helmet } from 'react-helmet-async';

import MarketingTrialEndedPage from 'src/sections/_marketing/view/marketing-trialended';

// ----------------------------------------------------------------------

export default function MarketingTrialEndedview() {
  return (
    <>
      <Helmet>
        <title> Marketing: Trial Ended</title>
      </Helmet>

      <MarketingTrialEndedPage/>
    </>
  );
}
