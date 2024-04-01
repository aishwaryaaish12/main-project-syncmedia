import { Helmet } from 'react-helmet-async';

import MarketingEcamView from 'src/sections/_marketing/view/marketing-ecam-view';

// ----------------------------------------------------------------------

export default function MarketingEcampaignPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Email campaign front page</title>
      </Helmet>

      <MarketingEcamView />
    </>
  );
}
