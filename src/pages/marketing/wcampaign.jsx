import { Helmet } from 'react-helmet-async';

import MarketingWcamView from 'src/sections/_marketing/view/marketing-wcam-view';

// ----------------------------------------------------------------------

export default function MarketingWcampaignPage() {
  return (
    <>
      <Helmet>
        <title>Whatsappcampaign Front page</title>
      </Helmet>

      <MarketingWcamView />
    </>
  );
}
